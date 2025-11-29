import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ProtectedLayout } from "@/components/auth/protected-layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedLayout requireEmailVerification={true}>
      <DashboardShell>{children}</DashboardShell>
    </ProtectedLayout>
  );
}
