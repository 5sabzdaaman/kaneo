import { createFileRoute } from "@tanstack/react-router";
import WorkspaceLayout from "@/components/common/workspace-layout";
import PageTitle from "@/components/page-title";

export const Route = createFileRoute(
  "/_layout/_authenticated/dashboard/workspace/$workspaceId/sd-learn",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle title="Learn" />
      <WorkspaceLayout title="Learn">
        <iframe
          title="Learn"
          src="/hub/?embed=1&tab=learn"
          className="h-full min-h-[75vh] w-full border-0"
        />
      </WorkspaceLayout>
    </>
  );
}
