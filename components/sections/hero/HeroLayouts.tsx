"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";
import { MediaContainer } from "@/ui/MediaContainer";

// ========================================
// HERO LAYOUT 1: Full Screen Video Background
// ========================================
export function HeroVideoFull() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {content.hero.media && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <MediaContainer
            type={content.hero.media.type}
            src={content.hero.media.src}
            alt={content.hero.media.alt}
            className="h-full"
          />
        </div>
      )}
      <Container size="lg" className="relative z-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 md:mb-6">
          <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-white">{content.hero.badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6">{content.hero.title}</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-6 md:mb-8 max-w-3xl mx-auto">{content.hero.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg">{content.hero.cta}</Button>
          <Button size="lg" variant="outline">{content.hero.ctaSecondary}</Button>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// HERO LAYOUT 2: Split with Stats
// ========================================
export function HeroSplitStats() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden px-4">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">{content.hero.title}</h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-6 md:mb-8">{content.hero.description}</p>
            
            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              {content.stats.items.slice(0, 3).map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-theme-primary">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button size="lg">{content.hero.cta}</Button>
              <Button size="lg" variant="outline">{content.hero.ctaSecondary}</Button>
            </div>
          </div>
          {content.hero.media && (
            <div className="relative">
              <MediaContainer
                type={content.hero.media.type}
                src={content.hero.media.src}
                alt={content.hero.media.alt}
                className="rounded-2xl overflow-hidden shadow-2xl"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

// ========================================
// HERO LAYOUT 3: Centered with Cards
// ========================================
export function HeroCenteredCards() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 pb-8 md:pb-12 px-4">
      <Container size="lg" className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-slate-800 border border-slate-700 mb-4 md:mb-6">
          <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-slate-300">{content.hero.badge}</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 max-w-4xl mx-auto">
          {content.hero.title}
        </h1>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto">{content.hero.subtitle}</p>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {content.authority.badges.slice(0, 3).map((badge, i) => (
            <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{badge.title}</h3>
              <p className="text-sm text-slate-400">{badge.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">{content.hero.cta}</Button>
          <Button size="lg" variant="outline">{content.hero.ctaSecondary}</Button>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// HERO LAYOUT 4: Minimal Typography
// ========================================
export function HeroMinimalTypo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Container size="lg">
        <div className="max-w-5xl">
          <h1 className="text-8xl md:text-9xl font-black text-white mb-8 leading-none">
            {content.hero.title.split(' ')[0]}
            <br />
            <span className="text-theme-primary">{content.hero.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-2xl text-slate-300 mb-12 max-w-2xl">{content.hero.subtitle}</p>
          <Button size="lg" className="text-lg px-8 py-6">{content.hero.cta}</Button>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// HERO LAYOUT 5: Grid Gallery
// ========================================
export function HeroGridGallery() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
              <span className="text-sm font-medium text-slate-300">{content.hero.badge}</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">{content.hero.title}</h1>
            <p className="text-xl text-slate-300 mb-6">{content.hero.subtitle}</p>
            <p className="text-base text-slate-400 mb-8">{content.hero.description}</p>
            <div className="flex gap-4">
              <Button size="lg">{content.hero.cta}</Button>
              <Button size="lg" variant="outline">{content.hero.ctaSecondary}</Button>
            </div>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {content.services.gallery.items.slice(0, 4).map((item, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden">
                <MediaContainer
                  type={item.type}
                  src={item.src}
                  alt={item.alt}
                  className="h-full hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// HERO LAYOUT 6: Animated Gradient Mesh
// ========================================
export function HeroGradientMesh() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-theme-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-theme-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <Container size="lg" className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">{content.hero.title}</h1>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl text-slate-300 mb-2 md:mb-4">{content.hero.subtitle}</p>
        <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-10 max-w-2xl mx-auto">{content.hero.description}</p>
        
        {content.hero.media && (
          <div className="max-w-4xl mx-auto mb-8 md:mb-12 rounded-2xl overflow-hidden border-2 border-theme-primary/50 shadow-2xl">
            <MediaContainer
              type={content.hero.media.type}
              src={content.hero.media.src}
              alt={content.hero.media.alt}
            />
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg">{content.hero.cta}</Button>
          <Button size="lg" variant="outline">{content.hero.ctaSecondary}</Button>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// HERO LAYOUT 7: Side Image Float
// ========================================
export function HeroSideFloat() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
              <span className="text-sm font-medium text-slate-300">{content.hero.badge}</span>
            </div>
            
            <h1 className="text-7xl font-bold text-white mb-6 leading-tight">{content.hero.title}</h1>
            <p className="text-2xl text-slate-300 mb-6">{content.hero.subtitle}</p>
            <p className="text-lg text-slate-400 mb-8">{content.hero.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg">{content.hero.cta}</Button>
              <Button size="lg" variant="outline">{content.hero.ctaSecondary}</Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              {content.authority.partners.slice(0, 3).map((partner, i) => (
                <span key={i}>{partner}</span>
              ))}
            </div>
          </div>
          
          {content.hero.media && (
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-0 bg-theme-primary/20 blur-3xl" />
              <MediaContainer
                type={content.hero.media.type}
                src={content.hero.media.src}
                alt={content.hero.media.alt}
                className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

// ========================================
// HERO LAYOUT 8: Two Column Benefits
// ========================================
export function HeroTwoColBenefits() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12">
      <Container size="xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
            <span className="text-sm font-medium text-slate-300">{content.hero.badge}</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">{content.hero.title}</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">{content.hero.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg">{content.hero.cta}</Button>
            <Button size="lg" variant="outline">{content.hero.ctaSecondary}</Button>
          </div>
        </div>
        
        {/* Two Column Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.benefits.items.slice(0, 6).map((benefit, i) => (
            <div key={i} className="flex gap-4 items-start bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="text-4xl">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ========================================
// HERO LAYOUT 9: Testimonial Hero
// ========================================
export function HeroTestimonial() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12">
      <Container size="lg" className="text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6">{content.hero.title}</h1>
        <p className="text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">{content.hero.subtitle}</p>
        
        {/* Featured Testimonial */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex gap-1 justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
          <p className="text-xl text-white mb-6 italic">&ldquo;{content.testimonials.items[0].text}&rdquo;</p>
          <div className="flex items-center justify-center gap-4">
            <div>
              <p className="font-bold text-white">{content.testimonials.items[0].name}</p>
              <p className="text-sm text-slate-400">{content.testimonials.items[0].role}</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">{content.hero.cta}</Button>
          <Button size="lg" variant="outline">{content.hero.ctaSecondary}</Button>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// HERO LAYOUT 10: Interactive Process
// ========================================
export function HeroProcess() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12">
      <Container size="xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-theme-secondary animate-pulse" />
            <span className="text-sm font-medium text-slate-300">{content.hero.badge}</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">{content.hero.title}</h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">{content.hero.subtitle}</p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {content.process.steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.description}</p>
              </div>
              {i < content.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-theme-primary/50" />
              )}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">{content.hero.cta}</Button>
          <Button size="lg" variant="outline">{content.hero.ctaSecondary}</Button>
        </div>
      </Container>
    </section>
  );
}
