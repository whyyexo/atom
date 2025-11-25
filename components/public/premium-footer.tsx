import Link from "next/link";

export function PremiumFooter() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-white px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#000000]">
              Product
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#333333]">
              <li>
                <Link href="/features" className="transition-opacity hover:opacity-60">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-opacity hover:opacity-60">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="transition-opacity hover:opacity-60">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="transition-opacity hover:opacity-60">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-opacity hover:opacity-60">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#000000]">
              Company
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#333333]">
              <li>
                <Link href="/about" className="transition-opacity hover:opacity-60">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="transition-opacity hover:opacity-60">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="transition-opacity hover:opacity-60">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#000000]">
              Legal
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#333333]">
              <li>
                <Link href="/privacy" className="transition-opacity hover:opacity-60">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-opacity hover:opacity-60">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#000000]">
              Social
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#333333]">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-60"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-60"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-[rgba(0,0,0,0.08)] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm font-light text-[#333333] sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-[#000000]">© 2025 Atom</p>
              <p className="mt-1 text-xs">Your personal productivity system.</p>
            </div>
            <p className="text-xs">Built with care for clarity and focus.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
