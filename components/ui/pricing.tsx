import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/theme-provider";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  highlightLabel?: string;
  buttonVariant?: "default" | "outline";
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlight = false,
  buttonVariant = "outline",
}: PricingCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col justify-between p-6 space-y-4",
        highlight 
          ? cn(
              "rounded-xl w-full md:w-1/2 space-y-8 border",
              isDark ? "bg-black border-white/10" : "bg-white border-[rgba(0,0,0,0.08)]"
            )
          : "flex-1"
      )}
    >
      <div className={highlight ? "grid gap-6 sm:grid-cols-2" : ""}>
        <div className="space-y-4">
          <div>
            <h2 className={cn("font-medium", isDark ? "text-white" : "text-[#000000]")}>{title}</h2>
            <span className={cn("my-3 block text-2xl font-semibold", isDark ? "text-white" : "text-[#000000]")}>{price}</span>
            <p className={cn("text-sm font-light", isDark ? "text-white/80" : "text-[#333333]")}>{description}</p>
          </div>
          <Button 
            asChild 
            className={cn(
              "w-full rounded-full",
              buttonVariant === "default" 
                ? "bg-[#0071e3] text-white hover:bg-[#0077ed] border-0"
                : cn(
                    "border bg-transparent",
                    isDark 
                      ? "border-white/10 text-white hover:bg-white/10"
                      : "border-[rgba(0,0,0,0.08)] text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
                  )
            )}
            variant={buttonVariant}
          >
            <Link href="/download">Get Started</Link>
          </Button>
        </div>
      </div>

      {highlight && (
        <div>
          <div className={cn("text-sm font-medium", isDark ? "text-white" : "text-[#000000]")}>Everything in Free, plus:</div>
        </div>
      )}

      <ul className={cn(highlight ? "mt-4" : "border-t pt-4", "list-outside space-y-3 text-sm", isDark ? "border-white/10" : "border-[rgba(0,0,0,0.08)]")}>
        {features.map((item, index) => (
          <li key={index} className={cn("flex items-center gap-2", isDark ? "text-white/80" : "text-[#333333]")}>
            <Check className={cn("size-3", isDark ? "text-white" : "text-[#000000]")} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
