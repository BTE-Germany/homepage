export const locales = ["en", "de-DE"] as const;
export type Locale = (typeof locales)[number];