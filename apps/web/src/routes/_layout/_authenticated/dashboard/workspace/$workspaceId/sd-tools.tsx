import { createFileRoute } from "@tanstack/react-router";
import WorkspaceLayout from "@/components/common/workspace-layout";
import PageTitle from "@/components/page-title";

export const Route = createFileRoute(
  "/_layout/_authenticated/dashboard/workspace/$workspaceId/sd-tools",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle title="SD Tools" />
      <WorkspaceLayout title="SD Tools">
        <iframe
          title="SD Tools"
          src="/hub/?embed=1&tab=tools"
          className="h-full min-h-[75vh] w-full border-0"
        />
      </WorkspaceLayout>
    </>
  );
}
