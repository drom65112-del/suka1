import Image from "next/image";
import Link from "next/link";

import { CatalogSection } from "@/components/catalog/catalog-section";
import { buttonStyles } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { catalogProducts, telegramChannelUrl } from "@/lib/catalog/products";
import { siteConfig } from "@/lib/site-config";

const heroProduct = catalogProducts[1];

const highlights = [
  "Реальні фото товарів",
  "Ціни в гривні",
  "Робоче замовлення",
] as const;

type HomePageProps = {
  searchParams: Promise<{ category?: string; q?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const { category, q } = await searchParams;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#080a07]">
        <Image
          src={heroProduct.imageSrc}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-28 saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#080a07_0%,rgba(8,10,7,0.92)_38%,rgba(8,10,7,0.72)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase text-yellow-200">
              {siteConfig.name}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-none font-black text-white sm:text-6xl lg:text-7xl">
              FPV-дрони, DJI Mavic і комплектуючі
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-200 sm:text-lg">
              Український каталог із реальними фотографіями, зрозумілими
              цінами та робочим оформленням замовлення. Покупець обирає товар,
              відкриває форму, копіює готовий текст і переходить до Telegram.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#products"
                className={buttonStyles({ variant: "primary", size: "lg" })}
              >
                Дивитися каталог
                <ArrowRightIcon className="size-5" />
              </Link>
              <Link
                href={telegramChannelUrl}
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                Telegram-замовлення
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border border-white/10 bg-black/25 px-4 py-3 text-sm font-bold text-stone-100 backdrop-blur"
              >
                <span className="grid size-6 shrink-0 place-items-center bg-yellow-300 text-[#080a07]">
                  <CheckIcon className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CatalogSection
        products={catalogProducts}
        initialCategory={category}
        initialQuery={q}
      />

      <section id="telegram" className="border-t border-white/10 bg-[#10120d]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase text-yellow-200">
              Як купити
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Один канал для всіх замовлень
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-stone-300">
              Кнопка товару відкриває форму з готовим повідомленням. Коли ви
              дасте посилання на свій Telegram-канал або чат, я заміню одну
              константу, і кнопка в формі буде відкривати Telegram одразу з
              текстом замовлення.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-stone-200">
            {[
              "Покупець обирає товар у каталозі.",
              "Натискає кнопку замовлення та копіює готовий текст.",
              "Переходить у Telegram і відправляє вам повідомлення.",
            ].map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[2.5rem_1fr] items-center gap-3 border border-white/10 bg-black/20 p-4"
              >
                <span className="grid size-10 place-items-center bg-sky-300 font-mono font-black text-[#080a07]">
                  {index + 1}
                </span>
                <span className="font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
