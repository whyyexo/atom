"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ArrowButton({ href, children, className }: ArrowButtonProps) {
  return (
    <>
      <style jsx global>{`
        .arrow-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          transition: color 0.2s ease;
        }
        .arrow-button:hover {
          color: rgba(255, 255, 255, 0.8);
        }
        .arrow-button svg {
          transition: all 0.3s ease;
          transform: translateX(-5px);
        }
        .arrow-button:hover svg {
          transform: translateX(0);
        }
      `}</style>
      <Link
        href={href}
        className={cn("arrow-button", className)}
      >
        <span>{children}</span>
        <svg
          width="15px"
          height="10px"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1,5 L11,5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="8 1 12 5 8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </Link>
    </>
  );
}
