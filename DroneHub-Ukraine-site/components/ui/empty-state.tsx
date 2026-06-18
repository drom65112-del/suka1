import type { ReactNode } from "react";

import { PackageIcon } from "@/components/ui/icons";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({ action, description, title }: EmptyStateProps) {
  return (
    <section
      className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.025] px-5 py-12 text-center"
      aria-labelledby="empty-state-title"
    >
      <span className="grid size-14 place-items-center rounded-2xl bg-sky-400/12 text-sky-200">
        <PackageIcon className="size-7" />
      </span>
      <h2 id="empty-state-title" className="mt-5 text-xl font-black text-white">
        {title}
      </h2>
      <p className="mt-2 max-w-md leading-7 text-slate-400">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </section>
  );
}
