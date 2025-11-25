import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-white px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-12">
          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#000000]">Product</h3>
            <div className="flex flex-col space-y-3 text-sm font-light text-[#333333]">
              <Link href="/product" className="transition-opacity hover:opacity-60">
                Product
              </Link>
              <Link href="/pricing" className="transition-opacity hover:opacity-60">
                Pricing
              </Link>
              <Link href="/features" className="transition-opacity hover:opacity-60">
                Features
              </Link>
              <Link href="/docs" className="transition-opacity hover:opacity-60">
                Docs
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#000000]">Company</h3>
            <div className="flex flex-col space-y-3 text-sm font-light text-[#333333]">
              <Link href="/about" className="transition-opacity hover:opacity-60">
                About
              </Link>
              <Link href="/changelog" className="transition-opacity hover:opacity-60">
                Changelog
              </Link>
              <Link href="/science" className="transition-opacity hover:opacity-60">
                Science
              </Link>
              <Link href="/impact" className="transition-opacity hover:opacity-60">
                Impact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#000000]">Legal</h3>
            <div className="flex flex-col space-y-3 text-sm font-light text-[#333333]">
              <Link href="/legal/terms" className="transition-opacity hover:opacity-60">
                Terms of Service
              </Link>
              <Link href="/legal/privacy" className="transition-opacity hover:opacity-60">
                Privacy Policy
              </Link>
              <Link href="/legal/cookies" className="transition-opacity hover:opacity-60">
                Cookie Policy
              </Link>
              <Link href="/legal/acceptable-use" className="transition-opacity hover:opacity-60">
                Acceptable Use
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#000000]">Social</h3>
            <div className="flex flex-col space-y-3 text-sm font-light text-[#333333]">
              <a
                href="https://discord.gg/8YZBWnF776"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(0,0,0,0.08)] pt-8 flex flex-col items-center justify-between gap-4 text-sm font-light text-[#333333] sm:flex-row">
          <span className="font-semibold text-[#000000]">ATOM</span>
          <span>© 2025 Atom. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

