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

// Until launch, the deploy builds with PUBLIC_SITE_STAGE=coming-soon. Of the route map only the home
// page is then built, as a notice that carries the request form. Everything below follows from
// `pageKeys`, so nothing links to a page that is not built.
export const comingSoon = import.meta.env.PUBLIC_SITE_STAGE === 'coming-soon';

export const pageKeys: PageKey[] = comingSoon ? ['home'] : (Object.keys(routes) as PageKey[]);

const isBuilt = (key: PageKey) => pageKeys.includes(key);

export const navKeys = (['couples', 'coaching', 'about', 'faq'] as const).filter(isBuilt);

/** The AGB link to the price sections of both service pages. */
export const hasTerms = isBuilt('couples') && isBuilt('coaching');

export function pathFor(key: PageKey, locale: Locale): string {
  return routes[key][locale];
}

/** The request form sits on the contact page, or on the home page while there is no contact page. */
export function formPathFor(locale: Locale): string {
  return `${pathFor(isBuilt('contact') ? 'contact' : 'home', locale)}#anfrage`;
}

export function contactPathFor(locale: Locale): string {
  return isBuilt('contact') ? pathFor('contact', locale) : formPathFor(locale);
}

export function alternatesFor(key: PageKey): { hreflang: string; path: string }[] {
  return locales.map((locale) => ({ hreflang: site.locales[locale], path: pathFor(key, locale) }));
}
