"use client";

import { useEffect, useMemo, useState } from "react";

import { ProductCard } from "@/components/catalog/product-card";
import { buttonStyles } from "@/components/ui/button";
import { CloseIcon } from "@/components/ui/icons";
import {
  type CatalogProduct,
  productCategoryFilters,
  telegramChannelUrl,
} from "@/lib/catalog/products";
import { formatPrice } from "@/lib/format/price";
import { cn } from "@/lib/utils/cn";

type CatalogSectionProps = {
  products: readonly CatalogProduct[];
  initialCategory?: string;
  initialQuery?: string;
};

const allProductsFilter = "Усі товари";

function isCategory(
  value: string,
): value is (typeof productCategoryFilters)[number] {
  return productCategoryFilters.some((category) => category === value);
}

function buildOrderText(product: CatalogProduct) {
  return `Вітаю! Хочу замовити ${product.name}. Ціна на сайті: ${formatPrice(
    product.priceMinor,
  )}. Підкажіть, будь ласка, чи є в наявності та як оформити доставку.`;
}

function buildTelegramLink(product: CatalogProduct) {
  if (!telegramChannelUrl.startsWith("https://t.me/")) {
    return "";
  }

  return `${telegramChannelUrl}?text=${encodeURIComponent(buildOrderText(product))}`;
}

function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  return Promise.resolve();
}

export function CatalogSection({
  initialCategory,
  initialQuery,
  products,
}: CatalogSectionProps) {
  const startingCategory =
    initialCategory && isCategory(initialCategory)
      ? initialCategory
      : allProductsFilter;
  const [activeCategory, setActiveCategory] =
    useState<(typeof productCategoryFilters)[number]>(startingCategory);
  const [query, setQuery] = useState(initialQuery ?? "");
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(
    null,
  );
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("uk-UA");

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === allProductsFilter ||
        product.category === activeCategory;
      const searchableText = [
        product.name,
        product.category,
        product.badge,
        product.status,
        ...product.specs,
      ]
        .join(" ")
        .toLocaleLowerCase("uk-UA");

      return (
        matchesCategory &&
        (normalizedQuery.length === 0 ||
          searchableText.includes(normalizedQuery))
      );
    });
  }, [activeCategory, products, query]);

  const hasActiveFilters =
    activeCategory !== allProductsFilter || query.trim().length > 0;

  const resetFilters = () => {
    setActiveCategory(allProductsFilter);
    setQuery("");
  };

  const handleSelectProduct = (product: CatalogProduct) => {
    setCopyStatus("idle");
    setSelectedProduct(product);
  };

  const handleCopyOrder = async () => {
    if (!selectedProduct) {
      return;
    }

    try {
      await copyText(buildOrderText(selectedProduct));
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };

  const handleTelegramAction = () => {
    if (!selectedProduct) {
      return;
    }

    const telegramLink = buildTelegramLink(selectedProduct);

    if (telegramLink) {
      window.open(telegramLink, "_blank", "noopener,noreferrer");
      return;
    }

    setSelectedProduct(null);
    window.setTimeout(() => {
      document
        .getElementById("telegram")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <section id="products" className="bg-[#0b0d09] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-sky-200">Каталог</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Товари з цінами
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-stone-400">
              Фото та ціни взяті з українських джерел. Перед продажем ціну й
              наявність краще підтвердити у Telegram.
            </p>
          </div>
          <label className="relative block w-full max-w-md">
            <span className="sr-only">Пошук товарів</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Пошук: Mavic, FPV, акумулятор"
              className="min-h-12 w-full border border-white/15 bg-[#151811] px-4 text-base text-white placeholder:text-stone-500 hover:border-white/25 focus:border-yellow-300 focus:ring-3 focus:ring-yellow-300/15 focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-7 flex flex-wrap gap-2" aria-label="Фільтр категорій">
          {productCategoryFilters.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "min-h-11 border px-4 text-sm font-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300",
                  isActive
                    ? "border-yellow-300 bg-yellow-300 text-[#080a07]"
                    : "border-white/15 bg-transparent text-stone-300 hover:border-white/30 hover:bg-white/8 hover:text-white",
                )}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={resetFilters}
              className="min-h-11 border border-white/15 px-4 text-sm font-black text-stone-300 transition-colors hover:border-white/30 hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
            >
              Очистити
            </button>
          ) : null}
        </div>

        <div className="mt-5 text-sm font-semibold text-stone-400">
          Знайдено: {visibleProducts.length}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrderClick={handleSelectProduct}
            />
          ))}
        </div>

        {visibleProducts.length === 0 ? (
          <div className="mt-8 border border-white/10 bg-[#151811] p-6 text-stone-300">
            Нічого не знайдено. Спробуйте інший запит або відкрийте всі товари.
          </div>
        ) : null}
      </div>

      {selectedProduct ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-dialog-title"
        >
          <div className="w-full max-w-xl border border-white/15 bg-[#10120d] p-5 text-white shadow-2xl shadow-black/60 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-yellow-200">
                  Оформлення замовлення
                </p>
                <h3
                  id="order-dialog-title"
                  className="mt-2 text-2xl font-black"
                >
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="grid size-10 shrink-0 place-items-center border border-white/15 text-stone-300 hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                aria-label="Закрити вікно замовлення"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>

            <div className="mt-5 grid gap-3 border border-white/10 bg-black/20 p-4 text-sm text-stone-200">
              <div className="flex items-center justify-between gap-3">
                <span className="text-stone-400">Ціна</span>
                <span className="font-mono text-lg font-black text-white">
                  {formatPrice(selectedProduct.priceMinor)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-stone-400">Статус</span>
                <span className="font-bold text-sky-200">
                  {selectedProduct.status}
                </span>
              </div>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-stone-300">
                Готовий текст для Telegram
              </span>
              <textarea
                readOnly
                value={buildOrderText(selectedProduct)}
                className="mt-2 min-h-28 w-full resize-none border border-white/15 bg-[#151811] p-3 text-sm leading-6 text-stone-100 focus:border-yellow-300 focus:ring-3 focus:ring-yellow-300/15 focus:outline-none"
              />
            </label>

            {copyStatus === "copied" ? (
              <p className="mt-3 text-sm font-bold text-emerald-200">
                Текст скопійовано. Можна вставити його в Telegram.
              </p>
            ) : null}
            {copyStatus === "failed" ? (
              <p className="mt-3 text-sm font-bold text-red-200">
                Не вдалося скопіювати автоматично. Виділіть текст вручну.
              </p>
            ) : null}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleCopyOrder}
                className={buttonStyles({ variant: "outline" })}
              >
                Скопіювати текст
              </button>
              <button
                type="button"
                onClick={handleTelegramAction}
                className={buttonStyles()}
              >
                {telegramChannelUrl.startsWith("https://t.me/")
                  ? "Відкрити Telegram"
                  : "До Telegram-блоку"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
