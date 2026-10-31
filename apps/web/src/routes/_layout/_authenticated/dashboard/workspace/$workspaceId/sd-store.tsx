import { createFileRoute } from "@tanstack/react-router";
import WorkspaceLayout from "@/components/common/workspace-layout";
import PageTitle from "@/components/page-title";

export const Route = createFileRoute(
  "/_layout/_authenticated/dashboard/workspace/$workspaceId/sd-store",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle title="Get more features" />
      <WorkspaceLayout title="Get more features">
        <iframe
          title="Get more features"
          src="/hub/?embed=1&tab=store"
          className="h-full min-h-[75vh] w-full border-0"
        />
      </WorkspaceLayout>
    </>
  );
}
