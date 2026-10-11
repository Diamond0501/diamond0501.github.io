import { site, type Locale } from '../site';

export interface ContactContent {
  title: string;
  description: string;
  head: { eyebrow: string; title: string; lead: string };
  details: { title: string; items: { icon: string; text: string }[] };
  // sent and failed are repeated in apps-script/contact-form.gs for the page shown without JavaScript.
  form: {
    name: string;
    email: string;
    message: string;
    privacy: { before: string; link: string; after: string };
    submit: string;
    sending: string;
    sent: string;
    failed: { before: string; after: string };
  };
  crisis: { title: string; text: string; or: string; emergency: string };
}

export const crisisLines = {
  helplines: [
    { display: '0800 111 0 111', href: 'tel:08001110111' },
    { display: '0800 111 0 222', href: 'tel:08001110222' },
  ],
  emergency: { display: '112', href: 'tel:112' },
};

export const contact: Record<Locale, ContactContent> = {
  de: {
    title: 'Kontakt',
    description: `Kontakt zu Yiting Chen: über das Anfrageformular, per E-Mail an ${site.email} oder telefonisch unter ${site.phone.display}.`,
    head: {
      eyebrow: 'Kontakt',
      title: 'Schreiben Sie mir',
      lead: 'Ein, zwei Sätze genügen: worum es Ihnen geht, ob Sie als Paar oder allein kommen möchten und in welcher Sprache. Ich melde mich mit Terminvorschlägen für ein kostenfreies Kennenlerngespräch.',
    },
    details: {
      title: 'So erreichen Sie mich',
      items: [
        {
          icon: 'lock',
          text: 'Bitte senden Sie keine Gesundheitsangaben per Formular oder E-Mail; darüber sprechen wir lieber in der Sitzung.',
        },
        {
          icon: 'video-camera',
          text: 'Alle Sitzungen finden online per Videocall statt; dafür brauchen Sie nur einen ruhigen Ort.',
        },
      ],
    },
    form: {
      name: 'Name',
      email: 'E-Mail',
      message: 'Ihre Nachricht',
      privacy: {
        before:
          'Ihre Angaben gehen per E-Mail an mich und dienen nur der Beantwortung Ihrer Anfrage. Mehr dazu in der ',
        link: 'Datenschutzerklärung',
        after: '.',
      },
      submit: 'Anfrage senden',
      sending: 'Wird gesendet …',
      sent: 'Danke, Ihre Anfrage ist angekommen. Ich melde mich bei Ihnen.',
      failed: { before: 'Das hat leider nicht geklappt. Bitte schreiben Sie mir direkt an ', after: '.' },
    },
    crisis: {
      title: 'In einer akuten Krise',
      text: 'Paartherapie und Coaching sind kein Angebot für akute Krisen. Wenn Sie sich in einer seelischen Notlage befinden, erreichen Sie die Telefonseelsorge rund um die Uhr und kostenfrei:',
      or: 'oder',
      emergency: 'Bei Lebensgefahr rufen Sie bitte sofort den Notruf:',
    },
  },
  en: {
    title: 'Contact',
    description: `Contact Yiting Chen through the request form, by email at ${site.email} or by phone at ${site.phone.display}.`,
    head: {
      eyebrow: 'Contact',
      title: 'Write to me',
      lead: "A sentence or two is enough: what it's about, whether you'd like to come as a couple or on your own, and in which language. I'll reply with times for a free intro call.",
    },
    details: {
      title: 'How to reach me',
      items: [
        {
          icon: 'lock',
          text: 'Please do not send health details by form or email; we can talk about them in the session instead.',
        },
        { icon: 'video-camera', text: 'All sessions take place online by video call – all you need is a quiet place.' },
      ],
    },
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Your message',
      privacy: {
        before: 'Your details reach me by email and are used only to answer your request. See the ',
        link: 'privacy policy (in German)',
        after: '.',
      },
      submit: 'Send request',
      sending: 'Sending …',
      sent: "Thank you, your request has arrived. I'll get back to you.",
      failed: { before: 'Sorry, that did not work. Please write to me directly at ', after: '.' },
    },
    crisis: {
      title: 'In an acute crisis',
      text: 'Couples therapy and coaching are not designed for acute crises. If you are in emotional distress, the German crisis line Telefonseelsorge is available around the clock and free of charge:',
      or: 'or',
      emergency: 'If a life is in danger, please call the emergency number immediately:',
    },
  },
  zh: {
    title: '联系',
    description: `联系 Yiting Chen：咨询表单、电子邮件 ${site.email} 或电话 ${site.phone.display}。`,
    head: {
      eyebrow: '联系',
      title: '给我写信',
      lead: '一两句话就足够：您想谈什么、希望伴侣一起来还是独自来，以及使用哪种语言。我会回复您免费初次了解谈话的可约时间。',
    },
    details: {
      title: '联系方式',
      items: [
        { icon: 'lock', text: '请不要通过表单或电子邮件发送详细的健康信息，这些我们更适合在咨询中谈。' },
        { icon: 'video-camera', text: '所有咨询均通过线上视频进行，您只需要准备一个安静、不受打扰的地方即可。' },
      ],
    },
    form: {
      name: '姓名',
      email: '电子邮件',
      message: '您的留言',
      privacy: {
        before: '您填写的信息会通过电子邮件发送给我，仅用于回复您的咨询。详见',
        link: '隐私政策（德语）',
        after: '。',
      },
      submit: '发送咨询',
      sending: '正在发送……',
      sent: '谢谢，您的咨询已成功发送。我会与您联系。',
      failed: { before: '很抱歉，发送未成功。请直接发送电子邮件至 ', after: '。' },
    },
    crisis: {
      title: '处于急性危机时',
      text: '伴侣治疗和个人教练不适用于急性危机。如果您正处于心理困境中，可以全天候免费拨打德国心理援助热线（Telefonseelsorge）：',
      or: '或',
      emergency: '如遇生命危险，请立即拨打急救电话：',
    },
  },
};
