// ========================================
// 📝 ARQUIVO DE CONFIGURAÇÃO DE CONTEÚDO
// ========================================
// EDITE ESTE ARQUIVO PARA ALTERAR TODOS OS TEXTOS DA PÁGINA
// Não precisa mexer em nenhum outro arquivo!

export const content = {
  // ========================================
  // 📱 WHATSAPP (IMPORTANTE!)
  // ========================================
  whatsapp: {
    number: "5511999999999",  // ⚠️ ALTERE PARA SEU NÚMERO (formato: 55 + DDD + número)
    message: "Olá! Vim através do site e gostaria de mais informações.",
  },

  // ========================================
  // 🔝 NAVBAR (Cabeçalho fixo)
  // ========================================
  navbar: {
    brand: "ClimaExpert",  // Nome da sua empresa
    logo: "/logos/sua-marca.svg",  // Caminho do logo em public/
    links: ["Serviços", "Benefícios", "Depoimentos", "Contato"],  // Links do menu
    ctaText: "Fale Conosco",  // Texto do botão
  },

  // ========================================
  // 🏆 AUTORIDADE (Por que confiar em você?)
  // ========================================
  authority: {
    title: "Por que somos referência no mercado?",
    subtitle: "Credibilidade construída com excelência e profissionalismo",
    badges: [
      {
        icon: "🏆",  // Pode usar emoji ou trocar por outro
        title: "Certificação ISO",
        description: "Padrão internacional de qualidade",
      },
      {
        icon: "⭐",
        title: "5.0 no Google",
        description: "+200 avaliações verificadas",
      },
      {
        icon: "🛡️",
        title: "Garantia Total",
        description: "12 meses em todos os serviços",
      },
      {
        icon: "👨‍🔧",
        title: "Técnicos Certificados",
        description: "Equipe treinada e qualificada",
      },
    ],
    partnersLabel: "Parceiros oficiais das melhores marcas",
    partners: ["LG", "Samsung", "Daikin", "Carrier", "Midea", "Gree"],  // Suas marcas
  },

  // ========================================
  // 🔧 SERVIÇOS (O que você faz)
  // ========================================
  services: {
    title: "Soluções Completas em Climatização",
    subtitle: "Tudo que você precisa em um só lugar",
    items: [
      {
        icon: "🔧",  // Ícone do serviço
        tag: "Mais Popular",  // Tag destacada
        title: "Instalação Profissional",
        description: "Instalação completa de ar condicionado residencial e comercial com garantia de qualidade.",
        features: [  // Lista de benefícios do serviço
          "Visita técnica gratuita",
          "Projeto personalizado",
          "Instalação em até 48h",
          "Garantia de 12 meses",
        ],
      },
      {
        icon: "🛠️",
        tag: "Manutenção",
        title: "Manutenção Preventiva",
        description: "Planos de manutenção para garantir o melhor desempenho e durabilidade do seu equipamento.",
        features: [
          "Limpeza completa",
          "Verificação de gás",
          "Teste de eficiência",
          "Relatório detalhado",
        ],
      },
      {
        icon: "🚨",
        tag: "Emergência",
        title: "Manutenção Corretiva",
        description: "Atendimento rápido para resolver qualquer problema no seu ar condicionado.",
        features: [
          "Atendimento em 24h",
          "Diagnóstico preciso",
          "Peças originais",
          "Orçamento sem custo",
        ],
      },
      // ADICIONE MAIS SERVIÇOS AQUI (copie o bloco acima)
    ],
  },

  // ========================================
  // ✨ BENEFÍCIOS (O que o cliente ganha)
  // ========================================
  benefits: {
    title: "O que você ganha com nossos serviços",
    subtitle: "Resultados reais que transformam seu ambiente e sua vida",
    items: [
      {
        icon: "💰",
        tag: "Economia",
        title: "Reduza até 40% na conta de luz",
        description: "Equipamentos modernos e eficientes que economizam energia sem perder desempenho.",
        highlight: "40%",  // Número grande
        metric: "de economia",  // Texto pequeno ao lado
      },
      {
        icon: "❄️",
        tag: "Conforto",
        title: "Ambiente perfeito o ano todo",
        description: "Temperatura ideal em qualquer estação. Controle total do clima.",
        highlight: "24/7",
        metric: "sempre confortável",
      },
      {
        icon: "💚",
        tag: "Saúde",
        title: "Ar mais puro e saudável",
        description: "Filtros avançados que eliminam 99% das impurezas, bactérias e alérgenos.",
        highlight: "99%",
        metric: "ar purificado",
      },
      // ADICIONE MAIS BENEFÍCIOS AQUI
    ],
  },

  // ========================================
  // 🔄 PROCESSO (Como funciona)
  // ========================================
  process: {
    title: "Como Funciona Nosso Atendimento",
    subtitle: "Processo simples, rápido e totalmente transparente",
    steps: [
      {
        title: "Entre em Contato",
        description: "Fale conosco pelo WhatsApp e conte suas necessidades. Respondemos em minutos.",
      },
      {
        title: "Avaliação no Local",
        description: "Técnico especializado vai até você e apresenta as melhores soluções.",
      },
      {
        title: "Orçamento Transparente",
        description: "Receba proposta detalhada com valores e prazos sem surpresas.",
      },
      {
        title: "Aprovação e Agendamento",
        description: "Aprovou? Agendamos para o melhor dia e horário para você.",
      },
      {
        title: "Execução Profissional",
        description: "Equipe realiza o serviço com rapidez, limpeza e normas técnicas.",
      },
    ],
  },

  // ========================================
  // 🎯 HERO (Primeira seção - Principal)
  // ========================================
  hero: {
    title: "Transforme seu ambiente com excelência",
    subtitle: "Soluções profissionais em climatização com qualidade garantida",
    description: "Especialistas em instalação, manutenção e vendas de sistemas de ar condicionado",
    cta: "Solicitar Orçamento Gratuito",
    ctaSecondary: "Falar no WhatsApp",
  },

  // ========================================
  // ⭐ DEPOIMENTOS (Prova social)
  // ========================================
  testimonials: {
    title: "O que dizem nossos clientes",
    subtitle: "Depoimentos reais de quem confia no nosso trabalho",
    items: [
      {
        name: "João Silva",
        role: "Empresário",
        text: "Excelente serviço! A instalação foi rápida e o atendimento impecável. Super recomendo!",
        rating: 5,
      },
      {
        name: "Maria Santos",
        role: "Arquiteta",
        text: "Profissionais muito competentes. Meu ar condicionado está funcionando perfeitamente.",
        rating: 5,
      },
      {
        name: "Carlos Oliveira",
        role: "Gerente de TI",
        text: "Melhor custo-benefício da região. Equipe pontual e trabalho de qualidade.",
        rating: 5,
      },
      // ADICIONE MAIS DEPOIMENTOS AQUI
    ],
  },

  // ========================================
  // ❓ FAQ (Perguntas frequentes)
  // ========================================
  faq: {
    title: "Perguntas frequentes",
    subtitle: "Tire suas dúvidas sobre nossos serviços",
    items: [
      {
        question: "Qual o prazo para instalação?",
        answer: "A instalação é realizada em até 48 horas após a aprovação do orçamento.",
      },
      {
        question: "Vocês oferecem garantia?",
        answer: "Sim! Todos os nossos serviços possuem garantia de 12 meses para mão de obra.",
      },
      {
        question: "Fazem manutenção preventiva?",
        answer: "Sim, oferecemos planos de manutenção preventiva personalizados.",
      },
      {
        question: "Atendem em quais regiões?",
        answer: "Atendemos toda a região metropolitana. Entre em contato para confirmar.",
      },
      {
        question: "Como funciona o orçamento?",
        answer: "O orçamento é gratuito e sem compromisso. Enviamos um técnico ao local.",
      },
      // ADICIONE MAIS PERGUNTAS AQUI
    ],
  },

  // ========================================
  // 📣 CTA (Chamada para ação)
  // ========================================
  cta: {
    title: "Pronto para ter o melhor sistema de climatização?",
    subtitle: "Entre em contato agora e receba um orçamento personalizado",
    button: "Falar com Especialista",
    buttonSecondary: "Solicitar Orçamento",
  },

  // ========================================
  // 📄 FOOTER (Rodapé)
  // ========================================
  footer: {
    tagline: "Excelência em climatização desde 2010",
    sections: [
      {
        title: "Serviços",
        links: ["Instalação", "Manutenção", "Limpeza", "Vendas"],
      },
      {
        title: "Empresa",
        links: ["Sobre Nós", "Certificações", "Áreas de Atuação"],
      },
      {
        title: "Contato",
        links: ["WhatsApp", "Email", "Endereço"],
      },
    ],
    copyright: "© 2024 - Todos os direitos reservados",
    whatsappLabel: "Atendimento via WhatsApp",
  },
};
