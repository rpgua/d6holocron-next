const rawBase = import.meta.env.BASE_URL || "/";
const normalizedBase = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

/**
 * Builds an internal site URL respecting Astro's `base` and `trailingSlash: 'never'`.
 */
export function withBase(path: string): string {
  if (!path || path === "/") {
    return normalizedBase || "/";
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${cleanPath}`.replace(/\/+$/, "");
}

/**
 * Compares the current pathname with a target route path (before base prefix).
 */
export function isActivePath(currentPathname: string, targetPath: string): boolean {
  const current = currentPathname.replace(/\/+$/, "") || "/";
  const target = withBase(targetPath).replace(/\/+$/, "") || "/";
  return current === target;
}
