import type { Locale } from '../site';

// Paartherapie and Coaching share one page template, so their content has one shape.
export interface ServiceContent {
  title: string;
  description: string;
  head: { eyebrow: string; title: string; lead: string };
  approach: { items: { icon: string; title: string; text: string }[] };
  topics: { title: string; items: { icon: string; title: string; text: string }[] };
  // The steps after the intro call (the intro call itself is shared, below).
  process: { items: ProcessStep[] };
  prices: { title: string; rates: Rate[] }[];
}

export interface ProcessStep {
  icon: string;
  label: string;
  title: string;
  text: string;
}

export interface Rate {
  minutes: number;
  euros: number;
}

export const coupleRates: Rate[] = [
  { minutes: 60, euros: 190 },
  { minutes: 90, euros: 210 },
];

export const individualRates: Rate[] = [
  { minutes: 60, euros: 170 },
  { minutes: 90, euros: 190 },
];

// Text both service pages show word for word.
interface SharedServiceContent {
  approach: { title: string };
  topics: { eyebrow: string };
  process: { eyebrow: string; title: string; intro: ProcessStep; note: string };
  online: { eyebrow: string; title: string; items: { icon: string; text: string }[] };
  fees: {
    eyebrow: string;
    title: string;
    minutes: string;
    conditions: { icon: string; text: string }[];
    termsLink: string;
    note: string;
  };
}

