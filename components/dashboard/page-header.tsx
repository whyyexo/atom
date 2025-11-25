"use client";

import { MoreHorizontal, Search } from "lucide-react";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  breadcrumb?: string[];
  title: string;
  views?: string[];
  onViewChange?: (view: string) => void;
  activeView?: string;
  searchPlaceholder?: string;
};

export function PageHeader({
  breadcrumb,
  title,
  views = [],
  onViewChange,
  activeView,
  searchPlaceholder = "Search...",
}: PageHeaderProps) {
  return (
    <div className="border-b border-black/10 bg-white">
      <div className="px-8 pt-6 pb-4">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <div className="mb-4">
            <nav className="flex items-center gap-1 text-sm text-black/60">
              {breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center gap-1">
                  {index > 0 && <span className="text-black/40">/</span>}
                  <span>{item}</span>
                </span>
              ))}
            </nav>
          </div>
        )}

        {/* Title and Menu */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-black">{title}</h1>
            <button
              className="rounded-lg p-1.5 hover:bg-black/5 transition-colors"
              aria-label="More options"
            >
              <MoreHorizontal className="h-5 w-5 text-black/60" />
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="h-9 w-64 rounded-lg border border-black/10 bg-white pl-10 pr-4 text-sm text-black placeholder:text-black/40 focus:border-black/20 focus:outline-none focus:ring-1 focus:ring-black/10 transition-colors"
            />
          </div>
        </div>

        {/* Views */}
        {views.length > 0 && (
          <div className="flex items-center gap-6">
            {views.map((view) => {
              const isActive = view === activeView;
              return (
                <button
                  key={view}
                  onClick={() => onViewChange?.(view)}
                  className={cn(
                    "text-sm font-medium transition-colors pb-3 border-b-2",
                    isActive
                      ? "text-black border-black"
                      : "text-black/60 border-transparent hover:text-black hover:border-black/20"
                  )}
                >
                  {view}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

