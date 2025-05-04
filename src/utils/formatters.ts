export function formatNumberWithCommas(value: number | null | undefined): string {
  if (value == null) return "";
  return value.toLocaleString();
}
