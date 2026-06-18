import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils/cn";

const controlStyles =
  "min-h-11 w-full rounded-xl border border-white/15 bg-slate-950/70 px-3.5 py-2.5 text-base text-white placeholder:text-slate-500 hover:border-white/25 focus:border-yellow-300 focus:outline-none focus:ring-3 focus:ring-yellow-300/15 disabled:cursor-not-allowed disabled:opacity-50";

type FieldMessageProps = {
  id: string;
  hint?: string;
  error?: string;
};

function FieldMessage({ id, hint, error }: FieldMessageProps) {
  const message = error ?? hint;

  return message ? (
    <p
      id={id}
      className={cn("mt-2 text-sm", error ? "text-red-300" : "text-slate-400")}
    >
      {message}
    </p>
  ) : null;
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
};

export function InputField({
  className,
  error,
  hint,
  id,
  label,
  ...props
}: InputFieldProps) {
  const messageId = `${id}-message`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold text-slate-200"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(controlStyles, error && "border-red-400", className)}
        aria-describedby={hint || error ? messageId : undefined}
        aria-invalid={Boolean(error)}
        {...props}
      />
      <FieldMessage id={messageId} hint={hint} error={error} />
    </div>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

export function SelectField({
  children,
  className,
  error,
  hint,
  id,
  label,
  ...props
}: SelectFieldProps) {
  const messageId = `${id}-message`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold text-slate-200"
      >
        {label}
      </label>
      <select
        id={id}
        className={cn(controlStyles, error && "border-red-400", className)}
        aria-describedby={hint || error ? messageId : undefined}
        aria-invalid={Boolean(error)}
        {...props}
      >
        {children}
      </select>
      <FieldMessage id={messageId} hint={hint} error={error} />
    </div>
  );
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
};

export function TextareaField({
  className,
  error,
  hint,
  id,
  label,
  ...props
}: TextareaFieldProps) {
  const messageId = `${id}-message`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold text-slate-200"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={cn(
          controlStyles,
          "min-h-28 resize-y",
          error && "border-red-400",
          className,
        )}
        aria-describedby={hint || error ? messageId : undefined}
        aria-invalid={Boolean(error)}
        {...props}
      />
      <FieldMessage id={messageId} hint={hint} error={error} />
    </div>
  );
}

type CheckboxFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  description?: string;
};

export function CheckboxField({
  description,
  id,
  label,
  ...props
}: CheckboxFieldProps) {
  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 size-5 shrink-0 accent-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-yellow-300"
        {...props}
      />
      <div>
        <label htmlFor={id} className="block font-bold text-slate-200">
          {label}
        </label>
        {description ? (
          <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
