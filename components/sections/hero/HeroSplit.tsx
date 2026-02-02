"use client";

import { content } from "@/config/content";
import { getWhatsAppUrl } from "@/lib/utils";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { Button } from "@/ui/Button";
import { WhatsAppIcon, CheckIcon } from "@/ui/Icons";

export function HeroSplit() {
  const stats = content.stats?.items || [
    { number: "10+", label: "Anos", description: "de experiência" },
    { number: "2.000+", label: "Clientes", description: "atendidos" },
    { number: "100%", label: "Garantia", description: "nos serviços" },
  ];

  return (
    <Section id="hero" background="gradient" padding="xl" className="min-h-screen flex items-center pt-20">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Profissionais Certificados</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="block bg-linear-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                {content.hero.title}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed">
              {content.hero.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-500">
              {content.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                href={getWhatsAppUrl()}
                icon={<WhatsAppIcon />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {content.hero.cta}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                href="#servicos"
                className="w-full sm:w-auto"
              >
                {content.hero.ctaSecondary || "Saiba Mais"}
              </Button>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-linear-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 sm:p-6 bg-slate-900/50 rounded-xl sm:rounded-2xl border border-slate-700/50">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-400">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}