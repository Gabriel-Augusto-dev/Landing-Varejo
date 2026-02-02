"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { SectionHeader } from "@/ui/SectionHeader";
import { Gallery } from "@/ui/Gallery";
import { MediaContainer } from "@/ui/MediaContainer";

export function ServicesGallery() {
  if (!content.services.gallery || !content.services.gallery.items.length) {
    return null;
  }

  return (
    <Section id="servicos-galeria" background="dark" padding="lg">
      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Conheça nosso trabalho"
          badgeIcon="📸"
          title={content.services.gallery.title || "Veja nossos serviços em ação"}
          subtitle="Fotos e vídeos mostrando a qualidade do nosso atendimento"
          align="center"
        />

        <Gallery items={content.services.gallery.items} columns={3} />
      </Container>
    </Section>
  );
}

export function AuthorityWithVideo() {
  if (!content.authority.featuredMedia) {
    return null;
  }

  return (
    <Section background="darker" padding="lg">
      <Container size="xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              {content.authority.title}
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              {content.authority.subtitle}
            </p>
            <ul className="space-y-4">
              {content.authority.badges.slice(0, 3).map((badge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <p className="font-semibold text-white">{badge.title}</p>
                    <p className="text-slate-400 text-sm">{badge.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <MediaContainer
              type={content.authority.featuredMedia.type}
              src={content.authority.featuredMedia.src}
              alt={content.authority.featuredMedia.alt}
              title={content.authority.featuredMedia.title}
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function BenefitsWithImage() {
  if (!content.benefits.featuredImage) {
    return null;
  }

  return (
    <Section background="dark" padding="lg">
      <Container size="xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <MediaContainer
              type="image"
              src={content.benefits.featuredImage}
              alt="Benefícios"
              className="w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              {content.benefits.title}
            </h3>
            <p className="text-slate-300 text-lg mb-8">
              {content.benefits.subtitle}
            </p>
            <ul className="space-y-4">
              {content.benefits.items.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-theme-secondary flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{benefit.title}</p>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
