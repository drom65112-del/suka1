import { formatPrice } from "@/lib/format/price";
import { cn } from "@/lib/utils/cn";

type PriceProps = {
  amountMinor: number;
  compareAtMinor?: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl sm:text-4xl",
} as const;

export function Price({
  amountMinor,
  compareAtMinor,
  currency = "UAH",
  size = "md",
  className,
}: PriceProps) {
  return (
    <div
      className={cn("flex flex-wrap items-baseline gap-x-3 gap-y-1", className)}
    >
      <data
        value={amountMinor / 100}
        className={cn(
          "font-mono font-black text-white",
          sizeClasses[size],
        )}
      >
        {formatPrice(amountMinor, currency)}
      </data>
      {compareAtMinor && compareAtMinor > amountMinor ? (
        <del className="font-mono text-sm font-semibold text-slate-500">
          {formatPrice(compareAtMinor, currency)}
        </del>
      ) : null}
    </div>
  );
}
