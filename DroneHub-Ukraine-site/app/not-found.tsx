import { ErrorState } from "@/components/ui/error-state";

export default function NotFoundPage() {
  return (
    <ErrorState
      title="Сторінку не знайдено"
      description="Можливо, посилання застаріло або сторінку було переміщено. Перевірте адресу чи поверніться на головну."
    />
  );
}
