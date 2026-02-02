"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { MediaContainer } from "@/ui/MediaContainer";

/**
 * 📺 AUTHORITY COM VÍDEO - YouTube lado a lado com badges
 * Vídeo do lado com depoimentos/tour da empresa
 */
export function AuthorityWithVideo() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
              <span className="text-sm font-medium text-slate-300">
                Confiança Comprovada
              </span>
            </div>

            {/* Título */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {content.authority.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-slate-400 mb-10">
              {content.authority.subtitle}
            </p>

            {/* Badges */}
            <div className="space-y-4">
              {content.authority.badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition-all"
                >
                  <div className="text-3xl shrink-0">{badge.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {badge.title}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {badge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partners */}
            {content.authority.partners && (
              <div className="mt-12">
                <p className="text-sm text-slate-400 mb-4">
                  {content.authority.partnersLabel}
                </p>
                <div className="flex flex-wrap gap-3">
                  {content.authority.partners.map((partner, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-300 font-medium"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Vídeo */}
          {content.authority.featuredMedia && (
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-theme-primary to-theme-secondary rounded-3xl blur-2xl opacity-20" />

              {/* Vídeo Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <MediaContainer
                  type={content.authority.featuredMedia.type}
                  src={content.authority.featuredMedia.src}
                  alt={content.authority.featuredMedia.alt}
                  title={content.authority.featuredMedia.title}
                  className="w-full"
                />
              </div>

              {/* Video Badge */}
              {content.authority.featuredMedia.title && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
                  <p className="text-white font-medium text-sm">
                    {content.authority.featuredMedia.title}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/**
 * 📺 AUTHORITY VÍDEO FULL - Vídeo grande como destaque principal
 * Layout hero com vídeo em primeiro plano
 */
export function AuthorityVideoHero() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-950 to-slate-900">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {content.authority.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {content.authority.subtitle}
          </p>
        </div>

        {/* Vídeo Grande */}
        {content.authority.featuredMedia && (
          <div className="mb-16">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-linear-to-r from-theme-primary via-theme-secondary to-theme-accent rounded-3xl blur-3xl opacity-30" />

              {/* Video */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl shadow-black/50">
                <MediaContainer
                  type={content.authority.featuredMedia.type}
                  src={content.authority.featuredMedia.src}
                  alt={content.authority.featuredMedia.alt}
                  title={content.authority.featuredMedia.title}
                  className="w-full aspect-video"
                />
              </div>
            </div>
          </div>
        )}

        {/* Badges em Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.authority.badges.map((badge, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-theme-primary/50 transition-all"
            >
              <div className="text-4xl mb-4">{badge.icon}</div>
              <h4 className="font-bold text-white mb-2">{badge.title}</h4>
              <p className="text-sm text-slate-400">{badge.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
