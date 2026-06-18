import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { footerNavigation } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a07]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.1fr_2fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
          >
            <BrandLogo markClassName="size-12" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-400">
            FPV-дрони, DJI Mavic і комплектуючі з простим замовленням через
            Telegram.
          </p>
        </div>
        <div className="grid gap-8 min-[420px]:grid-cols-2 lg:grid-cols-3">
          {footerNavigation.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-black text-white">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-yellow-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} DroneHub Ukraine</p>
          <p>Ціни не є публічною офертою. Наявність підтверджується в Telegram.</p>
        </div>
      </div>
    </footer>
  );
}
