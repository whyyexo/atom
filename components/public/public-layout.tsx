import { PremiumFooter } from "./premium-footer";
import { PremiumNavbar } from "./premium-navbar";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] font-[var(--font-geist-sans)]">
      <PremiumNavbar />
      <main className="pt-[64px]">{children}</main>
      <PremiumFooter />
    </div>
  );
}

