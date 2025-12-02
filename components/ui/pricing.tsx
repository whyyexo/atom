import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/theme-provider";

interface Category {
  title: string;
  features: string[];
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features?: string[];
  categories?: Category[];
  highlight?: boolean;
  highlightLabel?: string;
  buttonVariant?: "default" | "outline";
}

export function PricingCard({
  title,
  price,
  description,
  features,
  categories,
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
            {highlight && (
              <p className={cn("text-xs font-medium mt-2", isDark ? "text-white/70" : "text-[#666666]")}>
                Includes everything in Free, plus:
              </p>
            )}
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

      {categories ? (
        <div className={cn("space-y-3 max-h-[500px] overflow-y-auto pr-2", highlight ? "mt-4" : "border-t pt-4", isDark ? "border-white/10" : "border-[rgba(0,0,0,0.08)]")}>
          {categories.map((category, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg p-3 border",
                isDark 
                  ? "bg-black/50 border-white/10 hover:border-white/20" 
                  : "bg-[rgba(0,0,0,0.02)] border-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,0,0.12)]"
              )}
            >
              <h4 className={cn("text-xs font-semibold mb-2", isDark ? "text-white" : "text-[#000000]")}>
                {category.title}
              </h4>
              <ul className="space-y-1.5">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={cn("flex items-start gap-2 text-xs", isDark ? "text-white/80" : "text-[#333333]")}>
                    <Check className={cn("size-3 flex-shrink-0 mt-0.5", isDark ? "text-white" : "text-[#000000]")} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : features ? (
        <ul className={cn("border-t pt-4 list-outside space-y-3 text-sm", isDark ? "border-white/10" : "border-[rgba(0,0,0,0.08)]")}>
          {features.map((item, index) => (
            <li key={index} className={cn("flex items-center gap-2", isDark ? "text-white/80" : "text-[#333333]")}>
              <Check className={cn("size-3", isDark ? "text-white" : "text-[#000000]")} />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
