# Contributing to D6 Holocron NEXT

> **Language:** **English** | [Українська](./CONTRIBUTE_UK.md)

Thank you for your interest in contributing to **D6 Holocron NEXT**! This guide explains how to add new books, translate or improve descriptions, attach download links, and contribute code changes cleanly.

## Ways to Contribute

- **Add new Star Wars D6 books** (official West End Games releases or notable community supplements).
- **Add Ukrainian translations or Ukrainian-only books** (descriptions and/or PDF download links).
- **Fix or complete metadata** (authors, ISBNs, page counts, release years, product codes).
- **Improve UI, accessibility, localization, or performance**.

---

## How Books Are Organized

Book entries live in `src/content/books/` split by language folder:

```text
src/content/books/
├── en/<book-slug>.md
└── uk/<book-slug>.md
```

### How `/en` and `/uk` interact
- **English (`/en`)** shows all books from `src/content/books/en/`.
- **Ukrainian (`/uk`)** shows all books from `src/content/books/uk/` **plus** any book from `src/content/books/en/` that does not yet have a `uk/` file.
- If a book has the **same filename** in both `en/` and `uk/` (e.g. `my-book.md`), `/en` displays the English entry and `/uk` displays the Ukrainian entry, and the `EN | UK` switcher links them directly.
- If a book exists **only** in `src/content/books/uk/`, it appears **only** on `/uk` and will not show up on `/en`.

---

## Adding a New Book

### 1. Add the Cover Image
Place the cover image in the matching subfolder under `src/assets/covers/` (for example `src/assets/covers/Supplements/My Book.webp`).
- Prefer `.webp` format (keep file size reasonable; Astro will automatically generate optimized thumbnails and JPEG `og:image` previews at build time).

### 2. Create the Markdown File(s)
Create a `.md` file using kebab-case for the filename:
- English book: `src/content/books/en/<book-slug>.md`
- Ukrainian translation (or Ukrainian-only book): `src/content/books/uk/<book-slug>.md`

All categorization is controlled by the `category` and `edition` fields in frontmatter—do not create nested subfolders inside `en/` or `uk/`.

### 3. Frontmatter Schema Reference

All fields are validated at build time by Zod in `src/content.config.ts`:

| Field | Required | Type / Allowed Values | Notes |
| --- | --- | --- | --- |
| `title` | **Yes** | `string` | Official title of the book |
| `description` | **Yes** | `string` (**max 160 chars**) | Short summary used on the page and in SEO meta tags |
| `edition` | **Yes** | `'1E' \| '2E' \| '2E-RE' \| 'REUP' \| 'OpenD6'` | Rule system edition |
| `category` | **Yes** | `'core' \| 'sourcebook' \| 'adventure' \| 'supplement'` | Catalog category |
| `publisher` | No | `string` (default: `'West End Games'`) | Publisher or community group |
| `author` | No | `string \| string[]` | Single author or YAML list of authors |
| `releaseYear` | No | `integer` | Four-digit publication year (e.g. `1994`) |
| `productCode` | No | `string` | Catalog code (e.g. `WEG40055`) |
| `isbn` | No | `string` | ISBN-10 or ISBN-13 |
| `pages` | No | `integer` | Page count |
| `cover` | No | relative image path | Relative path from the `.md` file to `src/assets/covers/...` (usually `../../../assets/covers/...`) |
| `languages` | No | `Array<'en' \| 'uk'>` | Available PDF languages (e.g. `["en"]` or `["en", "uk"]`) |
| `downloads` | No | `{ en?: ..., uk?: ... }` | Direct download URL(s) per language (single URL string or array of `{ url, label? }`) |

### 4. Example Book File

```markdown
---
title: "Star Wars: The Roleplaying Game, Second Edition"
description: "The 1992 Second Edition core rulebook introducing the Wild Die, streamlined combat, and expanded Force rules."
edition: "2E"
category: "core"
publisher: "West End Games"
author: "Bill Smith"
releaseYear: 1992
productCode: "WEG40055"
isbn: "0-87431-181-0"
pages: 176
cover: "../../../assets/covers/Core Rule Books/The Roleplayng Game Second Edition Oct 1992 WEG40055 (WEG40055).webp"
languages: ["en"]
downloads:
  en: "https://archive.org/download/swd6-holocron-archive/Core%20Rule%20Books/The%20Roleplayng%20Game%20Second%20Edition%20Oct%201992%20WEG40055%20%28WEG40055%29.pdf"
---

Write a clear, factual overview of the book (publication context, setting/era, and purpose).

## Key Contents

- Concrete highlights, chapters, adventures, templates, or rules included in the book.
```

#### Adding Multiple Files or a Ukrainian PDF

```yaml
languages: ["en", "uk"]
downloads:
  en: "https://archive.org/download/..."
  uk:
    - label: "Rulebook PDF"
      url: "https://archive.org/download/..."
    - label: "Character Sheet"
      url: "https://archive.org/download/..."
```

> **Tip:** If you add a Ukrainian PDF download link to an existing English book, add `"uk"` to `languages` and `downloads.uk` in **both** the `en/` and `uk/` Markdown files so visitors on either language version see all available downloads.

---

## Contributing UI & Code Changes

- **Keep UI text localized**: Add any new interface strings to both `src/i18n/en.ts` and `src/i18n/uk.ts` with matching keys.
- **Follow daisyUI 5 semantic colors**: Use semantic classes (`bg-base-100`, `bg-base-200`, `text-base-content`, `border-base-300`, `primary`) instead of hardcoded colors or `dark:` overrides so every theme works automatically.
- **Keep client-side JS minimal**: Prefer static `.astro` components and server-rendered markup.
- **Respect `base` and `trailingSlash: 'never'`**: Always build internal URLs with `localizePath()` (from `src/i18n`) or `withBase()` (from `src/utils/paths`).

---

## Pull Request Workflow

1. Fork the repository and create a descriptive branch (e.g. `feat/add-book-name` or `fix/typo-in-metadata`).
2. Make your changes and run a full production build locally:
   ```bash
   npm run build
   npm run preview
   ```
3. Verify:
   - `npm run build` succeeds with **0 errors** (this validates every book's Zod schema, image paths, `description` length ≤ 160 chars, and `z.url()` download links).
   - Both `/d6holocron-next/en/...` and `/d6holocron-next/uk/...` render properly in `npm run preview`.
   - New books appear in the catalog, category page, and Pagefind navbar search.
4. Open a Pull Request with a concise description of your changes.
