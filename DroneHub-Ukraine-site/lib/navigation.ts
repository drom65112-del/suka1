export const mainNavigation = [
  { label: "Каталог", href: "/#products" },
  { label: "FPV", href: "/?category=FPV-дрони#products" },
  { label: "DJI Mavic", href: "/?category=DJI%20Mavic#products" },
  { label: "Telegram", href: "/#telegram" },
] as const;

export const categoryNavigation = [
  { label: "FPV-дрони", href: "/?category=FPV-дрони#products" },
  { label: "DJI Mavic", href: "/?category=DJI%20Mavic#products" },
  { label: "Акумулятори", href: "/?q=акумулятор#products" },
  { label: "Пропелери", href: "/?q=пропелери#products" },
  { label: "Зарядні хаби", href: "/?q=заряд#products" },
  { label: "ND-фільтри", href: "/?q=ND#products" },
] as const;

export const footerNavigation = [
  {
    title: "Каталог",
    links: categoryNavigation.slice(0, 4),
  },
  {
    title: "Покупцям",
    links: [
      { label: "Як замовити", href: "/#telegram" },
      { label: "Наявність", href: "/#products" },
      { label: "Оплата", href: "/#telegram" },
      { label: "Доставка", href: "/#telegram" },
    ],
  },
  {
    title: "DroneHub",
    links: [
      { label: "Головна", href: "/" },
      { label: "Telegram", href: "/#telegram" },
      { label: "Джерела фото", href: "/#products" },
    ],
  },
] as const;
