import { PremiumFooter } from "./premium-footer";
import { PremiumNavbar } from "./premium-navbar";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-[#000000] dark:text-white font-[var(--font-inter)]">
      <PremiumNavbar />
      <main className="pt-20">{children}</main>
      <PremiumFooter />
    </div>
  );
}

