import type { CollectionEntry } from "astro:content";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "../i18n";
import type { CategoryKey, EditionKey } from "../i18n/uk";

export const CATEGORY_ORDER: CategoryKey[] = [
  "core",
  "sourcebook",
  "adventure",
  "supplement",
];

export const EDITION_ORDER: EditionKey[] = [
  "1E",
  "2E",
  "2E-RE",
  "REUP",
  "OpenD6",
];

export type BookEntry = CollectionEntry<"books">;

export interface NormalizedDownload {
  lang: Locale;
  url: string;
  label?: string;
}

/**
 * Extracts the folder locale (`en` or `uk`) from a book entry ID (`<lang>/<slug>`).
 */
export function getBookLocale(book: BookEntry): Locale {
  const prefix = book.id.split("/")[0] as Locale;
  return (LOCALES as readonly string[]).includes(prefix)
    ? prefix
    : DEFAULT_LOCALE;
}

/**
 * Strips the leading `<lang>/` folder from a book entry ID to get its route slug.
 */
export function getBookSlug(book: BookEntry): string {
  const parts = book.id.split("/");
  if ((LOCALES as readonly string[]).includes(parts[0])) {
    return parts.slice(1).join("/");
  }
  return book.id;
}

/**
 * Returns the effective book list for a given site locale:
 * - `en`: only books in `src/content/books/en/`.
 * - `uk`: all books in `src/content/books/uk/`, plus all `en/` books that do not
 *   have a matching `uk/` translation yet.
 */
export function getBooksByLocale(books: BookEntry[], lang: Locale): BookEntry[] {
  if (lang === DEFAULT_LOCALE) {
    return books.filter((book) => getBookLocale(book) === DEFAULT_LOCALE);
  }

  const bySlug = new Map<string, BookEntry>();

  // Seed with default-locale (en) books first
  for (const book of books) {
    if (getBookLocale(book) === DEFAULT_LOCALE) {
      bySlug.set(getBookSlug(book), book);
    }
  }

  // Override with locale-specific (uk) books and add uk-only books
  for (const book of books) {
    if (getBookLocale(book) === lang) {
      bySlug.set(getBookSlug(book), book);
    }
  }

  return Array.from(bySlug.values());
}

/**
 * Checks whether a book slug is available on the target site locale
 * (accounting for `uk` falling back to `en` books).
 */
export function hasBookInLocale(
  books: BookEntry[],
  slug: string,
  lang: Locale,
): boolean {
  return getBooksByLocale(books, lang).some((b) => getBookSlug(b) === slug);
}

/**
 * Returns the list of available languages for a book, combining explicit `languages`,
 * `downloads` keys, and the book's own folder locale as fallback.
 */
export function getBookLanguages(book: BookEntry): Locale[] {
  const langs = new Set<Locale>();

  if (book.data.languages && book.data.languages.length > 0) {
    for (const l of book.data.languages) {
      langs.add(l);
    }
  }

  if (book.data.downloads) {
    for (const loc of LOCALES) {
      if (book.data.downloads[loc]) {
        langs.add(loc);
      }
    }
  }

  if (langs.size === 0) {
    langs.add(getBookLocale(book));
  }

  return LOCALES.filter((loc) => langs.has(loc));
}

/**
 * Normalizes a book's `downloads` map into a flat ordered list of links,
 * placing the current site locale's downloads first.
 */
export function getBookDownloads(
  book: BookEntry,
  preferredLang: Locale,
): NormalizedDownload[] {
  const downloads = book.data.downloads;
  if (!downloads) return [];

  const orderedLocales: Locale[] = [
    preferredLang,
    ...LOCALES.filter((l) => l !== preferredLang),
  ];

  const result: NormalizedDownload[] = [];

  for (const loc of orderedLocales) {
    const raw = downloads[loc];
    if (!raw) continue;
    const list = Array.isArray(raw) ? raw : [raw];
    for (const item of list) {
      if (typeof item === "string") {
        result.push({ lang: loc, url: item });
      } else {
        result.push({ lang: loc, url: item.url, label: item.label });
      }
    }
  }

  return result;
}

export function sortBooks(books: BookEntry[]): BookEntry[] {
  return [...books].sort((a, b) => {
    const yearA = a.data.releaseYear ?? 9999;
    const yearB = b.data.releaseYear ?? 9999;
    if (yearA !== yearB) return yearA - yearB;
    return a.data.title.localeCompare(b.data.title, "en");
  });
}

export function groupBooksByCategory(
  books: BookEntry[],
): Record<CategoryKey, BookEntry[]> {
  const grouped: Record<CategoryKey, BookEntry[]> = {
    core: [],
    sourcebook: [],
    adventure: [],
    supplement: [],
  };

  for (const book of books) {
    grouped[book.data.category].push(book);
  }

  for (const key of CATEGORY_ORDER) {
    grouped[key] = sortBooks(grouped[key]);
  }

  return grouped;
}

export function getBookStats(books: BookEntry[]) {
  const byCategory: Record<CategoryKey, number> = {
    core: 0,
    sourcebook: 0,
    adventure: 0,
    supplement: 0,
  };
  const byEdition: Record<EditionKey, number> = {
    "1E": 0,
    "2E": 0,
    "2E-RE": 0,
    "REUP": 0,
    "OpenD6": 0,
  };

  let minYear = Infinity;
  let maxYear = -Infinity;

  for (const book of books) {
    byCategory[book.data.category]++;
    byEdition[book.data.edition]++;
    if (book.data.releaseYear) {
      if (book.data.releaseYear < minYear) minYear = book.data.releaseYear;
      if (book.data.releaseYear > maxYear) maxYear = book.data.releaseYear;
    }
  }

  return {
    total: books.length,
    byCategory,
    byEdition,
    minYear: Number.isFinite(minYear) ? minYear : null,
    maxYear: Number.isFinite(maxYear) ? maxYear : null,
  };
}
