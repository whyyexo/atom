"use client";

interface AppStoreBadgeProps {
  href?: string;
  className?: string;
}

export function AppStoreBadge({ href = "https://apps.apple.com/app/atom", className = "" }: AppStoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 transition-transform hover:scale-105 ${className}`}
    >
      {/* Apple Logo SVG */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.23 7.59 9.2 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-[8px] leading-tight text-white">Download on the</span>
        <span className="text-sm font-semibold leading-tight text-white">App Store</span>
      </div>
    </a>
  );
}

