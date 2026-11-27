# D6 Holocron NEXT

> **Мова:** [English](./README.md) | **Українська**

Сучасний статичний вебкаталог та довідковий архів настільної рольової гри **Star Wars: The Roleplaying Game (система D6)** — охоплює класичні видання West End Games (`1E`, `2E`, `2E-RE`) та фанатські проєкти спільноти (`REUP`, `OpenD6`, *Adventurer's Journal*, *Rancor Pit* тощо).

Сайт: **<https://rpgua.github.io/d6holocron-next/>**

## Технології

- [Astro 7](https://astro.build/) (статична генерація + Content Collections + i18n)
- [Tailwind CSS 4](https://tailwindcss.com/) + [daisyUI 5](https://daisyui.com/)
- [Pagefind](https://pagefind.app/) (клієнтський повнотекстовий пошук)
- `@astrojs/mdx` та `@astrojs/sitemap`

## Локальний запуск

### Вимоги

- **Node.js** `>= 22.23.4` (вказано в `engines` у `package.json`)

### Команди

```bash
# Встановлення залежностей
npm install

# Запуск dev-сервера
npm run dev

# Збірка сайту та генерація індексу Pagefind
npm run build

# Локальний перегляд зібраного сайту (потрібен для перевірки пошуку Pagefind)
npm run preview
```

> **Примітка:** Pagefind створює пошуковий індекс у `dist/pagefind/` під час виконання `npm run build`. Щоб перевірити пошук локально, виконайте `npm run build`, а потім `npm run preview`.

## Як долучитися (Contributing)

Будемо раді будь-якому внеску: додаванню нових книг, перекладам описів, посиланням на українські чи англійські PDF, виправленню метаданих або покращенню інтерфейсу.

Перед створенням Pull Request ознайомтеся з інструкцією:

- [CONTRIBUTE_UK.md](./CONTRIBUTE_UK.md) (Українська)
- [CONTRIBUTE.md](./CONTRIBUTE.md) (English)

## Подяки

- **3D-модель голокрона**: *«Jedi Holocron»* (<https://skfb.ly/owXZr>) авторства Greggory_Fisher розповсюджується за ліцензією [Creative Commons Attribution 4.0](http://creativecommons.org/licenses/by/4.0/).

## Відмова від відповідальності

Цей сайт є некомерційним фанатським довідковим архівом. *Star Wars* та всі пов'язані торгові марки належать Lucasfilm Ltd. та The Walt Disney Company. Оригінальна гра *Star Wars: The Roleplaying Game* була видана West End Games.
