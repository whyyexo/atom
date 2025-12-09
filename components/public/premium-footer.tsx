import Link from "next/link";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";

export function PremiumFooter() {
  return (
    <footer className="bg-[#0C0C0D] text-white px-6 py-16 lg:px-12">
      {/* Top separator line (centered, fading edges) */}
      <div className="flex justify-center pb-10">
        <div className="h-px w-80 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Product
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#C9C9C9]">
              <li>
                <Link href="/features" className="transition-opacity hover:opacity-100">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-opacity hover:opacity-100">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="transition-opacity hover:opacity-100">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="transition-opacity hover:opacity-100">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-opacity hover:opacity-100">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#C9C9C9]">
              <li>
                <Link href="/about" className="transition-opacity hover:opacity-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="transition-opacity hover:opacity-100">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="transition-opacity hover:opacity-100">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#C9C9C9]">
              <li>
                <Link href="/legal/terms" className="transition-opacity hover:opacity-100">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="transition-opacity hover:opacity-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="transition-opacity hover:opacity-100">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/acceptable-use" className="transition-opacity hover:opacity-100">
                  Acceptable Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Social
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#C9C9C9]">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-100"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-100"
                >
                  Twitter (X)
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/8YZBWnF776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-100"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Apps Section */}
        <div className="mt-16 border-t border-[#2A2A2E] pt-8">
          <div className="flex flex-col items-center gap-6 mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Download the App
            </h3>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#2A2A2E] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm font-light text-[#C9C9C9] sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-white">© 2025 Atom</p>
              <p className="mt-1 text-xs">Your personal productivity system.</p>
            </div>
            <p className="text-xs">Built with care for clarity and focus.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
