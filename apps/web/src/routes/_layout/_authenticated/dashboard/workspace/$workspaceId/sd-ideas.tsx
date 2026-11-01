import { createFileRoute } from "@tanstack/react-router";
import WorkspaceLayout from "@/components/common/workspace-layout";
import PageTitle from "@/components/page-title";

export const Route = createFileRoute(
  "/_layout/_authenticated/dashboard/workspace/$workspaceId/sd-ideas",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle title="Business ideas" />
      <WorkspaceLayout title="Business ideas">
        <iframe
          title="Business ideas"
          src="/hub/?embed=1&tab=biz"
          className="h-full min-h-[75vh] w-full border-0"
        />
      </WorkspaceLayout>
    </>
  );
}
