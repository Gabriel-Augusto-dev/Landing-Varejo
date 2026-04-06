import { theme } from "./theme";

type AnimatedBackgroundOrb = {
  position: string;
  size: string;
  blur: string;
  color: string;
  opacity: number;
  parallax: number;
  animation?: boolean;
};

type AnimatedBackgroundConfig = {
  enabled: boolean;
  orbs: AnimatedBackgroundOrb[];
  backgroundGradient: string;
  backgroundOpacity: number;
  mouseParallax: boolean;
};

export const content = {
  animatedBackground: {
    enabled: false,
    orbs: [] as AnimatedBackgroundOrb[],
    backgroundGradient: theme.animatedBackground.backgroundGradient,
    backgroundOpacity: 1,
    mouseParallax: false,
  } satisfies AnimatedBackgroundConfig,

  navbar: {
    brand: "Emporio Sabor da Vila",
    links: ["Setores", "Diferenciais", "Avaliações", "Contato"],
    ctaText: "Pedir no WhatsApp",
  },

  whatsapp: {
    number: "5511999999999",
    message: "Olá! Quero fazer um pedido no Emporio Sabor da Vila.",
  },

  authority: {
    title: "Mais do que mercado, um lugar para comprar bem todos os dias",
    subtitle:
      "Selecionamos produtos com cuidado, mantemos frescor diário e oferecemos um atendimento próximo para deixar sua rotina mais prática.",
    featuredMedia: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=900&fit=crop&q=80",
      alt: "Interior de um mercado organizado com produtos frescos e atendimento acolhedor",
      title: "Qualidade, cuidado e praticidade em um so lugar",
    },
    badges: [
      {
        icon: "🥬",
        title: "Frescor diario",
        description: "hortifruti selecionado todos os dias para sua casa e sua rotina",
      },
      {
        icon: "🥖",
        title: "Producao artesanal",
        description: "padaria e rotisseria com sabor de feito na hora e cara de comida de verdade",
      },
      {
        icon: "🚚",
        title: "Pedido facil",
        description: "atendimento rapido pelo WhatsApp para encomendas, reservas e delivery local",
      },
      {
        icon: "❤️",
        title: "Atendimento de bairro",
        description: "uma equipe que conhece os clientes pelo nome e ajuda a encontrar o que voce precisa",
      },
    ],
    partnersLabel: "O que voce encontra por aqui",
    partners: ["Hortifruti", "Padaria", "Acougue", "Adega", "Mercearia", "Rotisseria"],
  },

  services: {
    title: "Setores pensados para facilitar sua rotina com qualidade de verdade",
    subtitle:
      "Tudo o que voce precisa em um unico estabelecimento, com curadoria, produtos frescos e atendimento rapido para compras do dia a dia ou encomendas especiais.",
    gallery: {
      title: "Um mercado acolhedor, completo e preparado para atender bem",
      items: [
        {
          type: "image" as const,
          src: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=700&h=700&fit=crop&q=80",
          alt: "Setor de frutas e verduras organizado",
          title: "Hortifruti fresco todos os dias",
        },
        {
          type: "image" as const,
          src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&h=700&fit=crop&q=80",
          alt: "Padaria com paes artesanais recem assados",
          title: "Padaria com fornadas ao longo do dia",
        },
        {
          type: "image" as const,
          src: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=700&h=700&fit=crop&q=80",
          alt: "Balcao de cortes especiais e carnes",
          title: "Carnes selecionadas e cortes especiais",
        },
        {
          type: "image" as const,
          src: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=700&h=700&fit=crop&q=80",
          alt: "Cestas e itens gourmet para presente",
          title: "Cestas, presentes e encomendas especiais",
        },
      ],
    },
    items: [
      {
        icon: "🥗",
        tag: "Frescos",
        title: "Hortifruti Selecionado",
        description:
          "Frutas, legumes e verduras escolhidos com cuidado para garantir qualidade, sabor e boa apresentacao.",
        features: [
          "Reposicao diaria",
          "Produtos frescos e sazonais",
          "Opcoes para a semana toda",
          "Selecao visual rigorosa",
        ],
      },
      {
        icon: "🥖",
        tag: "Padaria",
        title: "Padaria e Confeitaria",
        description:
          "Paes, bolos, doces e itens para cafe da manha produzidos com sabor caseiro e alta rotatividade.",
        features: [
          "Paes recem assados",
          "Doces e sobremesas",
          "Itens para cafe especial",
          "Encomendas para eventos",
        ],
      },
      {
        icon: "🥩",
        tag: "Acougue",
        title: "Acougue e Proteinas",
        description:
          "Carnes frescas, aves, suinos e cortes especiais para o dia a dia, churrasco ou ocasioes especiais.",
        features: [
          "Cortes selecionados",
          "Atendimento no balcao",
          "Sugestoes para preparo",
          "Reservas e encomendas",
        ],
      },
      {
        icon: "🧀",
        tag: "Emporio",
        title: "Mercearia e Itens Especiais",
        description:
          "Uma curadoria equilibrada entre itens do dia a dia, gourmet, importados e produtos para montar a despensa completa.",
        features: [
          "Massas, molhos e conservas",
          "Queijos e frios especiais",
          "Adega e bebidas",
          "Produtos premium e presentes",
        ],
      },
      {
        icon: "🍲",
        tag: "Praticidade",
        title: "Rotisseria e Prontos para Levar",
        description:
          "Opcoes praticas para almoco, jantar e refeicoes rapidas com cara de comida feita em casa.",
        features: [
          "Refeicoes prontas",
          "Acompanhamentos variados",
          "Opcoes para a correria do dia",
          "Menu com rotacao constante",
        ],
      },
      {
        icon: "📲",
        tag: "Facilidade",
        title: "Pedidos, Encomendas e Delivery",
        description:
          "Atendimento direto para separar compras, montar cestas, reservar produtos e agilizar sua rotina.",
        features: [
          "Pedidos pelo WhatsApp",
          "Encomendas especiais",
          "Retirada na loja",
          "Entrega local rapida",
        ],
      },
    ],
  },

  stats: {
    items: [
      { number: "15 anos", label: "de historia", description: "atendendo o bairro com qualidade e proximidade" },
      { number: "1.200+", label: "itens", description: "selecionados entre basicos, especiais e produtos frescos" },
      { number: "4.9/5", label: "avaliacao", description: "em atendimento, variedade e qualidade dos produtos" },
      { number: "45 min", label: "entrega local", description: "para pedidos confirmados na regiao de atendimento" },
    ],
  },

  process: {
    title: "Como funciona seu pedido com a nossa loja",
    subtitle:
      "Um atendimento simples, rapido e humano para voce comprar com tranquilidade, retirar ou receber em casa.",
    steps: [
      {
        title: "Escolha o que voce precisa",
        description:
          "Passe na loja ou envie sua lista pelo WhatsApp com os itens, quantidades e preferencias de compra.",
      },
      {
        title: "Falamos com voce rapidinho",
        description:
          "Nossa equipe confirma disponibilidade, sugere substituicoes quando necessario e organiza tudo com agilidade.",
      },
      {
        title: "Separamos com cuidado",
        description:
          "Selecionamos os produtos com o mesmo criterio de quem compra para a propria casa, priorizando frescor e qualidade.",
      },
      {
        title: "Pagamento simples",
        description:
          "Combinamos a melhor forma de pagamento e deixamos tudo alinhado para retirada ou entrega.",
      },
      {
        title: "Retire ou receba",
        description:
          "Voce escolhe se prefere buscar na loja ou receber em casa dentro da nossa area de atendimento.",
      },
      {
        title: "Volte sempre",
        description:
          "Mantemos um atendimento proximo para suas compras da semana, encomendas especiais e datas comemorativas.",
      },
    ],
  },

  hero: {
    badge: "Mercado de bairro com cuidado, frescor e atendimento proximo",
    title: "Seu varejo alimenticio de confianca para comprar bem todos os dias",
    subtitle:
      "Hortifruti, padaria, acougue, mercearia especial e pedidos pelo WhatsApp em um unico estabelecimento.",
    description:
      "No Emporio Sabor da Vila voce encontra qualidade de verdade, selecao cuidadosa e praticidade para a rotina da casa, do cafe da manha ao jantar especial.",
    cta: "Fazer pedido agora",
    ctaSecondary: "Conhecer setores",
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=900&fit=crop&q=80",
      alt: "Mercado alimenticio moderno com produtos frescos e ambiente acolhedor",
    },
  },

  features: {
    title: "Por que os clientes escolhem o Emporio Sabor da Vila",
    subtitle: "Um estabelecimento unico, completo e feito para unir praticidade com qualidade em cada compra.",
    items: [
      {
        title: "Produtos sempre bem escolhidos",
        description: "A selecao da loja prioriza frescor, apresentacao e qualidade para a compra do dia a dia.",
      },
      {
        title: "Atendimento que realmente ajuda",
        description: "Nossa equipe orienta, separa pedidos e facilita encomendas com atencao de verdade.",
      },
      {
        title: "Variedade em um so lugar",
        description: "Voce resolve a compra completa da semana sem precisar passar por varios lugares.",
      },
      {
        title: "Padaria e rotisseria com giro alto",
        description: "Itens preparados com frequencia para manter sabor, textura e aparencia sempre convidativos.",
      },
      {
        title: "Comodidade no WhatsApp",
        description: "Voce pode pedir, reservar e tirar duvidas sem complicacao e com resposta rapida.",
      },
      {
        title: "Experiencia acolhedora",
        description: "Uma loja com cara de bairro, organizada, limpa e preparada para receber bem todos os perfis de cliente.",
      },
    ],
  },

  benefits: {
    title: "Tudo o que faz a compra ficar mais gostosa, pratica e confiavel",
    subtitle:
      "Mais do que abastecer a despensa, queremos facilitar sua rotina e deixar a experiencia de compra sempre boa do comeco ao fim.",
    featuredImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop&q=80",
    items: [
      {
        icon: "🌿",
        tag: "Frescor",
        title: "Produtos com melhor qualidade na sua mesa",
        description: "Voce leva para casa frutas, verduras, paes e itens frescos escolhidos com mais criterio.",
        highlight: "Diario",
        metric: "reposicao constante nas categorias frescas",
      },
      {
        icon: "⏱️",
        tag: "Praticidade",
        title: "Compra resolvida com menos tempo",
        description: "Com setores completos e pedido por mensagem, sua rotina fica muito mais leve.",
        highlight: "1 lugar",
        metric: "para resolver compras do dia a dia e ocasioes especiais",
      },
      {
        icon: "💬",
        tag: "Atendimento",
        title: "Atendimento que conhece voce",
        description: "Indicamos cortes, sugerimos produtos e ajudamos a montar compras e encomendas com proximidade.",
        highlight: "Humano",
        metric: "contato direto e facil com a loja",
      },
      {
        icon: "🍝",
        tag: "Variedade",
        title: "Mais opcoes para o seu dia",
        description: "Do basico ao especial, a loja combina despensa, cafe da manha, refeicoes prontas e presentes.",
        highlight: "Completo",
        metric: "mix pensado para varias necessidades",
      },
      {
        icon: "🎁",
        tag: "Encomendas",
        title: "Facilidade para datas especiais",
        description: "Montamos cestas, separamos itens e organizamos encomendas para presentear ou receber em casa.",
        highlight: "Sob medida",
        metric: "para ocasioes especiais e pedidos planejados",
      },
      {
        icon: "🏡",
        tag: "Bairro",
        title: "A praticidade de ter tudo perto",
        description: "Voce conta com uma loja de confianca na regiao, pronta para atender bem em qualquer dia da semana.",
        highlight: "Pertinho",
        metric: "da sua rotina e com atendimento local",
      },
    ],
  },

  testimonials: {
    title: "Quem compra aqui percebe a diferenca",
    subtitle:
      "Depoimentos de clientes que valorizam qualidade, praticidade e um atendimento atencioso no dia a dia.",
    items: [
      {
        name: "Marina Costa",
        role: "Cliente do bairro",
        text: "O hortifruti sempre me surpreende pela qualidade e o atendimento no WhatsApp ajuda muito quando a semana fica corrida.",
        rating: 5,
      },
      {
        name: "Rafael Nogueira",
        role: "Morador da regiao",
        text: "Virou meu mercado de confianca. Consigo resolver compra da semana, pegar pao fresco e ainda fazer encomenda para o churrasco.",
        rating: 5,
      },
      {
        name: "Patricia Almeida",
        role: "Cliente frequente",
        text: "Gosto muito do cuidado com os produtos e da variedade. A loja e organizada, bonita e sempre encontro algo especial para levar.",
        rating: 5,
      },
      {
        name: "Eduardo Matos",
        role: "Cliente de delivery local",
        text: "Quando peco pelo WhatsApp, vem tudo bem separado e fresquinho. E muito pratico para quem trabalha o dia inteiro.",
        rating: 5,
      },
      {
        name: "Camila Rezende",
        role: "Vizinha e cliente da padaria",
        text: "Os paes e doces sao excelentes, mas o que mais me fideliza e a atencao da equipe. Sempre me atendem super bem.",
        rating: 5,
      },
      {
        name: "Thiago Barros",
        role: "Cliente de encomendas",
        text: "Ja pedi cesta, frios e itens para receber amigos em casa. Foi tudo separado com capricho e muita facilidade no atendimento.",
        rating: 5,
      },
    ],
  },

  faq: {
    title: "Perguntas frequentes",
    subtitle: "As duvidas mais comuns de quem compra na loja, faz pedido pelo WhatsApp ou quer encomendar itens especiais.",
    items: [
      {
        question: "Voces fazem entrega?",
        answer:
          "Sim. Atendemos uma area local com delivery rapido para pedidos confirmados durante o horario de funcionamento da loja.",
      },
      {
        question: "Posso fazer pedido pelo WhatsApp?",
        answer:
          "Sim. Voce pode enviar sua lista, pedir informacoes sobre disponibilidade, reservar itens e combinar retirada ou entrega.",
      },
      {
        question: "Voces aceitam encomendas para datas especiais?",
        answer:
          "Aceitamos sim. Montamos cestas, separamos frios, padaria, carnes e outros itens para eventos, presentes e reunioes em familia.",
      },
      {
        question: "Quais formas de pagamento voces aceitam?",
        answer:
          "Trabalhamos com as principais formas de pagamento. No atendimento pelo WhatsApp informamos as opcoes disponiveis para retirada ou entrega.",
      },
      {
        question: "A loja tem produtos para o dia a dia e itens mais especiais?",
        answer:
          "Sim. Nosso mix foi pensado justamente para equilibrar praticidade da rotina com produtos diferenciados para momentos especiais.",
      },
      {
        question: "Como faco para falar com a loja?",
        answer:
          "Voce pode usar qualquer botao de WhatsApp da pagina e falar direto com a nossa equipe para pedir, reservar ou tirar duvidas.",
      },
    ],
  },

  cta: {
    title: "Faca sua compra com mais praticidade e o cuidado de uma loja de confianca",
    subtitle:
      "Chame no WhatsApp para pedir, encomendar ou tirar uma duvida sobre produtos, entregas e disponibilidade.",
    button: "Pedir pelo WhatsApp",
    buttonSecondary: "Enviar mensagem",
    note: "Atendimento em horario comercial | Retirada na loja e entrega local sob consulta",
  },

  footer: {
    tagline: "Um mercado de bairro completo, com produtos frescos, atendimento proximo e praticidade para a sua rotina.",
    sections: [
      {
        title: "Setores",
        links: [
          "Hortifruti Selecionado",
          "Padaria e Confeitaria",
          "Acougue e Proteinas",
          "Mercearia e Itens Especiais",
        ],
      },
      {
        title: "Facilidades",
        links: [
          "Rotisseria",
          "Pedidos pelo WhatsApp",
          "Encomendas",
          "Entrega Local",
        ],
      },
      {
        title: "Contato",
        links: [
          "Fazer Pedido",
          "Falar com a Loja",
          "Retirada e Delivery",
        ],
      },
    ],
    copyright: "© 2026 Emporio Sabor da Vila - Todos os direitos reservados.",
    whatsappLabel: "Fale com a nossa equipe pelo WhatsApp",
  },
};
