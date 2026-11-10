import type { Locale } from '../site';
import { individualRates, type ServiceContent } from './service';

export const coaching: Record<Locale, ServiceContent> = {
  de: {
    title: 'Coaching',
    description:
      'Coaching online mit Yiting Chen zu Neuorientierung, Beruf, Selbstwert und Lebensübergängen – auch zum Leben zwischen Kulturen.',
    head: {
      eyebrow: 'Coaching',
      title: 'Klarheit gewinnen',
      lead: 'Ob Beruf, Selbstwert oder ein neuer Lebensabschnitt: Im Einzelcoaching nehmen wir uns Zeit für Ihre Sicht, Ihre Gefühle und Ihre Möglichkeiten – und erarbeiten, wie es für Sie weitergehen kann.',
    },
    approach: {
      items: [
        {
          icon: 'users-four',
          title: 'Inneres Team',
          text: 'Wir geben den verschiedenen Stimmen in Ihnen einen Platz – etwa der, die bleiben will, und der, die gehen möchte – und klären, was jede braucht.',
        },
        {
          icon: 'chair',
          title: 'Arbeit mit dem leeren Stuhl',
          text: 'Sie sprechen aus, was Sie einem Menschen schon lange sagen möchten – geschützt und ohne dass er dabei ist.',
        },
        {
          icon: 'lightbulb',
          title: 'Arbeit an Glaubenssätzen',
          text: 'Wir entdecken Überzeugungen wie „Ich muss es allen recht machen“ und prüfen, ob sie Ihnen heute noch dienen.',
        },
        {
          icon: 'tree-structure',
          title: 'Systemvisualisierung',
          text: 'Mit Symbolen auf einer digitalen Fläche machen wir sichtbar, wie die Menschen in Ihrem Umfeld zueinander stehen.',
        },
        {
          icon: 'plant',
          title: 'Ressourcenaktivierung',
          text: 'Wir holen hervor, was Ihnen schon einmal geholfen hat, und machen es für Ihre jetzige Situation nutzbar.',
        },
      ],
    },
    topics: {
      title: 'Themen, mit denen Sie zu mir kommen',
      items: [
        {
          icon: 'signpost',
          title: 'Neuorientierung',
          text: 'An einem Wendepunkt eine Entscheidung treffen, die wirklich zu Ihnen passt.',
        },
        {
          icon: 'briefcase',
          title: 'Beruf & Sinn',
          text: 'Herausfinden, ob Ihre Arbeit noch zu Ihnen passt, und eine stimmige Richtung finden.',
        },
        {
          icon: 'shield-check',
          title: 'Selbstwert & Grenzen',
          text: 'Sich selbst mehr zutrauen, eigene Bedürfnisse ernst nehmen und klar vertreten.',
        },
        {
          icon: 'scales',
          title: 'Balance & Stress',
          text: 'Zwischen Beruf, Familie und eigenen Ansprüchen wieder in Balance kommen.',
        },
        {
          icon: 'path',
          title: 'Lebensübergänge',
          text: 'Umzug, Elternschaft oder Jobwechsel: einen neuen Lebensabschnitt bewusst gestalten.',
        },
        {
          icon: 'globe-hemisphere-west',
          title: 'Leben zwischen Kulturen',
          text: 'Zwischen zwei Kulturen den eigenen Weg finden – im Beruf und im Alltag.',
        },
      ],
    },
    process: {
      items: [
        {
          icon: 'compass',
          title: 'Erstgespräch',
          text: 'Wir klären Ihr Anliegen und besprechen, was Sie sich vom Coaching ganz konkret wünschen.',
        },
        {
          icon: 'magnifying-glass',
          title: 'Erarbeiten',
          text: 'Mit passenden Methoden schauen wir gemeinsam genauer hin und finden neue Sichtweisen.',
        },
        {
          icon: 'plant',
          title: 'Umsetzen',
          text: 'Sie setzen erste Schritte in Ihrem Alltag um, und wir festigen, was Ihnen dabei wirklich hilft.',
        },
      ],
    },
    prices: [{ title: 'Coaching', rates: individualRates }],
  },
  en: {
    title: 'Coaching',
    description:
      'Coaching online with Yiting Chen on new directions, work, self-worth, and life transitions – including life between cultures.',
    head: {
      eyebrow: 'Coaching',
      title: 'Gaining clarity',
      lead: 'Whether it is work, self-worth, or a new chapter of life: in individual coaching we take time for your perspective, your feelings, and your options – and work out how things can move forward for you.',
    },
    approach: {
      items: [
        {
          icon: 'users-four',
          title: 'Inner team',
          text: 'We give the different voices inside you a place – say, the one that wants to stay and the one that wants to leave – and clarify what each of them needs.',
        },
        {
          icon: 'chair',
          title: 'Empty-chair work',
          text: 'You say what you have long wanted to tell someone – in a protected setting, without them being there.',
        },
        {
          icon: 'lightbulb',
          title: 'Working with beliefs',
          text: 'We uncover beliefs such as “I have to please everyone” and check whether they still serve you today.',
        },
        {
          icon: 'tree-structure',
          title: 'System visualization',
          text: 'Using symbols on a digital board, we map out how the people around you relate to one another.',
        },
        {
          icon: 'plant',
          title: 'Activating resources',
          text: 'We bring out what has helped you before and make it useful for your situation now.',
        },
      ],
    },
    topics: {
      title: 'Topics individuals bring to me',
      items: [
        {
          icon: 'signpost',
          title: 'New direction',
          text: 'At a turning point, make a decision that is truly right for you.',
        },
        {
          icon: 'briefcase',
          title: 'Work & meaning',
          text: 'Find out whether your work still suits you, and find a direction that feels right.',
        },
        {
          icon: 'shield-check',
          title: 'Self-worth & boundaries',
          text: 'Trust yourself more, take your own needs seriously, and stand up for them clearly.',
        },
        {
          icon: 'scales',
          title: 'Balance & stress',
          text: 'Find your balance again between work, family, and your own expectations.',
        },
        {
          icon: 'path',
          title: 'Life transitions',
          text: 'A move, parenthood, or a job change: shape a new chapter of life with intention.',
        },
        {
          icon: 'globe-hemisphere-west',
          title: 'Life between cultures',
          text: 'Find your own way between two cultures – at work and in everyday life.',
        },
      ],
    },
    process: {
      items: [
        {
          icon: 'compass',
          title: 'First session',
          text: 'We clarify what brings you here and what exactly you are hoping to get from coaching.',
        },
        {
          icon: 'magnifying-glass',
          title: 'Exploring',
          text: 'With methods that suit you, we take a closer look together and find new perspectives.',
        },
        {
          icon: 'plant',
          title: 'Taking steps',
          text: 'You take first steps in your everyday life, and we build on what really helps you.',
        },
      ],
    },
    prices: [{ title: 'Coaching', rates: individualRates }],
  },
  zh: {
    title: '人生教练',
    description: 'Yiting Chen 的线上人生教练服务：围绕人生方向、职业、自我价值与人生转折，也涉及跨文化生活。',
    head: {
      eyebrow: '人生教练',
      title: '找到清晰的方向',
      lead: '无论是工作、自我价值还是人生的新阶段，在教练过程中，我们都会花时间关注您的视角、感受和可能性，并一起探索接下来的路。',
    },
    approach: {
      items: [
        {
          icon: 'users-four',
          title: '内在团队',
          text: '让内心不同的声音各有其位，并厘清它们各自需要什么。',
        },
        {
          icon: 'chair',
          title: '空椅子技术',
          text: '把一直想对某个人说的话说出来——在安全的环境里，而对方并不在场。',
        },
        {
          icon: 'lightbulb',
          title: '审视信念',
          text: '发现“我必须让所有人满意”这类信念，看看它如今是否还对您有益。',
        },
        {
          icon: 'tree-structure',
          title: '系统可视化',
          text: '借助数字白板上的符号，我们把您身边的人彼此之间的关系呈现出来。',
        },
        {
          icon: 'plant',
          title: '调动内在资源',
          text: '我们找回曾经帮助过您的力量，并让它在当下的处境中发挥作用。',
        },
      ],
    },
    topics: {
      title: '个人来访者常带来的议题',
      items: [
        {
          icon: 'signpost',
          title: '寻找新方向',
          text: '站在人生的转折点上，做出一个真正适合自己的决定。',
        },
        {
          icon: 'briefcase',
          title: '职业与意义',
          text: '看清目前的工作是否仍然适合自己，并找到契合的方向。',
        },
        {
          icon: 'shield-check',
          title: '自我价值与界限',
          text: '更加信任自己，认真对待自己的需求，并清晰地表达它们。',
        },
        {
          icon: 'scales',
          title: '平衡与压力',
          text: '在工作、家庭和对自己的要求之间重新找回平衡。',
        },
        {
          icon: 'path',
          title: '人生转折',
          text: '搬家、为人父母或换工作：有意识地塑造人生的新阶段。',
        },
        {
          icon: 'globe-hemisphere-west',
          title: '跨文化生活',
          text: '在两种文化之间找到自己的道路——在工作中，也在日常生活里。',
        },
      ],
    },
    process: {
      items: [
        {
          icon: 'compass',
          title: '首次咨询',
          text: '我们明确您的议题以及您对教练的期望，并一起确定目标。',
        },
        {
          icon: 'magnifying-glass',
          title: '澄清与探索',
          text: '借助合适的方法，我们一起深入探索，找到新的视角。',
        },
        {
          icon: 'plant',
          title: '实践与巩固',
          text: '您在日常中迈出第一步，我们巩固对您有帮助的做法。',
        },
      ],
    },
    prices: [{ title: '人生教练', rates: individualRates }],
  },
};
