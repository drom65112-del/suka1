import { cn } from "@/lib/utils/cn";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <span
      className={cn(
        "block animate-pulse rounded-xl bg-white/8 motion-reduce:animate-none",
        className,
      )}
      aria-hidden="true"
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-slate-900 p-3"
      aria-label="Завантаження картки товару"
      aria-busy="true"
    >
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="space-y-3 p-2 pt-5">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-11 w-full" />
      </div>
    </div>
  );
}
