"use client";

import { ErrorState } from "@/components/ui/error-state";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <ErrorState
      title="Сталася непередбачена помилка"
      description="Ми не змогли завантажити цю сторінку. Спробуйте повторити дію або поверніться на головну."
      onRetry={reset}
    />
  );
}
