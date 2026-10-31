import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { LogOut, Settings, UserPlus } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import InviteTeamMemberModal from "@/components/team/invite-team-member-modal";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import useSignOut from "@/hooks/mutations/use-sign-out";
import useGetConfig from "@/hooks/queries/config/use-get-config";
import { useWorkspacePermission } from "@/hooks/use-workspace-permission";
import { toast } from "@/lib/toast";
import useProjectStore from "@/store/project";

export function NavSecondary() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { canInviteUsers } = useWorkspacePermission();
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const { data: config } = useGetConfig();
  const { mutateAsync: signOut, isPending } = useSignOut(
    config?.customOAuthLogoutUrl,
  );
  const queryClient = useQueryClient();
  const { setProject } = useProjectStore();

  const handleSignOut = async () => {
    try {
      await signOut();
      queryClient.clear();
      setProject(undefined);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not sign out",
      );
    }
  };

  return (
    <>
      <SidebarMenu className="gap-0.5">
        {canInviteUsers() && (
          <SidebarMenuItem>
            <SidebarMenuButton
              size="default"
              className="h-8 text-sm"
              onClick={() => setIsInviteOpen(true)}
            >
              <UserPlus aria-hidden="true" />
              <span>{t("navigation:sidebar.invitePeople")}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )}
        <SidebarMenuItem>
          <SidebarMenuButton
            size="default"
            className="h-8 text-sm"
            onClick={() =>
              navigate({ to: "/dashboard/settings/account/information" })
            }
          >
            <Settings aria-hidden="true" />
            <span>{t("navigation:userMenu.settings")}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="default"
            className="h-8 text-sm"
            disabled={isPending}
            onClick={() => void handleSignOut()}
          >
            <LogOut aria-hidden="true" />
            <span>Sign out</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <InviteTeamMemberModal
        open={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
      />
    </>
  );
}
