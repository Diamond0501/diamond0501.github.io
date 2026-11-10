import type { Locale } from '../site';

export interface HomeContent {
  title: string;
  description: string;
  hero: { claim: string; sub: string; photoAlt: string };
  offers: { title: string; couples: Offer; coaching: Offer };
  comingSoon: { title: string; text: string };
}

interface Offer {
  title: string;
  text: string;
  signs: { icon: string; text: string }[];
  link: string;
}

export const home: Record<Locale, HomeContent> = {
  de: {
    title: 'Paartherapie & Coaching online',
    description:
      'Yiting Chen, Psychologin (M.Sc.): Paartherapie und Coaching online – auf Deutsch, Englisch oder Chinesisch. Psychologisch fundiert, empathisch und auf Augenhöhe.',
    hero: {
      claim: 'Paartherapie & Coaching online',
      sub: 'Psychologisch fundiert, empathisch und auf Augenhöhe – auf Deutsch, Englisch oder Chinesisch.',
      photoAlt: 'Porträt von Yiting Chen',
    },
    offers: {
      title: 'Wobei ich Sie begleite',
      couples: {
        title: 'Paartherapie',
        text: 'Im Mittelpunkt steht Ihre Beziehung: Muster verstehen, Bedürfnisse sichtbar machen, Krisen gemeinsam bewältigen.',
        signs: [
          {
            icon: 'arrows-clockwise',
            text: 'Dieselben Streits kehren immer wieder, und beide fühlen sich unverstanden.',
          },
          {
            icon: 'hourglass-medium',
            text: 'Zwischen Arbeit, Kindern und Familie ist die Nähe nach und nach verloren gegangen.',
          },
          { icon: 'heart-break', text: 'Nach einem Vertrauensbruch steht die Frage im Raum, wie es weitergehen kann.' },
        ],
        link: 'Mehr zur Paartherapie',
      },
      coaching: {
        title: 'Coaching',
        text: 'Im Mittelpunkt steht Ihr eigener Weg: Neuorientierung, Beruf, Selbstwert und das Leben zwischen Kulturen.',
        signs: [
          { icon: 'signpost', text: 'Sie stehen vor einer großen Entscheidung und suchen Orientierung.' },
          {
            icon: 'briefcase',
            text: 'Ihre Arbeit passt nicht mehr zu Ihnen, aber der nächste Schritt ist noch unklar.',
          },
          {
            icon: 'globe-hemisphere-west',
            text: 'Sie leben zwischen zwei Kulturen und suchen darin Ihren eigenen Weg.',
          },
        ],
        link: 'Mehr zum Coaching',
      },
    },
    comingSoon: {
      title: 'Die Website ist im Aufbau',
      text: 'Ausführliche Informationen zu Paartherapie und Coaching finden Sie hier in Kürze. Ein Kennenlerngespräch können Sie schon jetzt anfragen: über das Formular, per E-Mail oder telefonisch.',
    },
  },
  en: {
    title: 'Couples therapy & coaching online',
    description:
      'Yiting Chen, psychologist (M.Sc.): couples therapy and coaching online – in German, English, or Chinese. Grounded in psychology, empathetic, and on equal footing.',
    hero: {
      claim: 'Couples therapy & coaching online',
      sub: 'Grounded in psychology, empathetic, and on equal footing – in German, English, or Chinese.',
      photoAlt: 'Portrait of Yiting Chen',
    },
    offers: {
      title: 'How I can support you',
      couples: {
        title: 'Couples therapy',
        text: 'The focus is your relationship: understanding patterns, voicing needs, and getting through crises.',
        signs: [
          {
            icon: 'arrows-clockwise',
            text: 'The same arguments keep coming back, and you both end up feeling unheard.',
          },
          {
            icon: 'hourglass-medium',
            text: 'Between work, children, and family, closeness has gradually slipped away.',
          },
          {
            icon: 'heart-break',
            text: 'After a breach of trust, you are wondering whether and how to go on together.',
          },
        ],
        link: 'More about couples therapy',
      },
      coaching: {
        title: 'Coaching',
        text: 'The focus is your own path: new directions, work, self-worth, and life between cultures.',
        signs: [
          { icon: 'signpost', text: 'You are facing a big decision and are looking for direction.' },
          { icon: 'briefcase', text: 'Your work no longer feels right for you, but the next step is still unclear.' },
          {
            icon: 'globe-hemisphere-west',
            text: 'You live between two cultures and are looking for your own way within them.',
          },
        ],
        link: 'More about coaching',
      },
    },
    comingSoon: {
      title: 'This website is under construction',
      text: 'You will find detailed information on couples therapy and coaching here soon. You can already request an intro call: through the form, by email, or by phone.',
    },
  },
  zh: {
    title: '线上伴侣治疗与人生教练',
    description:
      'Yiting Chen，心理学硕士：线上伴侣治疗与人生教练——可使用德语、英语或中文。以心理学为基础，富有同理心，平等相待。',
    hero: {
      claim: '线上伴侣治疗与人生教练',
      sub: '以心理学为基础，富有同理心，平等相待——可使用德语、英语或中文。',
      photoAlt: 'Yiting Chen 的肖像',
    },
    offers: {
      title: '我能如何陪伴您',
      couples: {
        title: '伴侣治疗',
        text: '重点是你们的关系：理解互动模式、看见彼此需求、共度危机。',
        signs: [
          { icon: 'arrows-clockwise', text: '同样的争吵一再重演，双方都觉得不被理解。' },
          { icon: 'hourglass-medium', text: '忙于工作、孩子和家庭，两人之间渐渐疏远了。' },
          { icon: 'heart-break', text: '信任破裂之后，不知道这段关系该如何走下去。' },
        ],
        link: '了解伴侣治疗',
      },
      coaching: {
        title: '人生教练',
        text: '重点是您自己的道路：人生方向、职业、自我价值与跨文化生活。',
        signs: [
          { icon: 'signpost', text: '您正面临一个重大决定，希望找到方向。' },
          { icon: 'briefcase', text: '现在的工作不再适合您，但下一步还不清楚。' },
          { icon: 'globe-hemisphere-west', text: '您生活在两种文化之间，想找到自己的路。' },
        ],
        link: '了解人生教练',
      },
    },
    comingSoon: {
      title: '网站正在建设中',
      text: '关于伴侣治疗和人生教练的详细介绍即将上线。您现在就可以通过表单、电子邮件或电话预约初次沟通。',
    },
  },
};
