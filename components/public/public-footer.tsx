import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-white px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-6 text-sm font-light text-[#333333] sm:flex-row">
        <span className="font-semibold text-[#000000]">ATOM</span>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Link href="/product" className="transition-opacity hover:opacity-60">
            Product
          </Link>
          <Link href="/pricing" className="transition-opacity hover:opacity-60">
            Pricing
          </Link>
          <Link href="/changelog" className="transition-opacity hover:opacity-60">
            Changelog
          </Link>
          <Link href="/docs" className="transition-opacity hover:opacity-60">
            Docs
          </Link>
          <Link href="/about" className="transition-opacity hover:opacity-60">
            About
          </Link>
        </div>
        <span>© 2025 Atom</span>
      </div>
    </footer>
  );
}

