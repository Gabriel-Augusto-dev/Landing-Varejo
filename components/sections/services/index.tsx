"use client";

import { content } from "@/config/content";
import { getWhatsAppUrl } from "@/lib/utils";
import { useState } from "react";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { SectionHeader } from "@/ui/SectionHeader";
import { Grid } from "@/ui/Grid";
import { Card } from "@/ui/Card";
import { Button } from "@/ui/Button";
import { CheckIcon, ArrowRightIcon, WhatsAppIcon, ChevronDownIcon } from "@/ui/Icons";

export {
  ServicesGridGallery,
  ServicesListImage,
  ServicesTabs,
  ServicesCarousel,
  ServicesAccordion as ServicesAccordionNew,
  ServicesTwoCol,
  ServicesMinimal,
  ServicesMasonry,
  ServicesFeatured,
  ServicesPricing,
} from "./ServicesLayouts";

// Layout 1: Cards Interativos (atual - mais moderno e visual)
export function ServicesCards() {
  const [activeService, setActiveService] = useState(0);

  return (
    <Section id="servicos" background="gradient" padding="lg">
      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="O que fazemos por você"
          badgeIcon="●"
          title={content.services.title}
          subtitle={content.services.subtitle}
          align="center"
        />

        <Grid cols={{ default: 1, sm: 2, lg: 3 }} gap="lg">
          {content.services.items.map((service, index) => (
            <Card
              key={index}
              hover
              glow
              className="text-left"
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-linear-to-br from-green-400/10 to-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl lg:text-4xl">{service.icon}</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium">
                  {service.tag}
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-green-400 transition-colors pr-14 sm:pr-20">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-2 sm:pt-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                      <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold group/link mt-2 sm:mt-4 text-sm sm:text-base"
                >
                  <span>Solicitar orçamento</span>
                  <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </Grid>

        <div className="text-center mt-12 sm:mt-16">
          <Button
            variant="primary"
            size="lg"
            href={getWhatsAppUrl()}
            icon={<WhatsAppIcon />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Falar com Especialista Agora
          </Button>
        </div>
      </Container>
    </Section>
  );
}

// Layout 2: Accordion (lista expansível - profissional e compacto)
export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="servicos" background="dark" padding="lg">
      <Container size="lg" className="relative z-10">
        <SectionHeader
          badge="O que fazemos por você"
          badgeIcon="●"
          title={content.services.title}
          subtitle={content.services.subtitle}
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {content.services.items.map((service, index) => (
            <div key={index} className="border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900/30">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-linear-to-br from-green-400/20 to-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-xl sm:text-2xl lg:text-3xl">{service.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold truncate">{service.title}</h3>
                      <span className="inline-flex w-fit px-2 py-0.5 sm:py-1 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-xs font-medium shrink-0">
                        {service.tag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 sm:line-clamp-1">{service.description}</p>
                  </div>
                </div>
                <ChevronDownIcon className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-400 transition-transform shrink-0 ml-2 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-slate-800">
                  <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6 mb-4 sm:mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                        <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    size="sm"
                    href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${service.title}`)}
                    icon={<WhatsAppIcon />}
                    iconPosition="left"
                    className="w-full sm:w-auto"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Layout 3: Grid Simples (clean e corporativo)
export function ServicesGrid() {
  return (
    <Section id="servicos" background="dark" padding="lg">
      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Nossos Serviços"
          title={content.services.title}
          subtitle={content.services.subtitle}
          align="center"
        />

        <Grid cols={{ default: 1, sm: 2, lg: 3 }} gap="md" className="mb-8 sm:mb-12">
          {content.services.items.map((service, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 sm:p-6 hover:border-green-500/30 transition-all group">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-400/10 to-emerald-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-xl sm:text-2xl">{service.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-0.5 sm:py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded mb-1 sm:mb-2">
                    {service.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 line-clamp-2">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                {service.description}
              </p>

              <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {service.features.slice(0, 3).map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${service.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-xs sm:text-sm group/link"
              >
                <span>Saiba mais</span>
                <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </Grid>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            href={getWhatsAppUrl()}
            icon={<WhatsAppIcon />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Falar com Especialista
          </Button>
        </div>
      </Container>
    </Section>
  );
}
