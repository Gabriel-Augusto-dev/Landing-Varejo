"use client";

import { content } from "@/config/content";
import { getWhatsAppUrl } from "@/lib/utils";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { MediaContainer, useMediaUrl } from "@/ui/MediaContainer";
import {
  WhatsAppIcon,
  SparklesIcon,
  ShieldIcon,
  StarIcon,
  ClockIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from "@/ui/Icons";

export function HeroGradient() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-125 lg:h-125 bg-green-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-125 lg:h-125 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-150 sm:h-150 lg:w-200 lg:h-200 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <Container size="lg" className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Especialistas em Climatização</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight px-4">
              <span className="block bg-linear-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                {content.hero.title}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              {content.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 md:pt-8 px-4">
              <Button
                variant="primary"
                size="lg"
                href={getWhatsAppUrl()}
                icon={<WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
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
                Saiba Mais
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto pt-8 sm:pt-12 md:pt-16 px-4">
              <TrustBadge icon={<ShieldIcon />} text="Garantia Total" />
              <TrustBadge icon={<StarIcon />} text="5.0 Avaliação" />
              <TrustBadge icon={<ClockIcon />} text="Suporte 24/7" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:block absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="text-slate-400" />
        </div>
      </Container>
    </section>
  );
}

export function HeroMinimal() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 px-4 sm:px-6">
      <Container size="lg" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none">
            <span className="bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {content.hero.title}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            {content.hero.subtitle}
          </p>

          {/* CTA Link */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl lg:text-2xl text-green-400 hover:text-green-300 transition-colors group font-semibold"
          >
            {content.hero.cta}
            <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </Container>
    </section>
  );
}

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center text-green-400">
        {icon}
      </div>
      <span className="text-xs sm:text-sm md:text-base text-slate-400 font-medium text-center leading-tight">
        {text}
      </span>
    </div>
  );
}