export const service: Record<Locale, SharedServiceContent> = {
  de: {
    approach: { title: 'Wie ich arbeite' },
    topics: { eyebrow: 'Woran wir arbeiten' },
    process: {
      eyebrow: 'Ablauf',
      title: 'So läuft es ab',
      intro: {
        icon: 'phone',
        label: 'Vorab, 15 Minuten',
        title: 'Kennenlernen',
        text: 'Ein kostenfreies Telefonat: Wir lernen uns kennen und klären, ob es passt.',
      },
      note: 'Die Zahlen sind Richtwerte. Wie viele Sitzungen Sie brauchen, hängt von Ihrem Anliegen ab.',
    },
    online: {
      eyebrow: 'Online',
      title: 'So funktionieren Online-Sitzungen',
      items: [
        {
          icon: 'video-camera',
          text: 'Wir sprechen über Google Meet. Den Link zur Sitzung erhalten Sie vorab per E-Mail.',
        },
        {
          icon: 'laptop',
          text: 'Sie brauchen ein Gerät mit Kamera und Mikrofon sowie eine stabile Internetverbindung.',
        },
        {
          icon: 'door',
          text: 'Wählen Sie einen ruhigen Raum; als Paar sitzen Sie am besten gemeinsam vor einem Bildschirm.',
        },
        {
          icon: 'headphones',
          text: 'Kopfhörer helfen, wenn Sie allein teilnehmen und noch jemand im Haushalt ist.',
        },
      ],
    },
    fees: {
      eyebrow: 'Kosten',
      title: 'Preise und Bedingungen',
      minutes: 'Minuten',
      conditions: [
        {
          icon: 'receipt',
          text: 'Paartherapie und Coaching sind keine Kassenleistung. Die Kosten tragen Sie selbst.',
        },
        {
          icon: 'link',
          text: 'Vor jeder Sitzung erhalten Sie einen SumUp-Zahlungslink für Karte, Apple Pay oder Google Pay.',
        },
        {
          icon: 'calendar-x',
          text: 'Bitte sagen Sie mindestens 24 Stunden vorher ab, sonst berechne ich eine Ausfallgebühr von 100 €.',
        },
        {
          icon: 'tag',
          text: 'Alle Preise sind Endpreise. Als Kleinunternehmerin nach § 19 UStG berechne ich keine Umsatzsteuer.',
        },
      ],
      termsLink: 'Zu den AGB',
      note: 'Paartherapie und Coaching sind keine Heilbehandlung und ersetzen keine Psychotherapie.',
    },
  },
  en: {
    approach: { title: 'How I work' },
    topics: { eyebrow: 'What we work on' },
    process: {
      eyebrow: 'Process',
      title: 'How it works',
      intro: {
        icon: 'phone',
        label: 'Beforehand, 15 minutes',
        title: 'Intro call',
        text: 'A free phone call: we get to know each other and see whether it is a good fit.',
      },
      note: 'These numbers are estimates. How many sessions you need depends on what you bring.',
    },
    online: {
      eyebrow: 'Online',
      title: 'How online sessions work',
      items: [
        {
          icon: 'video-camera',
          text: 'We talk via Google Meet. You receive the link to the session by email beforehand.',
        },
        {
          icon: 'laptop',
          text: 'You need a device with a camera and microphone, and a stable internet connection.',
        },
        {
          icon: 'door',
          text: 'Find a quiet room where you can talk undisturbed. As a couple, it works best to sit together in front of one screen.',
        },
        {
          icon: 'headphones',
          text: 'Headphones help if you join on your own and someone else is at home.',
        },
      ],
    },
    fees: {
      eyebrow: 'Fees',
      title: 'Fees and conditions',
      minutes: 'minutes',
      conditions: [
        {
          icon: 'receipt',
          text: 'Couples therapy and coaching are not covered by statutory health insurance; you pay yourself.',
        },
        {
          icon: 'link',
          text: 'Before each session you receive a SumUp payment link for card, Apple Pay or Google Pay.',
        },
        {
          icon: 'calendar-x',
          text: 'Please cancel at least 24 hours in advance; otherwise I charge a cancellation fee of €100.',
        },
        {
          icon: 'tag',
          text: 'All prices are final prices. As a small business under § 19 of the German VAT Act (UStG), I do not charge VAT.',
        },
      ],
      termsLink: 'Terms and conditions (in German)',
      note: 'Couples therapy and coaching are not medical treatment and do not replace psychotherapy.',
    },
  },
  zh: {
    approach: { title: '我的工作方式' },
    topics: { eyebrow: '咨询主题' },
    process: {
      eyebrow: '流程',
      title: '咨询如何进行',
      intro: {
        icon: 'phone',
        label: '事先，15 分钟',
        title: '初次了解',
        text: '免费电话交谈：我们彼此认识，并看看合作是否合适。',
      },
      note: '以上次数仅供参考。您需要多少次咨询取决于具体议题。',
    },
    online: {
      eyebrow: '线上',
      title: '线上咨询如何进行',
      items: [
        { icon: 'video-camera', text: '我们使用 Google Meet 进行咨询。咨询链接会提前通过电子邮件发送给您。' },
        { icon: 'laptop', text: '您需要一台带摄像头和麦克风的电脑、平板或手机，以及稳定的网络连接。' },
        { icon: 'door', text: '请找一个可以不受打扰交谈的安静房间。如果是伴侣一起参加，最好坐在同一个屏幕前。' },
        { icon: 'headphones', text: '如果您独自参加而家中还有其他人，佩戴耳机可以更好地保护谈话的私密性。' },
      ],
    },
    fees: {
      eyebrow: '费用',
      title: '价格与条件',
      minutes: '分钟',
      conditions: [
        { icon: 'receipt', text: '伴侣治疗和个人教练不属于法定医疗保险的报销范围，费用由您自行承担。' },
        {
          icon: 'link',
          text: '每次线上咨询前，您会收到一个 SumUp 付款链接，可使用信用卡或借记卡、Apple Pay 或 Google Pay 付款。',
        },
        {
          icon: 'calendar-x',
          text: '如需取消，请至少提前 24 小时告知。若取消较晚或未能出席，将收取 €100 的取消费用。',
        },
        { icon: 'tag', text: '所有价格均为最终价格。根据德国《增值税法》第 19 条的小企业规定，不收取增值税。' },
      ],
      termsLink: '服务条款（德语）',
      note: '伴侣治疗和个人教练不属于医疗行为，不能替代心理治疗。',
    },
  },
};
