"use client";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/form-controls";
import { useToast } from "@/components/ui/toast";

export function InteractiveDemo() {
  const { showToast } = useToast();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="secondary"
        onClick={() =>
          showToast({
            title: "Товар додано до кошика",
            description:
              "Кількість і актуальну ціну буде перевірено на сервері.",
          })
        }
      >
        Показати toast
      </Button>
      <Button
        variant="ghost"
        onClick={() =>
          showToast({
            title: "Інформаційне повідомлення",
            description: "Сповіщення автоматично зникне через кілька секунд.",
            variant: "info",
          })
        }
      >
        Інформаційний toast
      </Button>
      <Dialog
        triggerLabel="Відкрити діалог"
        title="Підтвердження дії"
        description="Нативний dialog утримує фокус, закривається клавішею Escape та повертає фокус до тригера."
      >
        <InputField
          id="dialog-comment"
          label="Коментар"
          placeholder="Додайте короткий коментар"
        />
      </Dialog>
    </div>
  );
}
