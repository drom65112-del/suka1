# DroneHub Ukraine

Базовий фундамент україномовного інтернет-магазину дронів на Next.js,
TypeScript, Tailwind CSS, PostgreSQL і Prisma.

На цьому етапі проєкт містить лише інфраструктуру, загальний layout, головну
сторінку та обробку помилок. Бізнес-функції каталогу, кошика й замовлень ще не
реалізовані.

## Вимоги

- Node.js 24 LTS або сумісна версія, яку підтримують Next.js і Prisma
- npm 11+
- Docker із Docker Compose

## Локальний запуск

1. Створи локальний файл середовища:

   ```bash
   cp .env.example .env
   ```

   У PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

2. Заміни placeholder-пароль у `.env` на власний локальний пароль. Значення
   `POSTGRES_PASSWORD` і пароль у `DATABASE_URL` мають збігатися.

3. Встанови залежності:

   ```bash
   npm install
   ```

4. Запусти PostgreSQL:

   ```bash
   docker compose up -d postgres
   ```

5. Згенеруй Prisma Client:

   ```bash
   npm run db:generate
   ```

6. Запусти застосунок:

   ```bash
   npm run dev
   ```

Сайт буде доступний за адресою [http://localhost:3000](http://localhost:3000).

## Команди

| Команда                | Призначення                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Запустити development server             |
| `npm run build`        | Створити production build                |
| `npm run start`        | Запустити production build               |
| `npm run lint`         | Перевірити код ESLint                    |
| `npm run typecheck`    | Перевірити типи TypeScript               |
| `npm test`             | Запустити тести Vitest                   |
| `npm run format`       | Відформатувати файли Prettier            |
| `npm run format:check` | Перевірити форматування                  |
| `npm run db:generate`  | Згенерувати Prisma Client                |
| `npm run db:migrate`   | Створити й застосувати локальну міграцію |
| `npm run db:studio`    | Відкрити Prisma Studio                   |

## База даних

Docker Compose запускає PostgreSQL 17 із persistent volume
`postgres_data`. Prisma-схема поки навмисно не містить бізнес-моделей: вони
будуть додані окремим етапом разом із першою міграцією.

Зупинити сервіси:

```bash
docker compose down
```

Видалення volume з локальними даними є руйнівною дією й має виконуватися лише
усвідомлено.

## Структура та правила

- Архітектурний план: [`PROJECT_PLAN.md`](./PROJECT_PLAN.md)
- Правила розробки: [`AGENTS.md`](./AGENTS.md)
- Prisma Client singleton: [`lib/db/prisma.ts`](./lib/db/prisma.ts)
- Prisma schema: [`prisma/schema.prisma`](./prisma/schema.prisma)

Секрети не повинні потрапляти до Git. `.env.example` містить лише placeholder-
значення; реальні локальні та production-значення зберігаються окремо.
