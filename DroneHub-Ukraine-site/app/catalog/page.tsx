import type { Metadata } from "next";

import { CatalogSection } from "@/components/catalog/catalog-section";
import { catalogProducts } from "@/lib/catalog/products";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Каталог FPV-дронів, DJI Mavic і комплектуючих DroneHub Ukraine.",
};

type CatalogPageProps = {
  searchParams: Promise<{ category?: string; q?: string }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const { category, q } = await searchParams;

  return (
    <CatalogSection
      products={catalogProducts}
      initialCategory={category}
      initialQuery={q}
    />
  );
}
