export type ThemeId =
  | "system"
  | "light"
  | "nord"
  | "cupcake"
  | "dark"
  | "night"
  | "dim"
  | "dracula"
  | "coffee";

export interface ThemeOption {
  id: ThemeId;
  scheme: "light dark" | "light" | "dark";
}

export const THEME_STORAGE_KEY = "d6holocron-theme";

export const LIGHT_THEMES: ThemeOption[] = [
  { id: "light", scheme: "light" },
  { id: "nord", scheme: "light" },
  { id: "cupcake", scheme: "light" },
];

export const DARK_THEMES: ThemeOption[] = [
  { id: "dark", scheme: "dark" },
  { id: "night", scheme: "dark" },
  { id: "dim", scheme: "dark" },
  { id: "dracula", scheme: "dark" },
  { id: "coffee", scheme: "dark" },
];

export const ALL_THEMES: ThemeOption[] = [
  { id: "system", scheme: "light dark" },
  ...LIGHT_THEMES,
  ...DARK_THEMES,
];

export const THEME_SCHEME_MAP: Record<string, "light" | "dark"> = Object.fromEntries(
  [...LIGHT_THEMES, ...DARK_THEMES].map((t) => [t.id, t.scheme]),
) as Record<string, "light" | "dark">;
