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
      className={`inline-block transition-transform hover:scale-105 ${className}`}
    >
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="8" fill="#000000"/>
        {/* Apple Logo - White */}
        <g transform="translate(10, 8)">
          <path 
            d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.23 7.59 9.2 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" 
            fill="#FFFFFF" 
            transform="scale(0.45)"
          />
        </g>
        <text x="50" y="18" fill="#FFFFFF" fontSize="8" fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" fontWeight="400" letterSpacing="0.3">Download on the</text>
        <text x="50" y="28" fill="#FFFFFF" fontSize="13" fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" fontWeight="600" letterSpacing="0.2">App Store</text>
      </svg>
    </a>
  );
}

