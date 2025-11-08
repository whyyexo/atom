"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SelectProps = {
  options: string[];
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
};

export function Select({
  options,
  placeholder = "Select an option",
  className,
  onChange,
  value: controlledValue,
}: SelectProps) {
  const [internalValue, setInternalValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const value = controlledValue ?? internalValue;

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (option: string) => {
    if (!controlledValue) {
      setInternalValue(option);
    }
    onChange?.(option);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-2xl border-border/70 bg-muted/30 text-sm font-medium text-foreground"
      >
        <span className={cn("truncate text-left", !value && "text-muted-foreground")}>
          {value || placeholder}
        </span>
        <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")} />
      </Button>
      <div
        className={cn(
          "absolute left-0 top-full z-30 mt-2 w-full origin-top rounded-2xl border border-border/70 bg-card/95 p-2 shadow-xl shadow-primary/5",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="max-h-48 space-y-1 overflow-y-auto text-sm">
          {options.map((option) => (
            <li
              key={option}
              className={cn(
                "flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-foreground transition hover:bg-muted/70",
                value === option && "bg-muted/60",
              )}
              onClick={() => handleSelect(option)}
            >
              <span>{option}</span>
              {value === option ? (
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">selected</span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


