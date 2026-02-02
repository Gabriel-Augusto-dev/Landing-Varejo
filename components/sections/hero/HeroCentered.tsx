"use client";

import { content } from "@/config/content";
import { getWhatsAppUrl } from "@/lib/utils";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { Button } from "@/ui/Button";
import { WhatsAppIcon } from "@/ui/Icons";

export function HeroCentered() {
  return (
    <Section id="hero" background="dark" padding="xl" className="min-h-screen flex items-center pt-20">
      <Container size="md" className="text-center">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            <span className="block bg-linear-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              {content.hero.title}
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
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
      </Container>
    </Section>
  );
}
