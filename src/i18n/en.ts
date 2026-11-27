export const en = {
  lang: "en",
  locale: "en_US",
  site: {
    name: "D6 Holocron NEXT",
    fullName: "D6 Holocron NEXT",
    tagline: "Star Wars D6 Tabletop RPG Archive",
    description:
      "Catalog and archive of core rulebooks, sourcebooks, adventures, and fan supplements for the classic West End Games Star Wars D6 tabletop roleplaying game.",
  },
  nav: {
    home: "Home",
    books: "All Books",
    search: "Search",
    about: "About",
    categories: "Categories",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNavigation: "Main navigation",
    sidebarNavigation: "Sidebar navigation",
    breadcrumbs: "Breadcrumbs",
    skipToContent: "Skip to main content",
    languageSwitcher: "Switch language",
    github: "GitHub repository",
  },
  theme: {
    label: "Theme",
    chooseTheme: "Choose color theme",
    system: "System",
    groups: {
      system: "Automatic",
      light: "Light",
      dark: "Dark",
    },
    names: {
      system: "System",
      light: "Light",
      dark: "Dark",
      nord: "Nord",
      cupcake: "Cupcake",
      night: "Night",
      dim: "Dim",
      dracula: "Dracula",
      coffee: "Coffee",
    },
  },
  categories: {
    core: {
      name: "Core Rulebooks",
      shortName: "Core",
      description:
        "Core rulebooks, gamemaster handbooks, and essential editions of the Star Wars D6 system.",
    },
    sourcebook: {
      name: "Sourcebooks",
      shortName: "Sourcebooks",
      description:
        "Galaxy Guides, faction sourcebooks, starships, planets, and character encyclopedias.",
    },
    adventure: {
      name: "Adventures",
      shortName: "Adventures",
      description:
        "Ready-to-run scenarios, campaigns, and adventure modules for your gaming table.",
    },
    supplement: {
      name: "Supplements",
      shortName: "Supplements",
      description:
        "Adventure Journals, equipment catalogs, character templates, and community supplements.",
    },
  },
  editions: {
    "1E": "1st Edition (1E)",
    "2E": "2nd Edition (2E)",
    "2E-RE": "2E Revised & Expanded",
    REUP: "REUP (Fan Edition)",
    OpenD6: "OpenD6",
  },
  home: {
    title: "Home",
    heroBadge: "Star Wars D6 Archive",
    heroTitle: "D6 Holocron NEXT",
    heroSubtitle:
      "A curated reference library of classic West End Games and community publications for the Star Wars D6 tabletop roleplaying game.",
    heroThanks: "Many thanks to original d6holocron.com project and all the fans who helped preserve this game!",
    ctaCatalog: "Browse All Books",
    ctaAbout: "About the Project",
    holocronAlt: "Interactive 3D model of a Jedi Holocron",
    stats: {
      books: "Books in Archive",
      categories: "Categories",
      editions: "System Editions",
      years: "Publication Span",
    },
    categoriesSectionTitle: "Archive Categories",
    categoriesSectionDesc:
      "Choose a section to browse rulebooks, galaxy sourcebooks, or adventure modules.",
    viewCategory: "Open category",
    featuredTitle: "Core Rulebooks",
    featuredDesc:
      "Foundational books to get started with the Star Wars D6 system.",
    viewAllBooks: "View all books",
  },
  books: {
    title: "All Books",
    description:
      "Complete Star Wars D6 book catalog with covers, organized by category.",
    heading: "Book Catalog",
    subtitle: "All archived publications grouped by category.",
    totalCount: (count: number) => `Total books: ${count}`,
    booksCount: (count: number) => `${count} books`,
    allInCategory: "All in category",
    jumpToCategory: "Jump to category",
    noCover: "No cover",
    coverAlt: (title: string) => `Cover of "${title}"`,
    empty: "There are no books in this language yet.",
  },
  categoryPage: {
    title: (categoryName: string) => `${categoryName} — Book Catalog`,
    otherCategories: "Other categories",
    backToAll: "All books",
    empty: "There are no books in this category yet.",
  },
  bookDetail: {
    metaTitle: (title: string, edition: string) => `${title} (${edition})`,
    detailsHeading: "Publication Details",
    fields: {
      category: "Category",
      edition: "Edition",
      publisher: "Publisher",
      author: "Author",
      authors: "Authors",
      releaseYear: "Release Year",
      productCode: "Product Code",
      isbn: "ISBN",
      pages: "Pages",
      languages: "Languages",
    },
    languageNames: {
      en: "English",
      uk: "Ukrainian",
    },
    downloadsHeading: "Downloads",
    downloadButton: (langName: string, label?: string) =>
      label ? `${label} (${langName})` : `Download (${langName})`,
    descriptionHeading: "Overview",
    backToCategory: (categoryName: string) => `Back to ${categoryName}`,
    relatedHeading: "More in this category",
  },
  search: {
    label: "Search",
    placeholder: "Search books...",
    noResults: "No books found",
    loading: "Searching...",
    unavailable: "Search is available after running npm run build",
  },
  about: {
    title: "About",
    description:
      "Learn more about D6 Holocron NEXT, its mission, catalog structure, and the Star Wars D6 RPG system.",
    heading: "About D6 Holocron",
    lead: "D6 Holocron NEXT is a modern web catalog built to preserve and organize the legacy of Star Wars: The Roleplaying Game (D6 System).",
    missionTitle: "Project Mission",
    missionBody:
      "The original Star Wars D6 system by West End Games (1987–1998) helped shape the Expanded Universe and still thrives thanks to a dedicated community of players and gamemasters. Our goal is to provide a fast, well-structured reference index of both official releases and notable fan projects (REUP, Adventurer's Journal, Rancor Pit, and more).",
    coverageTitle: "What's in the Archive",
    coverageStatsTitle: "Collection Statistics",
    editionsTitle: "Breakdown by Edition",
    disclaimerTitle: "Disclaimer",
    disclaimerBody:
      "This site is a non-commercial fan reference archive. Star Wars and all related trademarks are the property of Lucasfilm Ltd. and The Walt Disney Company. The original Star Wars: The Roleplaying Game was published by West End Games.",
    exploreCta: "Explore Book Catalog",
  },
  footer: {
    description: "Non-commercial fan archive for the Star Wars D6 tabletop RPG.",
    navigationTitle: "Navigation",
    categoriesTitle: "Categories",
    copyright: (year: number) =>
      `© ${year} D6 Holocron NEXT. Star Wars D6 Fan Archive.`,
  },
} as const;
