import { cn } from "@/lib/utils/cn";

type BrandLogoProps = {
  showText?: boolean;
  className?: string;
  markClassName?: string;
};

export function BrandLogo({
  className,
  markClassName,
  showText = true,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid size-12 shrink-0 place-items-center overflow-hidden border border-white/15 bg-[#10120d] shadow-lg shadow-black/30",
          markClassName,
        )}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 64 64"
          className="size-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="64" height="64" fill="#10120D" />
          <path d="M0 0h64v31H0z" fill="#38BDF8" opacity=".18" />
          <path d="M0 31h64v33H0z" fill="#FDE047" opacity=".2" />
          <path
            d="M32 11v42M11 32h42"
            stroke="#F8FAFC"
            strokeOpacity=".18"
            strokeWidth="1.4"
          />
          <circle cx="16" cy="16" r="8" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="48" cy="16" r="8" stroke="#FDE047" strokeWidth="3" />
          <circle cx="16" cy="48" r="8" stroke="#FDE047" strokeWidth="3" />
          <circle cx="48" cy="48" r="8" stroke="#38BDF8" strokeWidth="3" />
          <path
            d="M22 22l7 7M42 22l-7 7M22 42l7-7M42 42l-7-7"
            stroke="#F8FAFC"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M32 22l12 10-12 10-12-10 12-10Z" fill="#F8FAFC" />
          <path d="M32 26l7 6-7 6-7-6 7-6Z" fill="#080A07" />
          <circle cx="32" cy="32" r="3" fill="#FDE047" />
        </svg>
      </span>
      {showText ? (
        <span className="hidden leading-none min-[390px]:block">
          <span className="block text-lg font-black text-white">DroneHub</span>
          <span className="mt-1 block text-[10px] font-black uppercase text-sky-200">
            Ukraine
          </span>
        </span>
      ) : null}
    </span>
  );
}
