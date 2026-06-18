export const telegramChannelUrl = "#telegram";

export const productCategoryFilters = [
  "Усі товари",
  "FPV-дрони",
  "DJI Mavic",
  "Комплектуючі",
] as const;

export type ProductCategory = Exclude<
  (typeof productCategoryFilters)[number],
  "Усі товари"
>;

export type ProductStatusTone = "available" | "limited" | "preorder";

export type CatalogProduct = {
  id: string;
  name: string;
  category: ProductCategory;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  priceMinor: number;
  compareAtMinor?: number;
  status: string;
  statusTone: ProductStatusTone;
  sourceName: string;
  sourceUrl: string;
  specs: readonly string[];
};

export const catalogProducts = [
  {
    id: "stus-7",
    name: 'FPV-дрон "Стус-7"',
    category: "FPV-дрони",
    badge: "Українська розробка",
    imageSrc:
      "https://media.dyvys.info/2024/03/434158702_10161501086628151_8564708440865804358_n-e1711448124568.jpg",
    imageAlt: 'FPV-дрон "Стус-7"',
    priceMinor: 1400000,
    status: "Під замовлення",
    statusTone: "preorder",
    sourceName: "Дивись.info",
    sourceUrl:
      "https://dyvys.info/2024/03/26/fpv-dron-stus-v-ukrayini-predstavyly-pershyj-bezpilotnyk/",
    specs: ["7 дюймів", "з акумулятором 8000 mAh", "FPV-платформа"],
  },
  {
    id: "dzhmil-7",
    name: "FPV Дрон 7 Дюймів Джміль-4.5.0 ELRS",
    category: "FPV-дрони",
    badge: "7 дюймів",
    imageSrc: "https://content1.rozetka.com.ua/goods/images/big/435481682.jpg",
    imageAlt: "FPV Дрон 7 Дюймів Джміль-4.5.0 ELRS",
    priceMinor: 1750000,
    status: "Під замовлення",
    statusTone: "preorder",
    sourceName: "Rozetka",
    sourceUrl: "https://rozetka.com.ua/ua/432551582/p432551582/",
    specs: ["ELRS", "рама 7 дюймів", "аналогова FPV-камера"],
  },
  {
    id: "iflight-nazgul-evoque-f5",
    name: 'iFlight Nazgul Evoque F5 V2 5" ELRS',
    category: "FPV-дрони",
    badge: "FPV BNF",
    imageSrc: "https://content1.rozetka.com.ua/goods/images/big/433921443.png",
    imageAlt: 'Квадрокоптер iFlight Nazgul Evoque F5 V2 5" ELRS',
    priceMinor: 1384500,
    compareAtMinor: 1790000,
    status: "Під замовлення",
    statusTone: "preorder",
    sourceName: "Rozetka",
    sourceUrl: "https://rozetka.com.ua/ua/431669012/p431669012/",
    specs: ["5 дюймів", "до 8 хв польоту", "ELRS 2.4G"],
  },
  {
    id: "betafpv-cetus-kit",
    name: "BETAFPV Cetus FPV Kit",
    category: "FPV-дрони",
    badge: "Навчальний комплект",
    imageSrc: "https://content.rozetka.com.ua/goods/images/big/425915002.jpg",
    imageAlt: "BETAFPV Cetus FPV Kit з окулярами та пультом",
    priceMinor: 918900,
    status: "Під замовлення",
    statusTone: "preorder",
    sourceName: "Rozetka",
    sourceUrl: "https://rozetka.com.ua/ua/343827205/p343827205/",
    specs: ["RTF-комплект", "FPV-окуляри", "2 акумулятори"],
  },
  {
    id: "dji-mavic-3-pro",
    name: "DJI Mavic 3 Pro Fly More Combo",
    category: "DJI Mavic",
    badge: "Pro",
    imageSrc: "https://content.rozetka.com.ua/goods/images/big/361765416.jpg",
    imageAlt: "DJI Mavic 3 Pro Fly More Combo",
    priceMinor: 13664900,
    status: "Під замовлення",
    statusTone: "limited",
    sourceName: "Rozetka",
    sourceUrl: "https://rozetka.com.ua/ua/dji_100057/p386778411/",
    specs: ["три камери", "до 43 хв", "DJI RC Pro"],
  },
  {
    id: "dji-mavic-3-thermal",
    name: "DJI Mavic 3 Thermal Advanced",
    category: "DJI Mavic",
    badge: "Thermal",
    imageSrc: "https://content1.rozetka.com.ua/goods/images/big/631325273.jpg",
    imageAlt: "DJI Mavic 3 Thermal Advanced",
    priceMinor: 20000000,
    compareAtMinor: 21200000,
    status: "Є в наявності",
    statusTone: "available",
    sourceName: "Rozetka",
    sourceUrl:
      "https://rozetka.com.ua/ua/quadrocopters-dji-157456082/p563709957/",
    specs: ["тепловізор", "до 45 хв", "професійна серія"],
  },
  {
    id: "dji-mavic-3-classic",
    name: "DJI Mavic 3 Classic Fly More Combo",
    category: "DJI Mavic",
    badge: "Classic",
    imageSrc: "https://content.rozetka.com.ua/goods/images/big/322694660.jpg",
    imageAlt: "DJI Mavic 3 Classic Fly More Combo",
    priceMinor: 11475000,
    compareAtMinor: 17000000,
    status: "Є в наявності",
    statusTone: "available",
    sourceName: "Rozetka",
    sourceUrl: "https://rozetka.com.ua/ua/382966515/p382966515/",
    specs: ["до 46 хв", "DJI RC", "Fly More Combo"],
  },
  {
    id: "dji-mavic-3",
    name: "DJI Mavic 3",
    category: "DJI Mavic",
    badge: "Base",
    imageSrc: "https://content.rozetka.com.ua/goods/images/big/421635509.jpg",
    imageAlt: "Комплект DJI Mavic 3",
    priceMinor: 9644200,
    status: "Під замовлення",
    statusTone: "preorder",
    sourceName: "Rozetka",
    sourceUrl: "https://rozetka.com.ua/ua/425382906/p425382906/",
    specs: ["4/3 CMOS", "до 46 хв", "складна конструкція"],
  },
  {
    id: "mavic-3-battery",
    name: "DJI Intelligent Flight Battery for Mavic 3",
    category: "Комплектуючі",
    badge: "Акумулятор",
    imageSrc: "https://content.rozetka.com.ua/goods/images/big/273150996.jpg",
    imageAlt: "Акумулятор DJI Intelligent Flight Battery for Mavic 3",
    priceMinor: 549900,
    compareAtMinor: 659900,
    status: "Є в наявності",
    statusTone: "available",
    sourceName: "Rozetka",
    sourceUrl: "https://rozetka.com.ua/ua/dji_cp_ma_00000423_01/p345568384/",
    specs: ["5000 mAh", "Li-Pol", "до 46 хв"],
  },
  {
    id: "mavic-3-charging-hub",
    name: "DJI Battery Charging Hub for Mavic 3",
    category: "Комплектуючі",
    badge: "Заряджання",
    imageSrc:
      "https://content1.rozetka.com.ua/goods/images/big_tile/318249301.jpg",
    imageAlt: "Зарядний хаб DJI Battery Charging Hub for Mavic 3",
    priceMinor: 479700,
    status: "Є в наявності",
    statusTone: "available",
    sourceName: "Rozetka",
    sourceUrl: "https://rozetka.com.ua/ua/348980856/p348980856/",
    specs: ["3 акумулятори", "послідовне заряджання", "USB-C"],
  },
  {
    id: "mavic-3-propellers",
    name: "Пропелери Sunnylife для DJI Mavic 3",
    category: "Комплектуючі",
    badge: "Пропелери",
    imageSrc: "https://content1.rozetka.com.ua/goods/images/big/407895350.jpg",
    imageAlt: "Пропелери Sunnylife для DJI Mavic 3",
    priceMinor: 74900,
    status: "Під замовлення",
    statusTone: "preorder",
    sourceName: "Rozetka",
    sourceUrl: "https://rozetka.com.ua/ua/339117379/p339117379/",
    specs: ["4 шт", "низький шум", "Mavic 3 / Classic / Pro"],
  },
  {
    id: "mavic-3-nd-filters",
    name: "Набір ND фільтрів для DJI Mavic 3 Pro",
    category: "Комплектуючі",
    badge: "ND",
    imageSrc:
      "https://content1.rozetka.com.ua/goods/images/big_tile/521385840.jpg",
    imageAlt: "Набір ND фільтрів для DJI Mavic 3 Pro",
    priceMinor: 400000,
    compareAtMinor: 450000,
    status: "Є в наявності",
    statusTone: "available",
    sourceName: "Rozetka",
    sourceUrl:
      "https://rozetka.com.ua/ua/aksessuari-dlya-radioupravlyaemih-modeley/c4672833/producer%3Ddji/",
    specs: ["ND4/8/16/32", "для Mavic 3 Pro", "комплект лінз"],
  },
] as const satisfies readonly CatalogProduct[];
