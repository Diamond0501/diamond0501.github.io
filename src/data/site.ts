export const site = {
  name: 'Yiting Chen',
  email: 'mail@yitingchen.de',
  phone: { display: '+49 170 8104668', href: 'tel:+491708104668' },
  // Web app URL of apps-script/contact-form.gs, deployed in her Google Workspace (see README).
  contactForm:
    'https://script.google.com/macros/s/AKfycbyj-H8Kuxv5sqsY5fx0eOio4xOqsCZVfs3PsyStixquGXbpGcKUXNkD3OkPt3N1Atez6w/exec',
  ogImage: '/og-image.jpg',
  locales: { de: 'de', en: 'en', zh: 'zh-Hans' },
} as const;

export type Locale = keyof typeof site.locales;

export const locales = Object.keys(site.locales) as Locale[];
