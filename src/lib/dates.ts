/** Content dates are stored as YYYY-MM and mapped to the first day of that month. */
export const DEFAULT_CONTENT_DATE = "2026-08";

export function parseYearMonth(value: string): Date {
  const [year, month] = value.split("-");
  const y = Number(year);
  const m = Number(month);
  if (!y || !m) return new Date(`${DEFAULT_CONTENT_DATE}-01T00:00:00.000Z`);
  return new Date(Date.UTC(y, m - 1, 1));
}

export function contentDate(value?: string): Date {
  return parseYearMonth(value ?? DEFAULT_CONTENT_DATE);
}

export function schemaDate(value?: string): string {
  const date = contentDate(value);
  return date.toISOString().slice(0, 10);
}

export function laterDate(...values: Array<string | undefined>): string {
  return values
    .filter((value): value is string => Boolean(value))
    .reduce((latest, current) => (current > latest ? current : latest), DEFAULT_CONTENT_DATE);
}
