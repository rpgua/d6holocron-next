# D6 Holocron NEXT

> **Language:** **English** | [Українська](./README_UK.md)

A modern static web catalog and reference archive for **Star Wars: The Roleplaying Game (D6 System)** — covering classic West End Games editions (`1E`, `2E`, `2E-RE`) as well as community publications (`REUP`, `OpenD6`, *Adventurer's Journal*, *Rancor Pit*, and more).

Live site: **<https://rpgua.github.io/d6holocron-next/>**

## Tech Stack

- [Astro 7](https://astro.build/) (Static Site Generation + Content Collections + i18n)
- [Tailwind CSS 4](https://tailwindcss.com/) + [daisyUI 5](https://daisyui.com/)
- [Pagefind](https://pagefind.app/) (static search index)
- `@astrojs/mdx` & `@astrojs/sitemap`

## Getting Started

### Prerequisites

- **Node.js** `>= 22.23.4` (see `engines` in `package.json`)

### Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static site and generate Pagefind search index
npm run build

# Preview the production build locally (required to test Pagefind search)
npm run preview
```

> **Note:** Pagefind generates its search index in `dist/pagefind/` during `npm run build`. To test search locally, run `npm run build` followed by `npm run preview`.

## Contributing

Contributions are welcome — whether you want to add new books, translate descriptions, attach PDF links, fix metadata, or improve the UI.

Please read the contribution guide before opening a pull request:

- [CONTRIBUTE.md](./CONTRIBUTE.md) (English)
- [CONTRIBUTE_UK.md](./CONTRIBUTE_UK.md) (Українська)

## Credits

- **3D Model of Holocron**: *"Jedi Holocron"* (<https://skfb.ly/owXZr>) by Greggory_Fisher is licensed under [Creative Commons Attribution 4.0](http://creativecommons.org/licenses/by/4.0/).

## Disclaimer

This is a non-commercial fan reference archive. *Star Wars* and all related trademarks are the property of Lucasfilm Ltd. and The Walt Disney Company. *Star Wars: The Roleplaying Game* was originally published by West End Games.
