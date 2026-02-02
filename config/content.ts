import { theme } from "./theme";

export const content = {
  // 🎨 Configuração dos Fundos Animados
  animatedBackground: {
    enabled: true,
    orbs: [
      {
        position: "top-1/4 left-1/4",
        size: "w-96 h-96",
        color: theme.animatedBackground.orb1Color,
        opacity: 0.35,  // Aumentado para mais visibilidade
        blur: "blur-2xl",  // Menos desfoque para mais nitidez
        parallax: 1,
        animation: true,
      },
      {
        position: "bottom-1/4 right-1/4",
        size: "w-96 h-96",
        color: theme.animatedBackground.orb2Color,
        opacity: 0.35,  // Aumentado para mais visibilidade
        blur: "blur-2xl",
        parallax: -1,
        animation: true,
      },
      {
        position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        size: "w-512 h-512",
        color: theme.animatedBackground.orbCenterGradient,
        opacity: 0.2,  // Aumentado
        blur: "blur-2xl",
        parallax: 0.5,
        animation: true,  // Agora também pulsa!
      },
    ],
    backgroundGradient: theme.animatedBackground.backgroundGradient,
    backgroundOpacity: 1,
    mouseParallax: true,
  },

  navbar: {
  brand: "TechFix Pro",
  links: ["Serviços", "Especialidade", "Clientes", "Contato"],
  ctaText: "Solicitar Atendimento",
},

whatsapp: {
  number: "5511999999999",
  message: "Olá! Gostaria de solicitar um atendimento técnico para meu computador.",
},

authority: {
  title: "Por que escolher TechFix Pro?",
  subtitle: "Experiência, rapidez e soluções eficientes para seus problemas tecnológicos",
  featuredMedia: {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=800&fit=crop",
    alt: "Equipe profissional TechFix",
    title: "Profissionais certificados e experientes",
  },
  badges: [
    {
      icon: "⚡",
      title: "Diagnóstico Rápido",
      description: "Identificamos o problema em minutos com tecnologia avançada",
    },
    {
      icon: "⭐",
      title: "4.9 de 5.0",
      description: "+500 clientes satisfeitos com nossos serviços",
    },
    {
      icon: "🔒",
      title: "Dados Seguros",
      description: "Proteção total de seus dados durante o atendimento",
    },
    {
      icon: "👨‍💻",
      title: "Técnicos Certificados",
      description: "Profissionais com certificação oficial e experiência comprovada",
    },
  ],
  partnersLabel: "Confiamos nas melhores marcas e softwares",
  partners: ["Microsoft", "Apple", "Intel", "ASUS", "Corsair", "Norton"],
},


  services: {
  title: "Soluções Completas para Seu Computador",
  subtitle: "Do diagnóstico à manutenção, resolvemos tudo",
  gallery: {
    title: "Veja nossos trabalhos",
    items: [
      {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop",
        alt: "Reparo de computador",
        title: "Reparo de Hardware",
      },
      {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&h=600&fit=crop",
        alt: "Limpeza de PC",
        title: "Limpeza e Manutenção",
      },
      {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop",
        alt: "Atendimento técnico",
        title: "Diagnóstico profissional",
      },
    ],
  },
  items: [
    {
      icon: "💻",
      tag: "Popular",
      title: "Diagnóstico Completo",
      description: "Avaliação profissional do seu computador para identificar todos os problemas.",
      features: [
        "Teste de hardware",
        "Verificação de software",
        "Análise de performance",
        "Relatório detalhado",
      ],
    },
    {
      icon: "⚡",
      tag: "Urgente",
      title: "Reparo de Hardware",
      description: "Conserto de componentes com peças originais e garantia.",
      features: [
        "Troca de peças danificadas",
        "Soldagem de circuitos",
        "Diagnóstico visual",
        "Garantia de 6 meses",
      ],
    },
    {
      icon: "🛡️",
      tag: "Segurança",
      title: "Limpeza e Desinfecção",
      description: "Remoção de vírus, malware e otimização completa do sistema.",
      features: [
        "Remoção de malware",
        "Limpeza de arquivos",
        "Otimização de performance",
        "Proteção contra pragas digitais",
      ],
    },
    {
      icon: "💾",
      tag: "Dados",
      title: "Recuperação de Dados",
      description: "Recuperação segura de arquivos perdidos ou inacessíveis.",
      features: [
        "Recuperação de HDD/SSD",
        "Reconstrução de partições",
        "Backup automático",
        "Sigilo garantido",
      ],
    },
    {
      icon: "🔄",
      tag: "Manutenção",
      title: "Upgrade e Expansão",
      description: "Potencialize seu equipamento com novos componentes e configurações.",
      features: [
        "Adição de RAM",
        "Troca de SSD",
        "Instalação de periféricos",
        "Consultoria gratuita",
      ],
    },
    {
      icon: "📲",
      tag: "Mobilidade",
      title: "Atendimento em Domicílio",
      description: "Viajamos até você para reparos e consultoria técnica no local.",
      features: [
        "Deslocamento incluído",
        "Equipamento profissional",
        "Agendamento flexível",
        "Atendimento de qualidade",
      ],
    },
  ],
  },

  stats: {
    items: [
      { number: "15+", label: "Anos", description: "de experiência em tecnologia" },
      { number: "5.000+", label: "Computadores", description: "reparados com sucesso" },
      { number: "99%", label: "Taxa", description: "de satisfação dos clientes" },
      { number: "24h", label: "Turnaround", description: "para maioria dos reparos" },
    ],
  },

  process: {
    title: "Como Funciona Nosso Atendimento",
    subtitle: "Processo simples, rápido e 100% transparente",
    steps: [
      {
        title: "Entre em Contato",
        description: "Fale conosco pelo WhatsApp e descreva o problema. Resposta rápida garantida.",
      },
      {
        title: "Diagnóstico",
        description: "Nossa equipe realiza um diagnóstico completo identificando a causa raiz do problema.",
      },
      {
        title: "Orçamento Claro",
        description: "Você recebe um orçamento transparente com valores e prazos estimados.",
      },
      {
        title: "Aprovação",
        description: "Após sua aprovação, iniciamos o reparo com toda profissionalismo.",
      },
      {
        title: "Entrega",
        description: "Seu computador testado, otimizado e pronto para trabalhar perfeitamente.",
      },
    ],
  },

  hero: {
    badge: "Conheça TechFix Pro",  // Texto do badge animado no topo
    title: "Seu Computador em Boas Mãos",
    subtitle: "Diagnóstico preciso, reparo rápido e suporte confiável",
    description: "Especialistas em manutenção, reparo e otimização de computadores. Temos a solução para seu problema.",
    cta: "Solicitar Atendimento",
    ctaSecondary: "Falar no WhatsApp",
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000",
      alt: "Técnico reparando computador",
    },
  },

  features: {
    title: "Por que escolher TechFix Pro?",
    subtitle: "Excelência técnica e atendimento humanizado",
    items: [
      {
        title: "Técnicos Certificados",
        description: "Profissionais com certificações oficiais e ampla experiência em tecnologia",
      },
      {
        title: "Diagnóstico Preciso",
        description: "Equipamentos e metodologia avançada para identificar problemas rapidamente",
      },
      {
        title: "Serviço Rápido",
        description: "Máxima agilidade no atendimento, sem comprometer a qualidade",
      },
      {
        title: "Garantia em Tudo",
        description: "Todos os serviços realizados com garantia e suporte pós-atendimento",
      },
      {
        title: "Peças Originais",
        description: "Utilizamos apenas peças de qualidade comprovada de marcas reconhecidas",
      },
      {
        title: "Preço Justo",
        description: "Orçamentos honestos, sem surpresas e com excelente custo-benefício",
      },
    ],
  },

  benefits: {
    title: "O que você ganha ao confiar em nós",
    subtitle: "Benefícios que fazem diferença no seu negócio e rotina",
    featuredImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop",
    items: [
      {
        icon: "⚡",
        tag: "Performance",
        title: "Computador mais rápido",
        description: "Otimização completa do sistema para máxima performance e velocidade.",
        highlight: "+300%",
        metric: "velocidade",
      },
      {
        icon: "💰",
        tag: "Economia",
        title: "Economize em reparos",
        description: "Manutenção preventiva evita problemas maiores e gastos inesperados.",
        highlight: "-70%",
        metric: "em gastos",
      },
      {
        icon: "🔒",
        tag: "Segurança",
        title: "Dados 100% protegidos",
        description: "Eliminamos vírus e malware, deixando seu computador seguro.",
        highlight: "100%",
        metric: "proteção",
      },
      {
        icon: "🕐",
        tag: "Rapidez",
        title: "Atendimento ágil",
        description: "Diagnóstico em horas e maioria dos reparos em 24 horas.",
        highlight: "24h",
        metric: "média",
      },
      {
        icon: "🎯",
        tag: "Confiança",
        title: "Garantia completa",
        description: "Todos os reparos com garantia de 6 meses e suporte gratuito.",
        highlight: "6",
        metric: "meses",
      },
      {
        icon: "💻",
        tag: "Produtividade",
        title: "Volta a funcionar",
        description: "Seu computador voltará a trabalhar como novo, ou melhor ainda.",
        highlight: "99%",
        metric: "uptime",
      },
    ],
  },

  testimonials: {
    title: "O que dizem nossos clientes",
    subtitle: "Depoimentos reais de quem confia na TechFix Pro",
    items: [
      {
        name: "Roberto Costa",
        role: "Empresário",
        text: "Levei meu notebook que travava demais. Fizeram o diagnóstico e resolveram tudo em menos de 24 horas. Muito profissional!",
        rating: 5,
      },
      {
        name: "Fernanda Lima",
        role: "Advogada",
        text: "Estava com medo de perder meus arquivos. A equipe recuperou tudo perfeitamente. Recomendo demais!",
        rating: 5,
      },
      {
        name: "Marcelo Santos",
        role: "Professor",
        text: "Melhor atendimento técnico que já tive. Explicam tudo, são honestos e o preço é justo. Virei cliente fixo.",
        rating: 5,
      },
    ],
  },

  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Tire suas dúvidas sobre nossos serviços técnicos",
    items: [
      {
        question: "Quanto tempo leva um reparo?",
        answer: "Depende do problema. Diagnóstico leva 1-2 horas. Maioria dos reparos fica pronto em 24 horas.",
      },
      {
        question: "Os reparos têm garantia?",
        answer: "Sim! Todos os serviços possuem garantia de 6 meses contra defeitos de execução.",
      },
      {
        question: "Meus dados estarão seguros?",
        answer: "Sim. Seus dados têm máxima proteção. Assinamos confidencialidade e não acessamos informações pessoais.",
      },
      {
        question: "Vocês fazem atendimento em casa?",
        answer: "Sim. Fazemos atendimento presencial na loja ou em domicílio com taxa de deslocamento.",
      },
      {
        question: "Como funciona o diagnóstico?",
        answer: "Avaliamos completo: hardware, software, performance. Depois passamos orçamento transparente.",
      },
    ],
  },

  cta: {
    title: "Seu Computador Precisa de Atenção?",
    subtitle: "Entre em contato agora e receba atendimento rápido de profissionais confiáveis",
    button: "Solicitar Atendimento",
    buttonSecondary: "Diagnóstico Gratuito",
    note: "⏱️ Resposta em até 10 minutos | Sem compromisso",
  },

  footer: {
    tagline: "Soluções técnicas que funcionam desde 2009",
    sections: [
      {
        title: "Serviços",
        links: [
          "Diagnóstico Completo",
          "Reparo de Hardware",
          "Remoção de Vírus",
          "Recuperação de Dados",
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
          "Email",
          "Endereço",
        ],
      },
    ],
    copyright: "© 2024 TechFix Pro - Todos os direitos reservados",
    whatsappLabel: "Atendimento técnico via WhatsApp",
  },
};
