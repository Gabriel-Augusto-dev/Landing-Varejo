"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { MediaContainer } from "@/ui/MediaContainer";

/**
 * 🎬 HERO COM IMAGEM - Moderno e Interativo
 * Imagem como background com overlay, texto em primeiro plano
 */
export function HeroImage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
      {/* Background Image com Overlay */}
      {content.hero.media && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <MediaContainer
            type={content.hero.media.type}
            src={content.hero.media.src}
            alt={content.hero.media.alt}
            className="h-full"
          />
        </div>
      )}

      {/* Content */}
      <Container size="lg" className="relative z-20 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
            <span className="text-sm font-medium text-white">
              {content.hero.badge}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {content.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/80 mb-4">
            {content.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-white/60 mb-8">
            {content.hero.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="shadow-2xl hover:shadow-theme-primary/50 transition-all"
            >
              {content.hero.cta}
            </Button>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * 🎬 HERO SPLIT COM IMAGEM - Texto e Mídia lado a lado
 * Design moderno com imagem interativa do lado
 */
export function HeroImageSplit() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-20 overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
              <span className="text-sm font-medium text-slate-300">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              {content.hero.title}
            </h1>

            <p className="text-xl text-slate-300 mb-6">
              {content.hero.subtitle}
            </p>

            <p className="text-base text-slate-400 mb-8">
              {content.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                {content.hero.cta}
              </Button>
              <Button size="lg" variant="outline">
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Imagem com efeito */}
          {content.hero.media && (
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-linear-to-r from-theme-primary to-theme-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />

              {/* Imagem */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 hover:border-theme-primary/50 transition-colors shadow-2xl hover:shadow-theme-primary/20">
                <MediaContainer
                  type={content.hero.media.type}
                  src={content.hero.media.src}
                  alt={content.hero.media.alt}
                  className="aspect-square"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/**
 * 🎬 HERO VÍDEO - Hero com vídeo como background
 * Premium e moderno com vídeo full screen
 */
export function HeroVideo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
      {/* Background Video */}
      {content.hero.media && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <MediaContainer
            type={content.hero.media.type || "video"}
            src={content.hero.media.src}
            alt={content.hero.media.alt}
            autoplay={true}
            loop={true}
            muted={true}
            controls={false}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* Content com glassmorphism */}
      <Container size="lg" className="relative z-20 py-20">
        <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
            <span className="text-sm font-medium text-white">Premium</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {content.hero.title}
          </h1>

          <p className="text-lg text-white/80 mb-4">
            {content.hero.subtitle}
          </p>

          <p className="text-white/60 mb-8">
            {content.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              {content.hero.cta}
            </Button>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
