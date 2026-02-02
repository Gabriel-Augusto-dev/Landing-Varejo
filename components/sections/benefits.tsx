"use client";

import { content } from "@/config/content";
import { getWhatsAppUrl } from "@/lib/utils";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { SectionHeader } from "@/ui/SectionHeader";
import { Grid } from "@/ui/Grid";
import { Card } from "@/ui/Card";
import { Button } from "@/ui/Button";

export function BenefitsCards() {
  return (
    <Section id="beneficios" background="gradient" padding="lg">
      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Benefícios Exclusivos"
          badgeIcon="✨"
          title={content.benefits.title}
          subtitle={content.benefits.subtitle}
          align="center"
        />

        <Grid cols={{ default: 1, sm: 2, lg: 3 }} gap="lg" className="mb-8 sm:mb-12 lg:mb-16">
          {content.benefits.items.map((benefit, index) => (
            <Card key={index} hover glow className="pt-8 sm:pt-10 lg:pt-12">
              <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-linear-to-r from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl shadow-lg shadow-green-500/50">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950">{benefit.icon}</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
                  {benefit.tag}
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{benefit.title}</h3>
                
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{benefit.description}</p>

                <div className="pt-2 sm:pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                      {benefit.highlight}
                    </span>
                    <span className="text-slate-500 text-xs sm:text-sm">{benefit.metric}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Grid>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            href={getWhatsAppUrl()}
            icon={<span>🎯</span>}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Quero Esses Benefícios Agora!
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export function BenefitsHorizontal() {
  return (
    <Section id="beneficios" background="darker" padding="lg">
      <Container size="xl">
        <SectionHeader
          title={content.benefits.title}
          subtitle={content.benefits.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {content.benefits.items.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 lg:p-8 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all group"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/10 rounded-full text-green-400 font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
                <span>{benefit.icon}</span>
                <span>{benefit.highlight}</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-green-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function BenefitsStacked() {
  return (
    <Section id="beneficios" background="dark" padding="lg">
      <Container size="lg">
        <SectionHeader
          title={content.benefits.title}
          subtitle={content.benefits.subtitle}
          align="center"
        />

        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {content.benefits.items.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-slate-800/30 border border-slate-700 rounded-xl sm:rounded-2xl hover:border-green-500/50 transition-all group"
            >
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl">{benefit.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed mb-3 sm:mb-4">{benefit.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-green-400">{benefit.highlight}</span>
                  <span className="text-xs sm:text-sm text-slate-500">{benefit.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
