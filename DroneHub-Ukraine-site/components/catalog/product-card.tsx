import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Price } from "@/components/ui/price";
import type { CatalogProduct } from "@/lib/catalog/products";
import { cn } from "@/lib/utils/cn";

type ProductCardProps = {
  product: CatalogProduct;
  onOrderClick: (product: CatalogProduct) => void;
};

const statusClasses = {
  available: "text-emerald-200",
  limited: "text-yellow-200",
  preorder: "text-sky-200",
} as const;

export function ProductCard({ product, onOrderClick }: ProductCardProps) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden border border-white/10 bg-[#151811] transition-colors duration-150 hover:border-yellow-300/45">
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-contain p-3 transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none"
        />
        <Badge variant="accent" className="absolute top-3 left-3 bg-[#080a07]/80">
          {product.badge}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-black uppercase text-sky-200">
            {product.category}
          </p>
          <p
            className={cn(
              "text-xs font-black uppercase",
              statusClasses[product.statusTone],
            )}
          >
            {product.status}
          </p>
        </div>

        <h3 className="mt-3 min-h-14 text-lg leading-7 font-black text-white">
          {product.name}
        </h3>

        <ul className="mt-3 grid gap-1 text-sm text-stone-300">
          {product.specs.map((spec) => (
            <li key={spec} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 bg-yellow-300" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>

        <Price
          amountMinor={product.priceMinor}
          compareAtMinor={product.compareAtMinor}
          className="mt-5"
        />

        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={() => onOrderClick(product)}
            className={buttonStyles({ className: "w-full" })}
          >
            Замовити товар
            <ArrowRightIcon className="size-4" />
          </button>
          <a
            href={product.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-xs font-semibold text-stone-500 underline-offset-4 hover:text-stone-200 hover:underline"
          >
            Джерело фото/ціни: {product.sourceName}
          </a>
        </div>
      </div>
    </article>
  );
}
