import { PublicFooter } from "./public-footer";
import { PublicNavigation } from "./public-navigation";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#000000] font-[var(--font-inter)]">
      <PublicNavigation />
      <main className="pt-20">{children}</main>
      <PublicFooter />
    </div>
  );
}

