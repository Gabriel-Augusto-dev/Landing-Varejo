"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { MediaContainer } from "@/ui/MediaContainer";

/**
 * 💎 BENEFITS COM IMAGEM - Imagem lado a lado com benefícios
 * Visual moderno e interativo
 */
export function BenefitsWithImage() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          {content.benefits.featuredImage && (
            <div className="relative order-2 lg:order-1">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-theme-primary to-theme-secondary rounded-2xl blur-2xl opacity-20" />

              {/* Imagem */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl hover:shadow-theme-primary/20 transition-all">
                <MediaContainer
                  type="image"
                  src={content.benefits.featuredImage}
                  alt="Benefícios do Auto Center"
                  className="aspect-square"
                />
              </div>
            </div>
          )}

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
              <span className="text-sm font-medium text-slate-300">
                Vantagens Reais
              </span>
            </div>

            {/* Título */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {content.benefits.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-slate-400 mb-10">
              {content.benefits.subtitle}
            </p>

            {/* Benefits Grid */}
            <div className="space-y-4">
              {content.benefits.items.map((benefit, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition-all group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="text-3xl shrink-0 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-white">{benefit.title}</h4>
                      {benefit.highlight && (
                        <span className="text-xs font-bold bg-theme-primary/20 text-theme-primary px-2 py-1 rounded">
                          {benefit.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * 💎 BENEFITS FULL - Imagem grande como destaque
 * Foco em visual com lista de benefícios
 */
export function BenefitsImageHero() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-4">
            <span className="text-lg">✨</span>
            <span className="text-sm font-medium text-slate-300">
              Benefícios Comprovados
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {content.benefits.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {content.benefits.subtitle}
          </p>
        </div>

        {/* Imagem Grande */}
        {content.benefits.featuredImage && (
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              {/* Glow */}
              <div className="absolute -inset-4 bg-linear-to-r from-theme-primary to-theme-secondary rounded-3xl blur-3xl opacity-20 -z-10" />

              <MediaContainer
                type="image"
                src={content.benefits.featuredImage}
                alt="Benefícios"
                className="w-full aspect-video"
              />
            </div>
          </div>
        )}

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.benefits.items.map((benefit, i) => (
            <div
              key={i}
              className="relative p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-theme-primary/50 group transition-all hover:shadow-xl hover:shadow-theme-primary/10 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-theme-primary/0 to-theme-secondary/0 group-hover:from-theme-primary/5 group-hover:to-theme-secondary/5 transition-all" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{benefit.icon}</div>
                  {benefit.highlight && (
                    <div className="px-3 py-1 rounded-full text-xs font-bold bg-theme-primary/20 text-theme-primary">
                      {benefit.highlight}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h4 className="font-bold text-white mb-2 text-lg">
                  {benefit.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-3">
                  {benefit.description}
                </p>

                {/* Metric */}
                {benefit.metric && (
                  <p className="text-xs text-slate-500 font-medium">
                    {benefit.metric}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/**
 * 💎 BENEFITS CARDS COM IMAGEM - Mix de imagem + cards
 * Visual equilibrado e moderno
 */
export function BenefitsImageCards() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {content.benefits.title}
          </h2>
          <p className="text-xl text-slate-400">
            {content.benefits.subtitle}
          </p>
        </div>

        {/* Main Grid: Imagem + Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Imagem (ocupa 1 coluna) */}
          {content.benefits.featuredImage && (
            <div className="lg:col-span-1 relative">
              <div className="sticky top-20">
                <div className="absolute -inset-2 bg-linear-to-r from-theme-primary to-theme-secondary rounded-2xl blur-2xl opacity-20" />
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                  <MediaContainer
                    type="image"
                    src={content.benefits.featuredImage}
                    alt="Benefícios"
                    className="aspect-square"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Cards (ocupa 2 colunas) */}
          <div className="lg:col-span-2 space-y-4">
            {content.benefits.items.map((benefit, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-theme-primary/50 transition-all hover:shadow-xl hover:shadow-theme-primary/10 group"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="text-3xl shrink-0 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-white text-lg">
                        {benefit.title}
                      </h4>
                      {benefit.tag && (
                        <span className="text-xs px-2 py-1 rounded-full bg-theme-primary/20 text-theme-primary font-semibold">
                          {benefit.tag}
                        </span>
                      )}
                    </div>

                    <p className="text-slate-400 mb-3">{benefit.description}</p>

                    {benefit.highlight && (
                      <div className="flex items-baseline gap-1 text-theme-primary font-bold">
                        <span className="text-2xl">{benefit.highlight}</span>
                        <span className="text-sm text-slate-400 font-normal">
                          {benefit.metric}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
