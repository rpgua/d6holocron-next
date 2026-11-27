import { en } from "./en";
import { uk } from "./uk";
import { withBase } from "../utils/paths";

export type Locale = "en" | "uk";
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALES: readonly Locale[] = ["en", "uk"] as const;

export const translations = { en, uk } as const;
export type Translations = (typeof translations)[Locale];

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}

/**
 * Returns a localized path including Astro's `base` and explicit locale prefix (`/en` or `/uk`).
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return withBase(`/${locale}${clean}`);
}

/**
 * Strips Astro's `base` and any leading `/en` or `/uk` locale segment from a pathname
 * to recover the canonical route path (e.g. `/books/core-rulebooks/...` or `/`).
 */
export function stripBaseAndLocale(pathname: string): string {
  const base = withBase("/");
  let rest = pathname.replace(/\/+$/, "");

  if (base !== "/" && rest.startsWith(base)) {
    rest = rest.slice(base.length);
  }

  for (const loc of LOCALES) {
    if (rest === `/${loc}`) {
      return "/";
    }
    if (rest.startsWith(`/${loc}/`)) {
      return rest.slice(loc.length + 1) || "/";
    }
  }

  return rest || "/";
}

/**
 * Builds the URL for the same page in another locale.
 */
export function switchLocalePath(
  currentPathname: string,
  targetLocale: Locale,
): string {
  const route = stripBaseAndLocale(currentPathname);
  return localizePath(route, targetLocale);
}
