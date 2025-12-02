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
                <Link href="/legal/terms" className="transition-opacity hover:opacity-60">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="transition-opacity hover:opacity-60">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="transition-opacity hover:opacity-60">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/acceptable-use" className="transition-opacity hover:opacity-60">
                  Acceptable Use
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
                  Twitter (X)
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/8YZBWnF776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-60"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Apps Section */}
        <div className="mt-16 border-t border-[rgba(0,0,0,0.08)] pt-8">
          <div className="flex flex-col items-center gap-6 mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#000000]">
              Download the App
            </h3>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="https://apps.apple.com/app/atom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white px-5 py-3 text-sm font-normal text-[#000000] transition-all hover:bg-[rgba(0,0,0,0.04)] hover:shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.23 7.59 9.2 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span>Download on App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.atom.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white px-5 py-3 text-sm font-normal text-[#000000] transition-all hover:bg-[rgba(0,0,0,0.04)] hover:shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[rgba(0,0,0,0.08)] pt-8">
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
