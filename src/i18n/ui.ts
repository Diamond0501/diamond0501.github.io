import { site, type Locale } from '../data/site';
import type { PageKey } from './routes';

interface UiStrings {
  // The wordmark links home, so the home page has no nav label.
  nav: Record<Exclude<PageKey, 'home'>, string>;
  mainNavLabel: string;
  languageLabel: string;
  menuLabel: string;
  skipLink: string;
  cta: { label: string; note: string; call: string };
  closing: { title: string; text: string };
  footer: { imprint: string; privacy: string; terms: string };
}

export const languageNames: Record<Locale, string> = { de: 'DE', en: 'EN', zh: '中文' };

export const ui: Record<Locale, UiStrings> = {
  de: {
    nav: {
      couples: 'Paartherapie',
      coaching: 'Coaching',
      about: 'Über mich',
      faq: 'FAQ',
      contact: 'Kontakt',
    },
    mainNavLabel: 'Hauptnavigation',
    languageLabel: 'Sprache',
    menuLabel: 'Menü',
    skipLink: 'Zum Inhalt springen',
    cta: {
      label: 'Kennenlerngespräch anfragen',
      note: 'Kostenfreies 15-minütiges Kennenlerngespräch am Telefon.',
      call: `oder anrufen: ${site.phone.display}`,
    },
    closing: {
      title: 'Der erste Schritt',
      text: 'Schreiben Sie mir kurz, worum es Ihnen geht – ein, zwei Sätze genügen. Ich melde mich mit Terminvorschlägen.',
    },
    footer: { imprint: 'Impressum', privacy: 'Datenschutz', terms: 'AGB' },
  },
  en: {
    nav: {
      couples: 'Couples therapy',
      coaching: 'Coaching',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
    },
    mainNavLabel: 'Main navigation',
    languageLabel: 'Language',
    menuLabel: 'Menu',
    skipLink: 'Skip to content',
    cta: {
      label: 'Request an intro call',
      note: 'Free 15-minute intro call by phone.',
      call: `or call: ${site.phone.display}`,
    },
    closing: {
      title: 'The first step',
      text: "Send me a short note about what brings you here – a sentence or two is enough. I'll reply with suggested times.",
    },
    footer: { imprint: 'Imprint (in German)', privacy: 'Privacy (in German)', terms: 'Terms (in German)' },
  },
  zh: {
    nav: {
      couples: '伴侣治疗',
      coaching: '个人教练',
      about: '关于我',
      faq: '常见问题',
      contact: '联系',
    },
    mainNavLabel: '主导航',
    languageLabel: '语言',
    menuLabel: '菜单',
    skipLink: '跳到正文',
    cta: { label: '预约初次了解谈话', note: '15 分钟的免费电话初次了解谈话。', call: `或致电：${site.phone.display}` },
    closing: {
      title: '迈出第一步',
      text: '请简单写下您想谈的内容，一两句话就足够。我会回复您可预约的时间。',
    },
    footer: { imprint: '法律声明（德语）', privacy: '隐私政策（德语）', terms: '服务条款（德语）' },
  },
};
