import { locales, site, type Locale } from '../data/site';

export type PageKey = 'home' | 'couples' | 'coaching' | 'about' | 'faq' | 'contact';

export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { de: '/', en: '/en/', zh: '/zh/' },
  couples: { de: '/paartherapie/', en: '/en/couples-therapy/', zh: '/zh/couples-therapy/' },
  coaching: { de: '/coaching/', en: '/en/coaching/', zh: '/zh/coaching/' },
  about: { de: '/ueber-mich/', en: '/en/about/', zh: '/zh/about/' },
  faq: { de: '/faq/', en: '/en/faq/', zh: '/zh/faq/' },
  contact: { de: '/kontakt/', en: '/en/contact/', zh: '/zh/contact/' },
};

export const navKeys: Exclude<PageKey, 'home'>[] = ['couples', 'coaching', 'about', 'faq'];

export function pathFor(key: PageKey, locale: Locale): string {
  return routes[key][locale];
}

export function alternatesFor(key: PageKey): { hreflang: string; path: string }[] {
  return locales.map((locale) => ({ hreflang: site.locales[locale], path: pathFor(key, locale) }));
}
