import { categoryNavigation } from "@/lib/navigation";

export function CategoryMenu() {
  return (
    <nav
      className="border-t border-white/8 bg-[#10120d]/90"
      aria-label="Категорії товарів"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex min-w-max items-center gap-1 py-2">
          {categoryNavigation.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={
                  index === 0
                    ? "block bg-sky-300 px-3 py-2 text-sm font-black text-[#080a07] transition-colors hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                    : "block px-3 py-2 text-sm font-bold text-stone-400 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
