"use client";

import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";
import { InfoIcon } from "@/components/ui/icons";

type ErrorStateProps = {
  title: string;
  description: string;
  onRetry?: () => void;
};

export function ErrorState({ description, onRetry, title }: ErrorStateProps) {
  return (
    <section
      className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6"
      aria-labelledby="error-title"
    >
      <span className="grid size-14 place-items-center rounded-2xl border border-red-300/25 bg-red-300/10 text-red-200">
        <InfoIcon className="size-7" />
      </span>
      <h1
        id="error-title"
        className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl"
      >
        {title}
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-slate-400 sm:text-lg">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className={buttonStyles({ variant: "primary" })}
          >
            Спробувати ще раз
          </button>
        ) : null}
        <Link href="/" className={buttonStyles({ variant: "outline" })}>
          На головну
        </Link>
      </div>
    </section>
  );
}
