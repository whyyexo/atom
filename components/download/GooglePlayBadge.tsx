"use client";

interface GooglePlayBadgeProps {
  href?: string;
  className?: string;
}

export function GooglePlayBadge({ href = "https://play.google.com/store/apps/details?id=com.atom.app", className = "" }: GooglePlayBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-transform hover:scale-105 ${className}`}
    >
      <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="40" rx="8" fill="#000000"/>
        {/* Google Play Logo - Colorful triangle with official colors */}
        <g transform="translate(8, 6) scale(0.55)">
          {/* Top triangle - Green */}
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z" fill="#00D9FF"/>
          {/* Right triangle - Yellow */}
          <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="#00F076"/>
          {/* Bottom triangle - Red */}
          <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z" fill="#FFD23F"/>
          {/* Left triangle - Blue */}
          <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#FF3A44"/>
        </g>
        <text x="60" y="18" fill="#FFFFFF" fontSize="8" fontFamily="Roboto, sans-serif" fontWeight="400" letterSpacing="0.3">Get it on</text>
        <text x="60" y="28" fill="#FFFFFF" fontSize="13" fontFamily="Roboto, sans-serif" fontWeight="500" letterSpacing="0.2">Google Play</text>
      </svg>
    </a>
  );
}

