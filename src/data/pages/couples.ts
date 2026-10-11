import type { Locale } from '../site';
import { coupleRates, individualRates, type ServiceContent } from './service';

export const couples: Record<Locale, ServiceContent> = {
  de: {
    title: 'Paartherapie',
    description:
      'Paartherapie online mit Yiting Chen: emotionsfokussiert, integrativ und ressourcenorientiert – auf Deutsch, Englisch oder Chinesisch.',
    head: {
      eyebrow: 'Paartherapie',
      title: 'Zueinanderfinden',
      lead: 'In der Paartherapie schauen wir auf die Muster, in denen Sie feststecken, und auf die Bedürfnisse darunter. Ziel ist, dass Sie sich wieder verstanden fühlen und neue Wege miteinander finden.',
    },
    approach: {
      items: [
        {
          icon: 'heartbeat',
          title: 'Emotionsfokussiert',
          text: 'Wir schauen auf die Gefühle und Bedürfnisse hinter Streit und Rückzug. Dort entstehen die Muster, die sich immer wiederholen.',
        },
        {
          icon: 'puzzle-piece',
          title: 'Integrativ',
          text: 'Ich verbinde bewährte Methoden aus verschiedenen Ansätzen und wähle aus, was zu Ihrer Situation passt.',
        },
        {
          icon: 'plant',
          title: 'Ressourcenorientiert',
          text: 'Wir stärken, was in Ihrer Beziehung schon trägt, statt nur auf Probleme zu schauen.',
        },
        {
          icon: 'compass',
          title: 'Kultursensibel',
          text: 'Herkunft, Familie und Werte prägen jede Beziehung. Ich nehme sie als Kontext ernst, ohne in Schubladen zu denken.',
        },
      ],
    },
    topics: {
      title: 'Themen, mit denen Paare zu mir kommen',
      items: [
        {
          icon: 'chats-circle',
          title: 'Kommunikation',
          text: 'Aus Streit-Schleifen aussteigen und wieder so sprechen, dass sich beide gehört fühlen.',
        },
        {
          icon: 'hand-heart',
          title: 'Emotionale Nähe',
          text: 'Die Bedürfnisse hinter dem Verhalten verstehen und wieder Verbindung spüren.',
        },
        {
          icon: 'handshake',
          title: 'Vertrauen nach einer Krise',
          text: 'Nach Verletzungen gemeinsam klären, ob und wie ein Neuanfang möglich ist.',
        },
        {
          icon: 'users-three',
          title: 'Familie & Herkunft',
          text: 'Wie Herkunftsfamilie und Schwiegereltern in die Beziehung hineinwirken.',
        },
        {
          icon: 'globe-hemisphere-west',
          title: 'Interkulturelle Partnerschaft',
          text: 'Unterschiedliche Prägungen und Werte als Kontext verstehen – nicht als Stereotyp.',
        },
        {
          icon: 'sun-horizon',
          title: 'Neue Lebensphasen',
          text: 'Umzug, Kinder, Jobwechsel: Veränderungen, die eine Beziehung neu sortieren.',
        },
      ],
    },
    process: {
      items: [
        {
          icon: 'compass',
          title: 'Erstgespräch',
          text: 'Sie erzählen beide, was Sie zu mir führt. Ich höre beiden zu und lerne Sie als Paar kennen.',
        },
        {
          icon: 'magnifying-glass',
          title: 'Muster verstehen',
          text: 'Wir schauen auf das, was im Streit zwischen Ihnen geschieht, und auf die Gefühle dahinter – auch in Einzelsitzungen.',
        },
        {
          icon: 'plant',
          title: 'Verbindung stärken',
          text: 'Sie gehen anders aufeinander zu, sprechen Verletzliches aus und gewinnen Nähe und Vertrauen zurück.',
        },
      ],
    },
    prices: [
      { title: 'Paarsitzung', rates: coupleRates },
      { title: 'Einzelsitzung', rates: individualRates },
    ],
  },
  en: {
    title: 'Couples therapy',
    description:
      'Couples therapy online with Yiting Chen: emotion-focused, integrative and resource-oriented – in German, English or Chinese.',
    head: {
      eyebrow: 'Couples therapy',
      title: 'Feeling understood',
      lead: 'In couples therapy we look at the patterns you are stuck in and at the needs underneath them. The aim is for you to feel understood again and to find new ways of being together.',
    },
    approach: {
      items: [
        {
          icon: 'heartbeat',
          title: 'Emotion-focused',
          text: 'We look at the feelings and needs behind arguments and withdrawal. That is where the patterns that keep repeating begin.',
        },
        {
          icon: 'puzzle-piece',
          title: 'Integrative',
          text: 'I combine proven methods from different approaches and choose what fits your situation.',
        },
        {
          icon: 'plant',
          title: 'Resource-oriented',
          text: 'We strengthen what already holds your relationship together, rather than looking only at problems.',
        },
        {
          icon: 'compass',
          title: 'Culturally sensitive',
          text: 'Origins, family and values shape every relationship. I take them seriously as context, without putting anyone in a box.',
        },
      ],
    },
    topics: {
      title: 'Topics couples bring to me',
      items: [
        {
          icon: 'chats-circle',
          title: 'Communication',
          text: 'Step out of argument loops and talk again so that both of you feel heard.',
        },
        {
          icon: 'hand-heart',
          title: 'Emotional closeness',
          text: 'Understand the needs behind the behaviour and feel connected again.',
        },
        {
          icon: 'handshake',
          title: 'Trust after a crisis',
          text: 'After being hurt, work out together whether and how a new start is possible.',
        },
        {
          icon: 'users-three',
          title: 'Family & origins',
          text: 'How families of origin, parents and in-laws shape the relationship.',
        },
        {
          icon: 'globe-hemisphere-west',
          title: 'Intercultural partnership',
          text: 'See different backgrounds, values and family ideals as context – not as stereotypes.',
        },
        {
          icon: 'sun-horizon',
          title: 'New life stages',
          text: 'Moving, children, a new job: changes that reshuffle a relationship.',
        },
      ],
    },
    process: {
      items: [
        {
          icon: 'compass',
          title: 'First session',
          text: 'You both tell me what brings you here. I listen to each of you and get to know you as a couple.',
        },
        {
          icon: 'magnifying-glass',
          title: 'Understanding patterns',
          text: 'We look at what happens between you in conflict, and at the feelings beneath – also in individual sessions.',
        },
        {
          icon: 'plant',
          title: 'Strengthening connection',
          text: 'You approach each other differently, voice what feels vulnerable and regain closeness and trust.',
        },
      ],
    },
    prices: [
      { title: 'Couple session', rates: coupleRates },
      { title: 'Individual session', rates: individualRates },
    ],
  },
  zh: {
    title: '伴侣治疗',
    description: '与 Yiting Chen 进行线上伴侣治疗：以情绪为焦点、整合取向、资源取向——可使用德语、英语或中文。',
    head: {
      eyebrow: '伴侣治疗',
      title: '重新理解彼此',
      lead: '在伴侣治疗中，我们会一起看见你们陷入的互动模式，以及模式背后的需求。目标是让你们重新感到被理解，并找到相处的新方式。',
    },
    approach: {
      items: [
        {
          icon: 'heartbeat',
          title: '以情绪为焦点',
          text: '我们关注争吵与退缩背后的感受与需求，模式正源于此。',
        },
        {
          icon: 'puzzle-piece',
          title: '整合取向',
          text: '我结合不同流派中行之有效的方法，选择适合您情况的方式。',
        },
        {
          icon: 'plant',
          title: '资源取向',
          text: '我们加强关系中已经在支撑你们的部分，而不只是盯着问题。',
        },
        {
          icon: 'compass',
          title: '文化敏感',
          text: '我把成长背景、家庭和价值观当作语境来理解，而不是贴标签。',
        },
      ],
    },
    topics: {
      title: '伴侣们常带来的议题',
      items: [
        { icon: 'chats-circle', title: '沟通', text: '走出反复争吵的循环，重新以双方都感到被倾听的方式交流。' },
        { icon: 'hand-heart', title: '情感亲密', text: '理解对方行为背后的需求，重新感受彼此之间的连接。' },
        { icon: 'handshake', title: '危机后的信任', text: '在受伤之后，你们一起厘清是否以及如何重新开始。' },
        { icon: 'users-three', title: '原生家庭', text: '原生家庭、父母和公婆如何在不知不觉中影响你们的关系。' },
        {
          icon: 'globe-hemisphere-west',
          title: '跨文化伴侣关系',
          text: '把不同的成长背景、价值观和家庭观念理解为语境，而不是刻板印象。',
        },
        { icon: 'sun-horizon', title: '人生新阶段', text: '搬家、孩子、换工作：这些变化会重新塑造一段关系。' },
      ],
    },
    process: {
      items: [
        {
          icon: 'compass',
          title: '首次咨询',
          text: '你们各自讲述来访的原因。我倾听双方，并了解你们的关系。',
        },
        {
          icon: 'magnifying-glass',
          title: '理解互动模式',
          text: '看清争吵时两人之间发生了什么和背后的感受，也可个别咨询。',
        },
        {
          icon: 'plant',
          title: '加深连接',
          text: '你们以新的方式走近彼此，说出脆弱的感受，重新找回亲密与信任。',
        },
      ],
    },
    prices: [
      { title: '伴侣咨询', rates: coupleRates },
      { title: '个别咨询', rates: individualRates },
    ],
  },
};
