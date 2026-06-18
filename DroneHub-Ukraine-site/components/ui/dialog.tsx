"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/components/ui/icons";

type DialogProps = {
  title: string;
  description: string;
  triggerLabel: string;
  children?: ReactNode;
};

export function Dialog({
  children,
  description,
  title,
  triggerLabel,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button variant="outline" onClick={() => dialogRef.current?.showModal()}>
        {triggerLabel}
      </Button>
      <dialog
        ref={dialogRef}
        className="m-auto w-[calc(100%-1.5rem)] max-w-lg rounded-2xl border border-white/15 bg-slate-900 p-0 text-white shadow-2xl shadow-black/60 backdrop:bg-slate-950/75 backdrop:backdrop-blur-sm"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <div className="flex items-start justify-between gap-5 border-b border-white/10 p-5 sm:p-6">
          <div>
            <h2 id="dialog-title" className="text-xl font-black">
              {title}
            </h2>
            <p
              id="dialog-description"
              className="mt-2 text-sm leading-6 text-slate-400"
            >
              {description}
            </p>
          </div>
          <form method="dialog">
            <button
              type="submit"
              className="grid size-10 place-items-center rounded-xl text-slate-400 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
              aria-label="Закрити діалог"
            >
              <CloseIcon className="size-5" />
            </button>
          </form>
        </div>
        {children ? <div className="p-5 sm:p-6">{children}</div> : null}
        <form
          method="dialog"
          className="flex justify-end gap-3 border-t border-white/10 p-5 sm:p-6"
        >
          <Button type="submit" variant="ghost">
            Скасувати
          </Button>
          <Button type="submit">Підтвердити</Button>
        </form>
      </dialog>
    </>
  );
}
