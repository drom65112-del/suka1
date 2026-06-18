import Link from "next/link";

import { cn } from "@/lib/utils/cn";

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  basePath?: string;
};

export function Pagination({
  basePath = "/catalog",
  currentPage,
  pageCount,
}: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav aria-label="Пагінація">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {pages.map((page) => {
          const isCurrent = page === currentPage;

          return (
            <li key={page}>
              <Link
                href={`${basePath}?page=${page}`}
                aria-label={`Сторінка ${page}`}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "grid size-11 place-items-center rounded-xl border text-sm font-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-yellow-300",
                  isCurrent
                    ? "border-yellow-300 bg-yellow-300 text-slate-950"
                    : "border-white/15 bg-white/[0.04] text-slate-200 hover:border-white/35 hover:bg-white/8",
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
