import { theme } from "./theme";

export const content = {
  // 🎨 Configuração dos Fundos Animados
  animatedBackground: {
    enabled: false,  // Desabilitado completamente
    orbs: [],
    backgroundGradient: theme.animatedBackground.backgroundGradient,
    backgroundOpacity: 1,
    mouseParallax: false,
  },

  navbar: {
  brand: "AutoCenter Pro",
  links: ["Serviços", "Especialidade", "Clientes", "Contato"],
  ctaText: "Agendar Revisão",
},

whatsapp: {
  number: "5511999999999",
  message: "Olá! Gostaria de agendar uma revisão ou manutenção do meu veículo.",
},

authority: {
  title: "Por que escolher AutoCenter Pro?",
  subtitle: "Qualidade, confiabilidade e cuidado excepcional para seu veículo",
  featuredMedia: {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200&h=800&fit=crop&q=80",
    alt: "Mecânico profissional da AutoCenter",
    title: "Profissionais especializados e certificados",
  },
  badges: [
    {
      icon: "🔧",
      title: "20 Anos",
      description: "de experiência em manutenção automotiva de qualidade",
    },
    {
      icon: "⭐",
      title: "4.9 de 5.0",
      description: "+2000 veículos atendidos com excelência",
    },
    {
      icon: "🛡️",
      title: "Certificado",
      description: "Autorizado e certificado pelas principais marcas",
    },
    {
      icon: "🏆",
      title: "Garantia",
      description: "Todos os serviços com garantia de 12 meses",
    },
  ],
  partnersLabel: "Parceiros e marcas que confiamos",
  partners: ["Chevrolet", "Ford", "Volkswagen", "Fiat", "Toyota", "Hyundai"],
},


  services: {
  title: "Nossos Serviços Automotivos",
  subtitle: "Manutenção, revisão e reparos com excelência",
  gallery: {
    title: "Trabalhos realizados",
    items: [
      {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=600&fit=crop&q=80",
        alt: "Manutenção de motor",
        title: "Manutenção de Motor",
      },
      {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=600&fit=crop&q=80",
        alt: "Reparo de freios",
        title: "Sistema de Freios",
      },
      {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&h=600&fit=crop&q=80",
        alt: "Suspensão e pneus",
        title: "Suspensão e Pneus",
      },
    ],
  },
  items: [
    {
      icon: "🔧",
      tag: "Popular",
      title: "Revisão Completa",
      description: "Checklist completo de manutenção preventiva para seu veículo.",
      features: [
        "Troca de óleo e filtros",
        "Verificação de fluidos",
        "Inspeção de freios",
        "Relatório detalhado",
      ],
    },
    {
      icon: "⚙️",
      tag: "Motor",
      title: "Reparo de Motor",
      description: "Conserto e restauração do motor com peças originais.",
      features: [
        "Diagnóstico eletrônico",
        "Peças originais garantidas",
        "Mão de obra especializada",
        "Garantia de 12 meses",
      ],
    },
    {
      icon: "🛑",
      tag: "Segurança",
      title: "Sistema de Freios",
      description: "Manutenção e reparação do sistema de freios.",
      features: [
        "Pastilhas e discos",
        "Fluído de freio",
        "Cilindro mestre",
        "Teste de segurança",
      ],
    },
    {
      icon: "🛞",
      tag: "Pneus",
      title: "Pneus e Rodas",
      description: "Balanceamento, alinhamento e troca de pneus.",
      features: [
        "Balanceamento dinâmico",
        "Alinhamento computadorizado",
        "Troca de pneus",
        "Borracharia completa",
      ],
    },
    {
      icon: "🔋",
      tag: "Elétrico",
      title: "Sistema Elétrico",
      description: "Reparo de bateria, alternador e sistema elétrico.",
      features: [
        "Diagnóstico elétrico",
        "Troca de bateria",
        "Alternador revisado",
        "Fiação e conectores",
      ],
    },
    {
      icon: "🏠",
      tag: "Serviço",
      title: "Atendimento Domiciliar",
      description: "Pequenos reparos e manutenção em sua casa ou no local de trabalho.",
      features: [
        "Assistência rápida",
        "Equipamento móvel",
        "Orçamento no local",
        "Atendimento ágil",
      ],
    },
  ],
  },

  stats: {
    items: [
      { number: "20+", label: "Anos", description: "de experiência no mercado automotivo" },
      { number: "2.000+", label: "Veículos", description: "atendidos com qualidade" },
      { number: "98%", label: "Satisfação", description: "dos clientes garantida" },
      { number: "12h", label: "Revisão", description: "media completa de um carro" },
    ],
  },

  process: {
    title: "Como Funciona o Atendimento",
    subtitle: "Processo organizado, transparente e eficiente",
    steps: [
      {
        title: "Agendamento",
        description: "Agende sua revisão pelo WhatsApp ou telefone. Horários flexíveis incluindo sábados.",
      },
      {
        title: "Inspeção Visual",
        description: "Nossos mecânicos fazem uma inspeção completa de seu veículo.",
      },
      {
        title: "Diagnóstico",
        description: "Executamos testes e diagnósticos para identificar qualquer problema.",
      },
      {
        title: "Orçamento",
        description: "Você recebe um orçamento claro e transparente antes de qualquer reparo.",
      },
      {
        title: "Execução",
        description: "Com sua aprovação, iniciamos o serviço com profissionalismo total.",
      },
      {
        title: "Entrega",
        description: "Seu veículo entregue em perfeito estado de funcionamento com nota fiscal.",
      },
    ],
  },

  hero: {
    badge: "AutoCenter Pro - Qualidade Garantida",
    title: "Seu Veículo em Mãos Especialistas",
    subtitle: "Manutenção completa, reparos confiáveis e atendimento de primeira qualidade",
    description: "Centro automotivo de excelência com mais de 20 anos de experiência. Manutenção preventiva, reparos especializados e serviços completos para todos os modelos.",
    cta: "Agendar Revisão",
    ctaSecondary: "Falar no WhatsApp",
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=800&fit=crop&q=80",
      alt: "Mecânico especializado trabalhando",
    },
  },

  features: {
    title: "Por que escolher AutoCenter Pro?",
    subtitle: "Qualidade, experiência e compromisso com seus resultados",
    items: [
      {
        title: "Mecânicos Certificados",
        description: "Profissionais com certificações oficiais das marcas automotivas principais",
      },
      {
        title: "Diagnóstico Computadorizado",
        description: "Equipamentos de diagnóstico de última geração para máxima precisão",
      },
      {
        title: "Serviço Rápido",
        description: "Agilidade no atendimento sem comprometer a qualidade dos trabalhos",
      },
      {
        title: "Garantia Completa",
        description: "Todos os serviços com garantia de 12 meses contra defeitos",
      },
      {
        title: "Peças Originais",
        description: "Utilizamos exclusivamente peças originais das melhores marcas",
      },
      {
        title: "Preço Justo",
        description: "Orçamentos honestos, sem surpresas e com excelente custo-benefício",
      },
    ],
  },

  benefits: {
    title: "O que você ganha ao confiar em nós",
    subtitle: "Resultados reais que fazem diferença na vida do seu veículo",
    featuredImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop&q=80",
    items: [
      {
        icon: "⚡",
        tag: "Performance",
        title: "Veículo mais rápido",
        description: "Otimização completa do motor para máxima performance e eficiência.",
        highlight: "+25%",
        metric: "mais rápido",
      },
      {
        icon: "💰",
        tag: "Economia",
        title: "Economize combustível",
        description: "Manutenção preventiva reduz consumo e evita gastos inesperados.",
        highlight: "-20%",
        metric: "consumo",
      },
      {
        icon: "🛡️",
        tag: "Segurança",
        title: "Máxima Segurança",
        description: "Sistema de freios, direção e suspensão otimizados para sua proteção.",
        highlight: "100%",
        metric: "segurança",
      },
      {
        icon: "🕐",
        tag: "Durabilidade",
        title: "Vida Útil Estendida",
        description: "Manutenção preventiva estende a vida do seu veículo em anos.",
        highlight: "+5",
        metric: "anos",
      },
      {
        icon: "🎯",
        tag: "Confiança",
        title: "Garantia Total",
        description: "Todos os reparos com garantia de 12 meses e suporte completo.",
        highlight: "12",
        metric: "meses",
      },
      {
        icon: "🏆",
        tag: "Qualidade",
        title: "Valor de Revenda",
        description: "Manutenção completa preserva o valor de seu veículo no mercado.",
        highlight: "+15%",
        metric: "valor",
      },
    ],
  },

  testimonials: {
    title: "O que dizem nossos clientes",
    subtitle: "Experiências reais de quem confia na AutoCenter Pro",
    items: [
      {
        name: "Carlos Mendes",
        role: "Empresário",
        text: "Levo meu carro na AutoCenter há 5 anos. Atendimento impecável, profissionalismo de ponta e preço justo. Recomendo a todos os meus amigos!",
        rating: 5,
      },
      {
        name: "Juliana Silva",
        role: "Advogada",
        text: "Estava preocupada com o barulho estranho do motor. Fizeram diagnóstico rápido e resolveram perfeitamente. Muito atencioso com o carro!",
        rating: 5,
      },
      {
        name: "Ricardo Santos",
        role: "Professor",
        text: "Agora faço manutenção preventiva regular aqui. O atendimento é excelente, explicam tudo e cobram justo. Virei cliente para a vida toda.",
        rating: 5,
      },
    ],
  },

  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Tire suas dúvidas sobre nossos serviços automotivos",
    items: [
      {
        question: "Com qual frequência devo fazer revisão?",
        answer: "Recomendamos revisão a cada 10.000 km ou a cada 6 meses, o que ocorrer primeiro. Verifique o manual do seu veículo.",
      },
      {
        question: "Os reparos têm garantia?",
        answer: "Sim! Todos os serviços realizados possuem garantia de 12 meses contra defeitos de execução.",
      },
      {
        question: "Vocês usam peças originais?",
        answer: "Sim. Utilizamos exclusivamente peças originais das marcas automotivas e confiáveis. Qualidade garantida.",
      },
      {
        question: "Vocês fazem atendimento em domicílio?",
        answer: "Sim. Para pequenos reparos e diagnósticos. Consulte-nos sobre a possibilidade e valores de deslocamento.",
      },
      {
        question: "Como funciona o orçamento?",
        answer: "Fazemos diagnóstico completo, apresentamos orçamento claro com todos os itens. Você aprova antes de iniciarmos.",
      },
    ],
  },

  cta: {
    title: "Seu Veículo Merece Cuidado Profissional",
    subtitle: "Agende agora sua revisão e receba atendimento de qualidade de profissionais especializados",
    button: "Agendar Revisão",
    buttonSecondary: "Orçamento Grátis",
    note: "⏱️ Resposta em até 15 minutos | Atendimento personalizado",
  },

  footer: {
    tagline: "Excelência em manutenção automotiva desde 2004",
    sections: [
      {
        title: "Serviços",
        links: [
          "Revisão Completa",
          "Reparo de Motor",
          "Sistema de Freios",
          "Pneus e Rodas",
        ],
      },
      {
        title: "Empresa",
        links: [
          "Sobre Nós",
          "Nossa Equipe",
          "Certificações",
        ],
      },
      {
        title: "Contato",
        links: [
          "WhatsApp",
          "Telefone",
          "Endereço",
        ],
      },
    ],
    copyright: "© 2024 AutoCenter Pro - Todos os direitos reservados",
    whatsappLabel: "Agendamento e suporte via WhatsApp",
  },
};
