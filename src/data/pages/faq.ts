import type { PageKey } from '../../i18n/routes';
import type { Locale } from '../site';

export interface FaqContent {
  title: string;
  description: string;
  head: { eyebrow: string; title: string; lead: string };
  items: { question: string; answer: string[]; link?: { pageKey: PageKey; label: string } }[];
}

export const faq: Record<Locale, FaqContent> = {
  de: {
    title: 'Häufige Fragen',
    description:
      'Antworten auf häufige Fragen zu Paartherapie und Coaching bei Yiting Chen: Online-Sitzungen, Dauer, Kosten, Vertraulichkeit und Sprachen.',
    head: {
      eyebrow: 'FAQ',
      title: 'Häufige Fragen',
      lead: 'Hier finden Sie Antworten auf die Fragen, die mir am häufigsten gestellt werden: zu Ablauf, Kosten und Sprachen. Wenn Ihre Frage fehlt, schreiben Sie mir gern.',
    },
    items: [
      {
        question: 'Wie läuft eine Online-Sitzung ab?',
        answer: [
          'Wir treffen uns zur vereinbarten Zeit per Videocall, den Link erhalten Sie vorab per E-Mail. Die Sitzung läuft wie ein Gespräch in der Praxis, nur dass Sie dafür zu Hause bleiben können. Als Paar sitzen Sie am besten gemeinsam vor einem Bildschirm.',
        ],
      },
      {
        question: 'Kann ich Sie vorab kennenlernen?',
        answer: [
          'Ja. Vor dem ersten Termin biete ich ein kostenfreies Kennenlerngespräch von 15 Minuten am Telefon an. Wir klären, worum es Ihnen geht und ob die Zusammenarbeit passt – ganz unverbindlich.',
        ],
      },
      {
        question: 'Wie viele Sitzungen braucht es?',
        answer: [
          'Das hängt von Ihrem Anliegen ab. Als grobe Orientierung rechnen viele Paare mit etwa zehn Sitzungen insgesamt. Manchmal reichen weniger, manchmal ist eine längere Begleitung sinnvoll. Wir besprechen regelmäßig gemeinsam, wo Sie stehen.',
        ],
      },
      {
        question: 'Was kostet es, und zahlt die Krankenkasse?',
        answer: [
          'Sie zahlen pro Sitzung; die Preise hängen davon ab, ob Sie als Paar oder allein kommen und wie lange die Sitzung dauert. Paartherapie und Coaching sind keine Kassenleistung, die Kosten tragen Sie also selbst.',
          'Alle Preise finden Sie auf den Seiten Paartherapie und Coaching.',
        ],
      },
      {
        question: 'Mein Partner möchte nicht mitkommen. Kann ich allein anfangen?',
        answer: [
          'Ja. Wenn sich eine Person verändert, verändert sich oft auch die Beziehung. In Einzelsitzungen der Paartherapie schauen wir auf Ihren Teil des Musters und darauf, was Sie selbst in der Hand haben. Möchte Ihr Partner oder Ihre Partnerin später dazukommen, ist das jederzeit möglich.',
        ],
        link: { pageKey: 'couples', label: 'Mehr zur Paartherapie' },
      },
      {
        question: 'Bleibt vertraulich, was ich erzähle?',
        answer: [
          'Ja. Alles, was Sie in den Sitzungen besprechen, behandle ich vertraulich und gebe es nicht weiter. Finden innerhalb einer Paartherapie Einzelsitzungen statt, besprechen wir vorab, wie wir mit dem Gesagten umgehen.',
        ],
      },
      {
        question: 'In welchen Sprachen sind die Sitzungen möglich?',
        answer: [
          'Auf Deutsch, Englisch oder Chinesisch (Mandarin). Haben Sie als Paar unterschiedliche Muttersprachen, finden wir gemeinsam eine Sprache, in der sich beide wohlfühlen.',
        ],
      },
      {
        question: 'Was ist der Unterschied zwischen Paartherapie und Coaching?',
        answer: [
          'In der Paartherapie arbeiten wir an Ihrer Beziehung, zu zweit oder in Einzelsitzungen. Im Coaching geht es um Ihre eigenen Themen, etwa Beruf, Neuorientierung oder einen neuen Lebensabschnitt. Beides sind psychologische Beratungsangebote: Sie sind keine Heilbehandlung und ersetzen keine Psychotherapie.',
          'Wenn Sie an einer psychischen Erkrankung leiden, wenden Sie sich bitte an eine ärztliche oder psychotherapeutische Praxis.',
        ],
      },
      {
        question: 'Was passiert, wenn ich einen Termin absagen muss?',
        answer: [
          'Bitte sagen Sie mindestens 24 Stunden vorher ab. Bei einer späteren Absage oder wenn Sie nicht erscheinen, berechne ich eine Ausfallgebühr von 100 €.',
        ],
      },
      {
        question: 'Was brauche ich technisch?',
        answer: [
          'Einen Computer, ein Tablet oder ein Smartphone mit Kamera und Mikrofon, eine stabile Internetverbindung und einen ruhigen Raum. Für die Sitzungen nutzen wir Google Meet.',
        ],
      },
    ],
  },
  en: {
    title: 'Common questions',
    description:
      'Answers to common questions about couples therapy and coaching with Yiting Chen: online sessions, duration, fees, confidentiality, and languages.',
    head: {
      eyebrow: 'FAQ',
      title: 'Your questions',
      lead: 'Here are answers to the questions I am asked most often: about the process, fees, and languages. If yours is missing, feel free to write to me.',
    },
    items: [
      {
        question: 'How does an online session work?',
        answer: [
          'We meet by video call at the agreed time; you receive the link by email beforehand. It works like an in-person session, except that you can stay at home. As a couple, it works best to sit together in front of one screen.',
        ],
      },
      {
        question: 'Can I get to know you first?',
        answer: [
          'Yes. Before the first session I offer a free 15-minute intro call by phone. We talk about what brings you here and whether working together is a good fit – with no obligation.',
        ],
      },
      {
        question: 'How many sessions does it take?',
        answer: [
          'That depends on what brings you here. As a rough guide, many couples plan for about ten sessions in total. Sometimes fewer are enough, sometimes longer support makes sense. We regularly review together where you stand.',
        ],
      },
      {
        question: 'What does it cost, and does health insurance pay?',
        answer: [
          'You pay per session; the fee depends on whether you come as a couple or on your own and on the length of the session. Couples therapy and coaching are not covered by statutory health insurance, so you pay for them yourself.',
          'You will find all fees on the couples therapy and coaching pages.',
        ],
      },
      {
        question: "My partner doesn't want to come. Can I start on my own?",
        answer: [
          'Yes. When one person changes, the relationship often changes too. In individual sessions of couples therapy we look at your part of the pattern and at what is in your own hands. If your partner wants to join later, that is always possible.',
        ],
        link: { pageKey: 'couples', label: 'More about couples therapy' },
      },
      {
        question: 'Will what I say stay confidential?',
        answer: [
          'Yes. Everything you discuss in the sessions stays confidential and is not passed on. If individual sessions take place within couples therapy, we agree beforehand how we handle what is said in them.',
        ],
      },
      {
        question: 'Which languages are sessions available in?',
        answer: [
          'German, English, or Chinese (Mandarin). If you and your partner have different first languages, we find a language together in which you both feel comfortable.',
        ],
      },
      {
        question: 'What is the difference between couples therapy and coaching?',
        answer: [
          'In couples therapy we work on your relationship, together or in individual sessions. Coaching is about your own topics, such as work, a change of direction, or a new stage of life. Both are psychological counseling services: they are not medical treatment and do not replace psychotherapy.',
          'If you have a mental illness, please contact a doctor or psychotherapist.',
        ],
      },
      {
        question: 'What if I need to cancel a session?',
        answer: [
          'Please cancel at least 24 hours in advance. For later cancellations or missed sessions, I charge a cancellation fee of €100.',
        ],
      },
      {
        question: 'What do I need technically?',
        answer: [
          'A computer, tablet, or smartphone with a camera and microphone, a stable internet connection, and a quiet room. For the sessions we use Google Meet.',
        ],
      },
    ],
  },
  zh: {
    title: '常见问题',
    description: '关于 Yiting Chen 伴侣治疗与人生教练的常见问题：线上咨询、咨询次数、费用、保密和语言。',
    head: {
      eyebrow: 'FAQ',
      title: '常见问题',
      lead: '这里是我最常被问到的问题及解答。如果没有找到您的问题，欢迎直接给我写信。',
    },
    items: [
      {
        question: '线上咨询是怎样进行的？',
        answer: [
          '我们在约定的时间通过视频通话见面，链接会提前通过电子邮件发送给您。咨询就像在咨询室里谈话一样，只是您可以待在家里。如果是伴侣一起参加，最好坐在同一个屏幕前。',
        ],
      },
      {
        question: '正式开始前，可以先聊一聊吗？',
        answer: [
          '可以。在首次咨询之前，我提供一次 15 分钟的免费电话沟通。我们聊聊您的情况，看看是否适合一起工作，您无需承担任何义务。',
        ],
      },
      {
        question: '需要多少次咨询？',
        answer: [
          '这取决于您的议题。大致来说，许多伴侣总共需要十次左右的咨询。有时次数更少就够了，有时则需要更长时间的陪伴。我们会定期一起回顾进展。',
        ],
      },
      {
        question: '费用是多少？医疗保险能报销吗？',
        answer: [
          '按次付费；价格取决于您是伴侣一起来还是独自来，以及每次咨询的时长。伴侣治疗和人生教练不属于法定医疗保险的报销范围，因此费用由您自行承担。',
          '具体价格请见伴侣治疗和人生教练页面。',
        ],
      },
      {
        question: '我的伴侣不想来。我可以自己先开始吗？',
        answer: [
          '可以。当一个人发生改变时，关系往往也会随之改变。在伴侣治疗的个别咨询中，我们关注您在这个互动模式中的角色，以及您自己可以改变的部分。如果您的伴侣之后想加入，随时都可以。',
        ],
        link: { pageKey: 'couples', label: '了解伴侣治疗' },
      },
      {
        question: '我说的内容会保密吗？',
        answer: [
          '会。您在咨询中谈到的一切我都会保密，不会外传。如果在伴侣治疗过程中安排了个别咨询，我们会事先商定如何处理其中谈到的内容。',
        ],
      },
      {
        question: '咨询可以使用哪些语言？',
        answer: ['德语、英语或中文（普通话）。如果你们两人的母语不同，我们会一起找到一种让双方都感到自在的语言。'],
      },
      {
        question: '伴侣治疗和人生教练有什么区别？',
        answer: [
          '在伴侣治疗中，我们关注的是你们的关系，可以两人一起，也可以通过个别咨询。人生教练围绕的是您个人的议题，例如职业、寻找新方向或新的人生阶段。两者都属于心理咨询服务：它们不属于医疗行为，也不能替代心理治疗。',
          '如果您患有心理疾病，请联系医生或心理治疗师。',
        ],
      },
      {
        question: '如果我需要取消预约怎么办？',
        answer: ['请至少提前 24 小时取消。若取消较晚或未能出席，将收取 €100 的取消费用。'],
      },
      {
        question: '技术上需要准备什么？',
        answer: ['一台带摄像头和麦克风的电脑、平板或手机，稳定的网络连接，以及一个安静的房间。咨询使用 Google Meet。'],
      },
    ],
  },
};
