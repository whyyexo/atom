import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
  return (
    <div
      className={cn(
        "flex flex-col justify-between p-6 space-y-4",
        highlight ? "bg-white rounded-xl w-full md:w-1/2 space-y-8 border border-[rgba(0,0,0,0.08)]" : "flex-1"
      )}
    >
      <div className={highlight ? "grid gap-6 sm:grid-cols-2" : ""}>
        <div className="space-y-4">
          <div>
            <h2 className="font-medium text-[#000000]">{title}</h2>
            <span className="my-3 block text-2xl font-semibold text-[#000000]">{price}</span>
            <p className="text-[#333333] text-sm font-light">{description}</p>
          </div>
          <Button 
            asChild 
            className={cn(
              "w-full rounded-full",
              buttonVariant === "default" 
                ? "bg-[#0071e3] text-white hover:bg-[#0077ed] border-0"
                : "border border-[rgba(0,0,0,0.08)] bg-transparent text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
            )}
            variant={buttonVariant}
          >
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </div>

      {highlight && (
        <div>
          <div className="text-sm font-medium text-[#000000]">Everything in Free, plus:</div>
        </div>
      )}

      <ul className={cn(highlight ? "mt-4" : "border-t border-[rgba(0,0,0,0.08)] pt-4", "list-outside space-y-3 text-sm")}>
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-[#333333]">
            <Check className="size-3 text-[#000000]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
