import { Shell } from "@/components/layout/Shell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Shell>{children}</Shell>;
}

