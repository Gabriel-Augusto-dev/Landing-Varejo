"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { Gallery } from "@/ui/Gallery";
import { Button } from "@/ui/Button";

/**
 * 🖼️ SERVICES COM GALERIA - Moderno com fotos/vídeos dos serviços
 * Mostra os serviços em cards + galeria visual interativa
 */
export function ServicesWithGallery() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-4">
            <span className="text-lg">📸</span>
            <span className="text-sm font-medium text-slate-300">
              Conheça nossos serviços
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {content.services.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {content.services.subtitle}
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {content.services.items.map((service, i) => (
            <div
              key={i}
              className="group relative bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-theme-primary/50 rounded-xl p-6 transition-all hover:shadow-xl hover:shadow-theme-primary/10"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Tag */}
              {service.tag && (
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-theme-primary/10 text-theme-primary mb-4">
                  {service.tag}
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, j) => (
                  <li
                    key={j}
                    className="text-sm text-slate-300 flex items-start gap-2"
                  >
                    <span className="text-theme-secondary mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-theme-primary/0 to-theme-secondary/0 group-hover:from-theme-primary/5 group-hover:to-theme-secondary/5 rounded-xl transition-all" />
            </div>
          ))}
        </div>

        {/* Gallery */}
        {content.services.gallery && (
          <div className="mt-20">
            {/* Gallery Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                {content.services.gallery.title}
              </h3>
              <p className="text-slate-400">
                Veja nossos serviços em ação com imagens e vídeos
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="rounded-2xl overflow-hidden border border-slate-700">
              <Gallery
                items={content.services.gallery.items}
                columns={3}
                className="bg-slate-800/30"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

/**
 * 🖼️ SERVICES GALERIA FULL - Apenas galeria, visual e moderno
 * Foco em imagens/vídeos dos serviços
 */
export function ServicesGalleryFull() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-4">
            <span className="text-lg">🎥</span>
            <span className="text-sm font-medium text-slate-300">
              Portfólio Visual
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {content.services.gallery?.title || "Veja nossos serviços em ação"}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Fotos e vídeos mostrando a qualidade do nosso atendimento
          </p>
        </div>

        {/* Gallery */}
        {content.services.gallery && (
          <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/50">
            <Gallery
              items={content.services.gallery.items}
              columns={4}
              className="bg-slate-900 p-2"
            />
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            Quer conhecer mais de perto? Agende uma visita!
          </p>
          <Button size="lg">
            Agendar Visita
          </Button>
        </div>
      </Container>
    </section>
  );
}
