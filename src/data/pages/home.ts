import type { Locale } from '../site';

export interface HomeContent {
  title: string;
  description: string;
  hero: { role: string; claim: string; sub: string; photoAlt: string };
  recognize: { title: string; items: { icon: string; text: string }[] };
  offers: { couples: Offer; coaching: Offer };
}

interface Offer {
  title: string;
  text: string;
  link: string;
}

export const home: Record<Locale, HomeContent> = {
  de: {
    title: 'Paartherapie & Coaching online',
    description:
      'Yiting Chen, Psychologin (M.Sc.): Paartherapie und Coaching online – auf Deutsch, Englisch oder Chinesisch. Psychologisch fundiert, warmherzig und auf Augenhöhe.',
    hero: {
      role: 'Paartherapie & Coaching',
      claim: 'Raum für das, was Sie bewegt – zu zweit oder allein.',
      sub: 'Paartherapie und Coaching online – auf Deutsch, Englisch oder Chinesisch. Psychologisch fundiert, warmherzig und auf Augenhöhe.',
      photoAlt: 'Porträt von Yiting Chen',
    },
    recognize: {
      title: 'Vielleicht kennen Sie das',
      items: [
        {
          icon: 'arrows-clockwise',
          text: 'Dieselben Streits kehren immer wieder – und am Ende fühlen sich beide unverstanden.',
        },
        {
          icon: 'hourglass-medium',
          text: 'Zwischen Arbeit, Kindern und Familie ist die Nähe leise verloren gegangen.',
        },
        { icon: 'heart-break', text: 'Nach einem Vertrauensbruch steht die Frage im Raum, wie es weitergehen kann.' },
        { icon: 'signpost', text: 'Sie stehen vor einer Trennung oder einem Neuanfang und suchen Orientierung.' },
        { icon: 'user', text: 'Sie möchten etwas verändern – auch wenn Sie zunächst allein beginnen.' },
      ],
    },
    offers: {
      couples: {
        title: 'Paartherapie',
        text: 'Für Paare, die wiederkehrende Muster verstehen, emotionale Bedürfnisse sichtbar machen und Krisen gemeinsam bewältigen möchten.',
        link: 'Mehr zur Paartherapie',
      },
      coaching: {
        title: 'Coaching',
        text: 'Einzelcoaching zu Neuorientierung, Beruf, Selbstwert und Lebensübergängen – auch zum Leben zwischen Kulturen. Für alle, die ihren Weg klarer sehen möchten.',
        link: 'Mehr zum Coaching',
      },
    },
  },
  en: {
    title: 'Couples therapy & coaching online',
    description:
      'Yiting Chen, psychologist (M.Sc.): couples therapy and coaching online – in German, English or Chinese. Grounded in psychology, warm and on equal footing.',
    hero: {
      role: 'Couples therapy & coaching',
      claim: 'Room for what moves you – as a couple or on your own.',
      sub: 'Couples therapy and coaching online – in German, English or Chinese. Grounded in psychology, warm and on equal footing.',
      photoAlt: 'Portrait of Yiting Chen',
    },
    recognize: {
      title: 'Perhaps this sounds familiar',
      items: [
        {
          icon: 'arrows-clockwise',
          text: 'The same arguments keep coming back – and both of you end up feeling misunderstood.',
        },
        { icon: 'hourglass-medium', text: 'Between work, children and family, closeness has quietly slipped away.' },
        { icon: 'heart-break', text: 'After a breach of trust, you are wondering whether and how to go on together.' },
        { icon: 'signpost', text: 'You are facing a separation or a new start and are looking for direction.' },
        { icon: 'user', text: 'You want something to change – even if you start on your own.' },
      ],
    },
    offers: {
      couples: {
        title: 'Couples therapy',
        text: 'For couples who want to understand recurring patterns, make emotional needs visible and get through crises together.',
        link: 'More about couples therapy',
      },
      coaching: {
        title: 'Coaching',
        text: 'Coaching on new directions, work, self-worth and life transitions – also between cultures. For anyone seeking a clearer path.',
        link: 'More about coaching',
      },
    },
  },
  zh: {
    title: '线上伴侣治疗与个人教练',
    description:
      'Yiting Chen，心理学硕士：线上伴侣治疗与个人教练——可使用德语、英语或中文。以心理学为基础，温暖而平等。',
    hero: {
      role: '伴侣治疗与个人教练',
      claim: '为您心中所想留出空间——两个人一起，或独自一人。',
      sub: '线上伴侣治疗与个人教练——可使用德语、英语或中文。以心理学为基础，温暖而平等。',
      photoAlt: 'Yiting Chen 的肖像',
    },
    recognize: {
      title: '也许您也有这样的感受',
      items: [
        { icon: 'arrows-clockwise', text: '同样的争吵一再重演，最后双方都觉得不被理解。' },
        { icon: 'hourglass-medium', text: '在工作、孩子和家庭之间，亲密感悄悄地流失了。' },
        { icon: 'heart-break', text: '信任破裂之后，不知道这段关系该如何走下去。' },
        { icon: 'signpost', text: '您正面临分离或新的开始，希望找到方向。' },
        { icon: 'user', text: '您希望有所改变——即使先由您独自开始。' },
      ],
    },
    offers: {
      couples: {
        title: '伴侣治疗',
        text: '帮助伴侣理解反复出现的互动模式，看见彼此的情感需求，共同度过危机。',
        link: '了解伴侣治疗',
      },
      coaching: {
        title: '个人教练',
        text: '围绕人生方向、职业、自我价值与人生转折的一对一教练，也涉及跨文化生活。适合希望更清晰地看见自己道路的您。',
        link: '了解个人教练',
      },
    },
  },
};
