import { createFileRoute } from "@tanstack/react-router";
import WorkspaceLayout from "@/components/common/workspace-layout";
import PageTitle from "@/components/page-title";

export const Route = createFileRoute(
  "/_layout/_authenticated/dashboard/workspace/$workspaceId/sd-home",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle title="SD Home" />
      <WorkspaceLayout title="SD Home">
        <iframe
          title="SD Home"
          src="/hub/?embed=1&tab=today"
          className="h-full min-h-[75vh] w-full border-0"
        />
      </WorkspaceLayout>
    </>
  );
}
