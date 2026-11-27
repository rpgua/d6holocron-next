export const uk = {
  lang: "uk",
  locale: "uk_UA",
  site: {
    name: "D6 Holocron NEXT",
    fullName: "D6 Holocron NEXT",
    tagline: "Архів настільної рольової гри Star Wars D6",
    description:
      "Каталог та архів книг, довідників, пригод і фанатських доповнень для класичної настільної рольової гри Star Wars D6 від West End Games та спільноти.",
  },
  nav: {
    home: "Головна",
    books: "Усі книги",
    search: "Пошук",
    about: "Про проєкт",
    categories: "Категорії",
    openMenu: "Відкрити меню",
    closeMenu: "Закрити меню",
    mainNavigation: "Головна навігація",
    sidebarNavigation: "Навігація сайдбару",
    breadcrumbs: "Навігаційний ланцюжок",
    skipToContent: "Перейти до основного вмісту",
    languageSwitcher: "Змінити мову",
    github: "Репозиторій на GitHub",
  },
  theme: {
    label: "Тема",
    chooseTheme: "Обрати тему оформлення",
    system: "Системна",
    groups: {
      system: "Автоматично",
      light: "Світлі",
      dark: "Темні",
    },
    names: {
      system: "Системна",
      light: "Світла",
      dark: "Темна",
      nord: "Норд",
      cupcake: "Пастельна",
      night: "Нічна",
      dim: "Приглушена",
      dracula: "Дракула",
      coffee: "Кавова",
    },
  },
  categories: {
    core: {
      name: "Основні правила",
      shortName: "Основні",
      description:
        "Базові книги правил, керівництва ведучого та ключові видання системи Star Wars D6.",
    },
    sourcebook: {
      name: "Довідники",
      shortName: "Довідники",
      description:
        "Путівники по галактиці, енциклопедії фракцій, кораблів, планет і персонажів.",
    },
    adventure: {
      name: "Пригоди",
      shortName: "Пригоди",
      description:
        "Готові сценарії, кампанії та модулі для проведення ігрових сесій.",
    },
    supplement: {
      name: "Доповнення",
      shortName: "Доповнення",
      description:
        "Журнали Adventure Journal, каталоги спорядження, шаблони персонажів та фанатські матеріали.",
    },
  },
  editions: {
    "1E": "1-ше видання (1E)",
    "2E": "2-ге видання (2E)",
    "2E-RE": "2E Revised & Expanded",
    REUP: "REUP (фанатське)",
    OpenD6: "OpenD6",
  },
  home: {
    title: "Головна",
    heroBadge: "Архів Star Wars D6",
    heroTitle: "D6 Holocron NEXT",
    heroSubtitle:
      "Систематизована бібліотека класичних видань West End Games та спільноти для настільної рольової гри Star Wars D6.",
    heroThanks: "Дуже вдячні оригінальному проєкту d6holocron.com і всім фанатам, які допомогли зберегти цю гру!",
    ctaCatalog: "Переглянути всі книги",
    ctaAbout: "Про проєкт",
    holocronAlt: "Інтерактивна 3D-модель голокрона джедаїв",
    stats: {
      books: "Книг в архіві",
      categories: "Категорії",
      editions: "Видання системи",
      years: "Роки видання",
    },
    categoriesSectionTitle: "Категорії архіву",
    categoriesSectionDesc:
      "Оберіть розділ, щоб переглянути відповідні книги, довідники або модулі пригод.",
    viewCategory: "Відкрити категорію",
    featuredTitle: "Основні книги правил",
    featuredDesc: "Фундаментальні видання для початку гри за системою Star Wars D6.",
    viewAllBooks: "Усі книги каталогу",
  },
  books: {
    title: "Усі книги",
    description:
      "Повний каталог книг Star Wars D6 з обкладинками, згрупований за категоріями.",
    heading: "Каталог книг",
    subtitle: "Усі видання архіву, згруповані за категоріями.",
    totalCount: (count: number) => `Усього книг: ${count}`,
    booksCount: (count: number) => `${count} кн.`,
    allInCategory: "Усі в категорії",
    jumpToCategory: "Швидкий перехід до категорії",
    noCover: "Без обкладинки",
    coverAlt: (title: string) => `Обкладинка книги «${title}»`,
    empty: "Книг українською мовою поки що немає.",
  },
  categoryPage: {
    title: (categoryName: string) => `${categoryName} — Каталог книг`,
    otherCategories: "Інші категорії",
    backToAll: "До всіх книг",
    empty: "У цій категорії поки що немає книг.",
  },
  bookDetail: {
    metaTitle: (title: string, edition: string) => `${title} (${edition})`,
    detailsHeading: "Інформація про видання",
    fields: {
      category: "Категорія",
      edition: "Видання",
      publisher: "Видавництво",
      author: "Автор",
      authors: "Автори",
      releaseYear: "Рік виходу",
      productCode: "Код продукту",
      isbn: "ISBN",
      pages: "Сторінок",
      languages: "Мови",
    },
    languageNames: {
      en: "Англійська",
      uk: "Українська",
    },
    downloadsHeading: "Файли для завантаження",
    downloadButton: (langName: string, label?: string) =>
      label ? `${label} (${langName})` : `Завантажити (${langName})`,
    descriptionHeading: "Опис",
    backToCategory: (categoryName: string) => `Назад до «${categoryName}»`,
    relatedHeading: "Інші книги з цієї категорії",
  },
  search: {
    label: "Пошук",
    placeholder: "Пошук книг...",
    noResults: "Нічого не знайдено",
    loading: "Пошук...",
    unavailable: "Пошук доступний після збірки (npm run build)",
  },
  about: {
    title: "Про проєкт",
    description:
      "Дізнайтеся більше про архів D6 Holocron NEXT, його мету, структуру каталогу та систему Star Wars D6.",
    heading: "Про проєкт D6 Holocron",
    lead: "D6 Holocron NEXT — це сучасний вебкаталог, створений для збереження інформації про спадщину настільної рольової гри Star Wars: The Roleplaying Game (D6 System).",
    missionTitle: "Мета проєкту",
    missionBody:
      "Оригінальна система Star Wars D6 від West End Games (1987–1998) заклала основи розширеного всесвіту «Зоряних війн» і досі має активну спільноту гравців та ведучих. Наша мета — зібрати впорядковану довідкову базу офіційних видань та ключових фанатських проєктів (REUP, Adventurer's Journal, Rancor Pit тощо) у зручному та швидкому інтерфейсі.",
    coverageTitle: "Що входить до архіву",
    coverageStatsTitle: "Статистика колекції",
    editionsTitle: "Розподіл за виданнями",
    disclaimerTitle: "Відмова від відповідальності",
    disclaimerBody:
      "Цей сайт є некомерційним фанатським довідковим проєктом. Star Wars та всі пов'язані торгові марки належать Lucasfilm Ltd. та The Walt Disney Company. Оригінальні правила Star Wars: The Roleplaying Game були видані West End Games.",
    exploreCta: "Перейти до каталогу книг",
  },
  footer: {
    description: "Некомерційний фанатський архів настільної рольової гри Star Wars D6.",
    navigationTitle: "Навігація",
    categoriesTitle: "Категорії",
    copyright: (year: number) => `© ${year} D6 Holocron NEXT. Фанатський архів Star Wars D6.`,
  },
} as const;

export type CategoryKey = keyof typeof uk.categories;
export type EditionKey = keyof typeof uk.editions;
