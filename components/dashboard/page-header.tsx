"use client";

import { MoreHorizontal, Search, Pencil, Plus } from "lucide-react";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  icon?: ReactNode;
};

type PageHeaderProps = {
  breadcrumb?: BreadcrumbItem[];
  title: string;
  titleIcon?: ReactNode;
  views?: string[];
  onViewChange?: (view: string) => void;
  activeView?: string;
  searchPlaceholder?: string;
  onEdit?: () => void;
  onCreate?: () => void;
};

export function PageHeader({
  breadcrumb,
  title,
  titleIcon,
  views = [],
  onViewChange,
  activeView,
  searchPlaceholder = "Search...",
  onEdit,
  onCreate,
}: PageHeaderProps) {
  return (
    <div className="border-b border-black/10 bg-white">
      <div className="px-8 pt-6 pb-4">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <div className="mb-4">
            <nav className="flex items-center gap-1 text-sm text-black/60">
              {breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center gap-1.5">
                  {index > 0 && <span className="text-black/40">/</span>}
                  {item.icon && (
                    <span className="flex items-center [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-black/60">
                      {item.icon}
                    </span>
                  )}
                  <span>{item.label}</span>
                </span>
              ))}
            </nav>
          </div>
        )}

        {/* Title and Menu */}
        <div className="flex items-center gap-3 mb-4">
          {titleIcon && (
            <span className="flex items-center [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-black">
              {titleIcon}
            </span>
          )}
          <h1 className="text-2xl font-semibold text-black">{title}</h1>
          <button
            className="rounded-lg p-1.5 hover:bg-black/5 transition-colors"
            aria-label="More options"
          >
            <MoreHorizontal className="h-5 w-5 text-black/60" />
          </button>
        </div>

        {/* Views with Search and Action Buttons */}
        {views.length > 0 && (
          <div className="flex items-center justify-between">
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
                        ? "text-black border-[#0071e3]"
                        : "text-black/60 border-transparent hover:text-black hover:border-black/20"
                    )}
                  >
                    {view}
                  </button>
                );
              })}
              {onEdit && (
                <button
                  onClick={onEdit}
                  className="rounded-lg p-1.5 text-black/60 hover:bg-black/5 hover:text-black transition-colors ml-2"
                  aria-label="Edit views"
                >
                  <Pencil className="h-4 w-4" />
                </button>
              )}
              {onCreate && (
                <button
                  onClick={onCreate}
                  className="rounded-lg p-1.5 text-black/60 hover:bg-black/5 hover:text-black transition-colors -ml-1"
                  aria-label="Create new view"
                >
                  <Plus className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Search - smaller and discrete */}
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-black/40" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="h-7 w-48 rounded-md border border-black/10 bg-white pl-8 pr-3 text-xs text-black placeholder:text-black/40 focus:border-black/20 focus:outline-none focus:ring-1 focus:ring-black/10 transition-colors"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
