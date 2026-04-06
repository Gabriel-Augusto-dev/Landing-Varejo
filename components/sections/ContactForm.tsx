"use client";

import { content } from "@/config/content";
import { getWhatsAppUrl } from "@/lib/utils";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { SectionHeader } from "@/ui/SectionHeader";

const quickActions = [
  {
    title: "Fazer pedido",
    description: "Envie sua lista e fale direto com a loja.",
    label: "Pedir agora",
    message: "Olá! Quero fazer um pedido no Emporio Sabor da Vila.",
  },
  {
    title: "Encomendar itens especiais",
    description: "Reserve carnes, cestas, padaria ou itens para eventos.",
    label: "Quero encomendar",
    message: "Olá! Quero fazer uma encomenda especial no Emporio Sabor da Vila.",
  },
  {
    title: "Consultar entrega",
    description: "Veja disponibilidade, região atendida e prazo do delivery local.",
    label: "Ver delivery",
    message: "Olá! Quero saber sobre entrega e delivery do Emporio Sabor da Vila.",
  },
];

const infoCards = [
  {
    title: "Atendimento rápido",
    text: "Resposta em horário comercial para pedidos, reservas e dúvidas.",
  },
  {
    title: "Retirada ou entrega",
    text: "Você escolhe a forma mais prática para receber sua compra.",
  },
  {
    title: "Atendimento da loja",
    text: "Contato direto com a equipe, sem formulário e sem complicação.",
  },
];

export function ContactForm() {
  return (
    <Section id="contato" background="dark" padding="lg">
      <Container size="lg">
        <SectionHeader
          badge="WhatsApp Direto"
          badgeIcon="📲"
          title="Fale com a nossa loja agora mesmo"
          subtitle="O foco aqui é simples: chamar no WhatsApp e resolver seu pedido com rapidez."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Atendimento direto pelo WhatsApp
              </h3>
              <p className="mt-3 text-slate-400">
                Chame para pedir produtos, reservar itens, consultar entrega ou fazer encomendas.
              </p>
            </div>

            <div className="grid gap-4">
              {quickActions.map((action) => (
                <a
                  key={action.title}
                  href={getWhatsAppUrl(action.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-700 bg-slate-800/60 p-5 transition-all hover:border-theme-primary hover:bg-slate-800"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-white">{action.title}</p>
                      <p className="mt-2 text-sm text-slate-400">{action.description}</p>
                    </div>
                    <span className="rounded-full bg-theme-primary/15 px-3 py-1 text-xs font-semibold text-theme-primary">
                      {action.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl gradient-primary px-6 py-4 text-base font-bold text-slate-950 transition-transform hover:scale-[1.01]"
            >
              {content.cta.button}
            </a>
          </div>

          <div className="space-y-4">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-700 bg-slate-900/50 p-5 sm:p-6"
              >
                <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.text}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-theme-primary/30 bg-theme-primary/10 p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-theme-primary">
                Loja
              </p>
              <p className="mt-3 text-xl font-bold text-white">{content.navbar.brand}</p>
              <p className="mt-2 text-sm text-slate-300">
                Mercado de bairro com foco em praticidade, frescor e atendimento próximo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
