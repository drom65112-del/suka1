export function formatPrice(
  amountMinor: number,
  currency = "UAH",
  locale = "uk-UA",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amountMinor / 100);
}
