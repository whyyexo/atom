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
      className={`inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 transition-transform hover:scale-105 ${className}`}
    >
      {/* Google Play Logo - Colorful triangle */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z" fill="#00D9FF"/>
        <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="#00F076"/>
        <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z" fill="#FFD23F"/>
        <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#FF3A44"/>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-[8px] leading-tight text-white">Get it on</span>
        <span className="text-sm font-semibold leading-tight text-white">Google Play</span>
      </div>
    </a>
  );
}

