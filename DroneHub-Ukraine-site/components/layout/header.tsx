"use client";

import Link from "next/link";
import { useRef } from "react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { CategoryMenu } from "@/components/layout/category-menu";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { buttonStyles } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { telegramChannelUrl } from "@/lib/catalog/products";
import { categoryNavigation, mainNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const mobileMenuRef = useRef<HTMLDialogElement>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080a07]/95 backdrop-blur-xl">
      <div className="border-b border-white/8 bg-yellow-300/10">
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-xs font-bold text-yellow-100 sm:px-6">
          Продаж FPV, DJI Mavic та комплектуючих. Замовлення через Telegram.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-18 items-center gap-3 py-3">
          <button
            type="button"
            onClick={() => mobileMenuRef.current?.showModal()}
            className="grid size-11 shrink-0 place-items-center border border-white/15 text-white transition-colors hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-yellow-300 lg:hidden"
            aria-label="Відкрити меню"
          >
            <MenuIcon className="size-6" />
          </button>
          <Link
            href="/"
            className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
            aria-label={`${siteConfig.name}, головна сторінка`}
          >
            <BrandLogo markClassName="size-11" />
          </Link>
          <DesktopNavigation />
          <a
            href={telegramChannelUrl}
            className={buttonStyles({
              variant: "primary",
              className: "ml-auto hidden sm:inline-flex",
            })}
          >
            Telegram
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <CategoryMenu />
      </div>

      <dialog
        ref={mobileMenuRef}
        className="m-0 ml-auto h-full max-h-none w-[min(90vw,24rem)] max-w-none border-l border-white/15 bg-[#080a07] p-0 text-white shadow-2xl shadow-black/70 backdrop:bg-black/75"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <h2 id="mobile-menu-title">
              <BrandLogo markClassName="size-10" />
            </h2>
            <form method="dialog">
              <button
                type="submit"
                className="grid size-11 place-items-center text-stone-300 hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                aria-label="Закрити меню"
              >
                <CloseIcon className="size-6" />
              </button>
            </form>
          </div>
          <nav className="p-4" aria-label="Мобільна навігація">
            <p className="px-3 text-xs font-black uppercase text-stone-500">
              Навігація
            </p>
            <ul className="mt-2 space-y-1">
              {mainNavigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => mobileMenuRef.current?.close()}
                    className="block px-3 py-3 font-bold text-stone-200 hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-7 px-3 text-xs font-black uppercase text-stone-500">
              Категорії
            </p>
            <ul className="mt-2 space-y-1">
              {categoryNavigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => mobileMenuRef.current?.close()}
                    className="block px-3 py-3 font-bold text-stone-300 hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={telegramChannelUrl}
              onClick={() => mobileMenuRef.current?.close()}
              className={buttonStyles({ className: "mt-6 w-full" })}
            >
              Telegram-замовлення
            </a>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
