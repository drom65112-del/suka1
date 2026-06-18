# DroneHub Ukraine

Это исходники сайта-каталога FPV-дронов, DJI Mavic и комплектующих.

## Как запустить локально

1. Установить Node.js 24.x.
2. Открыть терминал в папке проекта.
3. Выполнить команды:

```powershell
npm install
npm run dev
```

4. Открыть сайт:

```text
http://localhost:3000
```

## Как собрать для продакшена

```powershell
npm run build
npm run start
```

## Как заменить Telegram

Открыть файл:

```text
lib/catalog/products.ts
```

Найти строку:

```ts
export const telegramChannelUrl = "#telegram";
```

Заменить `#telegram` на ссылку вида:

```ts
export const telegramChannelUrl = "https://t.me/your_channel";
```

После этого кнопка заказа будет открывать Telegram.

## Основные файлы

- `app/(shop)/page.tsx` - главная страница
- `components/catalog/catalog-section.tsx` - каталог, фильтры и окно заказа
- `components/catalog/product-card.tsx` - карточка товара
- `components/layout/brand-logo.tsx` - логотип
- `lib/catalog/products.ts` - товары, цены, фото и Telegram-ссылка

## Деплой

Проект удобнее всего выкладывать на Vercel как обычный Next.js проект.
