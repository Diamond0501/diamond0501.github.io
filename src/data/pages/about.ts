import type { Locale } from '../site';

export interface AboutContent {
  title: string;
  description: string;
  head: { eyebrow: string; credentials: string; lead: string; portraitAlt: string };
  path: { title: string; items: { icon: string; text: string }[] };
  stance: { title: string; paragraphs: string[] };
}

export const about: Record<Locale, AboutContent> = {
  de: {
    title: 'Über mich',
    description:
      'Yiting Chen, Psychologin (M.Sc.), Paartherapeutin & Coach: Paartherapie und Coaching online auf Deutsch, Englisch und Chinesisch.',
    head: {
      eyebrow: 'Über mich',
      credentials: 'Psychologin (M.Sc.), Paartherapeutin & Coach',
      lead: 'Ich begleite Paare und Einzelne dabei, ihre Beziehung besser zu verstehen und wieder zueinanderzufinden – empathisch, strukturiert und auf Augenhöhe.',
      portraitAlt: 'Porträt von Yiting Chen',
    },
    path: {
      title: 'Mein Weg',
      items: [
        {
          icon: 'map-trifold',
          text: 'Aufgewachsen bin ich in China. Seit über zehn Jahren lebe ich in Deutschland.',
        },
        {
          icon: 'globe-hemisphere-west',
          text: 'Ich bin selbst interkulturell verheiratet und kenne die Herausforderungen einer solchen Partnerschaft.',
        },
        {
          icon: 'graduation-cap',
          text: 'Ich habe Psychologie an der Universität Bonn (B.Sc.) und an der Universität zu Köln (M.Sc.) studiert.',
        },
        {
          icon: 'book-open-text',
          text: 'Meine Abschlussarbeit untersuchte Ehezufriedenheit – mit Daten von Paaren aus 14 Ländern.',
        },
        { icon: 'student', text: 'Weiterbildungen in emotionsfokussierter und schematherapeutischer Paartherapie.' },
        {
          icon: 'certificate',
          text: 'Zertifizierter Coach gemäß den Kriterien des Deutschen Coaching Verbandes e.\u00a0V. (DCV).',
        },
        { icon: 'translate', text: 'Sitzungen biete ich auf Deutsch, Englisch und Chinesisch an.' },
      ],
    },
    stance: {
      title: 'Meine Haltung',
      paragraphs: [
        'Ich begegne Ihnen wertschätzend und offen. In einer Beziehung gibt es selten den einen Schuldigen, meist gibt es ein Muster, in dem beide gefangen sind. Das gemeinsam zu verstehen, entlastet.',
        'Kulturelle Prägung sehe ich als wichtigen Kontext, nicht als Schublade. Jede Familie bringt eigene Selbstverständlichkeiten mit, und jedes Paar findet seine eigene Mischung.',
        'Dabei arbeite ich strukturiert: Wir klären Ihre Ziele, behalten sie im Blick und prüfen regelmäßig, ob die Richtung stimmt.',
      ],
    },
  },
  en: {
    title: 'About',
    description:
      'Yiting Chen, psychologist (M.Sc.), couples therapist & coach: couples therapy and coaching online in German, English and Chinese.',
    head: {
      eyebrow: 'About',
      credentials: 'Psychologist (M.Sc.), couples therapist & coach',
      lead: 'I support couples and individuals in understanding their relationship better and finding their way back to each other – with empathy, in a structured way and on equal footing.',
      portraitAlt: 'Portrait of Yiting Chen',
    },
    path: {
      title: 'My path',
      items: [
        { icon: 'map-trifold', text: 'I grew up in China and have lived in Germany for more than ten years.' },
        {
          icon: 'globe-hemisphere-west',
          text: 'I am in an intercultural marriage myself and know the challenges of such a partnership.',
        },
        {
          icon: 'graduation-cap',
          text: 'I studied psychology at the University of Bonn (B.Sc.) and the University of Cologne (M.Sc.).',
        },
        {
          icon: 'book-open-text',
          text: 'My thesis studied what predicts marital satisfaction – with couples from 14 countries.',
        },
        { icon: 'student', text: 'Further training in emotionally focused and schema-therapy-based couples therapy.' },
        {
          icon: 'certificate',
          text: 'Certified coach according to the criteria of the Deutscher Coaching Verband e.\u00a0V. (DCV).',
        },
        {
          icon: 'translate',
          text: 'You can have your sessions with me in German, English or Chinese.',
        },
      ],
    },
    stance: {
      title: 'My approach',
      paragraphs: [
        'I meet you with appreciation and openness. In a relationship there is rarely one person to blame; usually there is a pattern both are caught in. Understanding it together brings relief.',
        'I see cultural background as important context, not as a box. Every family brings its own unspoken rules, and every couple finds its own mix.',
        'I work in a structured way: we clarify your goals, keep them in view and check regularly that we are heading in the right direction.',
      ],
    },
  },
  zh: {
    title: '关于我',
    description: 'Yiting Chen，心理学硕士、伴侣治疗师与教练：提供德语、英语和中文的线上伴侣治疗与个人教练。',
    head: {
      eyebrow: '关于我',
      credentials: '心理学硕士（M.Sc.）、伴侣治疗师与教练',
      lead: '我陪伴伴侣和个人更好地理解彼此的关系，重新走近对方——富有同理心、有条理，并且平等相待。',
      portraitAlt: 'Yiting Chen 的肖像',
    },
    path: {
      title: '我的经历',
      items: [
        { icon: 'map-trifold', text: '我在中国长大，在德国生活已有十多年。' },
        { icon: 'globe-hemisphere-west', text: '我本人也身处跨文化婚姻之中，了解这种关系面临的挑战。' },
        { icon: 'graduation-cap', text: '我在波恩大学（学士）和科隆大学（硕士）学习心理学。' },
        {
          icon: 'book-open-text',
          text: '毕业论文：婚姻满意度的个人与文化因素（14 国数据）。',
        },
        { icon: 'student', text: '接受过情绪取向伴侣治疗与图式疗法取向伴侣治疗的进修培训。' },
        { icon: 'certificate', text: '依据德国教练协会（DCV）标准认证的教练。' },
        { icon: 'translate', text: '我提供德语、英语和中文的咨询。' },
      ],
    },
    stance: {
      title: '我的态度',
      paragraphs: [
        '我以尊重和开放的态度与您相遇。在一段关系中，很少只有一个人有错；更常见的是双方都被困在同一个模式里。一起理解它，本身就能带来轻松。',
        '我把文化背景视为重要的语境，而不是标签。每个家庭都有自己默认的规则，每对伴侣也会找到属于自己的融合方式。',
        '同时，我的工作方式是有条理的：我们一起明确目标，始终把它放在眼前，并定期检视方向是否正确。',
      ],
    },
  },
};
