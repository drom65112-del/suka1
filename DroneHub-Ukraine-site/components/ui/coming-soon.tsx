import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";

type ComingSoonProps = {
  eyebrow: string;
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
  action?: ReactNode;
};

export function ComingSoon({
  action,
  description,
  emptyDescription,
  emptyTitle,
  eyebrow,
  title,
}: ComingSoonProps) {
  return (
    <div className="mx-auto min-h-[65vh] max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[{ label: "Головна", href: "/" }, { label: title }]}
      />
      <header className="mt-10 max-w-3xl">
        <p className="font-mono text-xs font-black tracking-[0.2em] text-sky-300 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 leading-7 text-slate-400">{description}</p>
      </header>
      <div className="mt-10">
        <EmptyState
          title={emptyTitle}
          description={emptyDescription}
          action={action}
        />
      </div>
    </div>
  );
}
