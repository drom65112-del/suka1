import { mainNavigation } from "@/lib/navigation";

export function DesktopNavigation() {
  return (
    <nav className="ml-auto hidden lg:block" aria-label="Основна навігація">
      <ul className="flex items-center gap-1">
        {mainNavigation.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="block px-3 py-2 text-sm font-bold text-stone-300 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
