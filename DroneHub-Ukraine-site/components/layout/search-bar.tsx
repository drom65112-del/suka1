import { SearchIcon } from "@/components/ui/icons";

type SearchBarProps = {
  compact?: boolean;
};

export function SearchBar({ compact = false }: SearchBarProps) {
  return (
    <form action="/catalog" role="search" className="relative w-full">
      <label
        htmlFor={compact ? "mobile-search" : "desktop-search"}
        className="sr-only"
      >
        Пошук товарів
      </label>
      <input
        id={compact ? "mobile-search" : "desktop-search"}
        name="q"
        type="search"
        placeholder="Пошук дронів і комплектуючих"
        className="min-h-11 w-full border border-white/15 bg-[#151811] py-2.5 pr-12 pl-4 text-base text-white placeholder:text-stone-500 hover:border-white/25 focus:border-yellow-300 focus:ring-3 focus:ring-yellow-300/15 focus:outline-none"
      />
      <button
        type="submit"
        className="absolute top-1/2 right-1 grid size-9 -translate-y-1/2 place-items-center bg-yellow-300 text-[#080a07] transition-colors hover:bg-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
        aria-label="Знайти"
      >
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
}
