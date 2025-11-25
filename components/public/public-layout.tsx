import { PremiumFooter } from "./premium-footer";
import { PremiumNavbar } from "./premium-navbar";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#000000] font-[var(--font-inter)]">
      <PremiumNavbar />
      <main className="pt-[52px]">{children}</main>
      <PremiumFooter />
    </div>
  );
}

