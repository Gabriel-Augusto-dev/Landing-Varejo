"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";

// FEATURES LAYOUT 1: Grid 3 Columns
export function FeaturesGrid() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-300">{content.features.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.features.items.map((feature, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-theme-primary transition-colors">
              <div className="w-12 h-12 bg-theme-primary/20 rounded-lg flex items-center justify-center text-theme-primary text-2xl mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FEATURES LAYOUT 2: Two Columns List
export function FeaturesTwoCol() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-300">{content.features.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.features.items.map((feature, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-6 h-6 bg-theme-primary rounded-full flex items-center justify-center text-white text-sm shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FEATURES LAYOUT 3: Minimal List
export function FeaturesMinimal() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">{content.features.title}</h2>
          <p className="text-xl text-slate-300 mb-12">{content.features.subtitle}</p>
          
          <div className="space-y-6">
            {content.features.items.map((feature, i) => (
              <div key={i} className="border-l-4 border-theme-primary pl-6">
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// FEATURES LAYOUT 4: Cards with Icons
export function FeaturesCards() {
  const icons = ["🎯", "⚡", "🛡️", "📈", "💎", "🚀"];
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-300">{content.features.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.items.map((feature, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">{icons[i]}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FEATURES LAYOUT 5: Accordion
export function FeaturesAccordion() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-300">{content.features.subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {content.features.items.map((feature, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FEATURES LAYOUT 6: Split View
export function FeaturesSplit() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">{content.features.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.features.subtitle}</p>
            <div className="space-y-4">
              {content.features.items.slice(0, 3).map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-theme-primary rounded-full flex items-center justify-center text-white shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            {content.features.items.slice(3).map((feature, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// FEATURES LAYOUT 7: Compact
export function FeaturesCompact() {
  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800">
      <Container size="xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">{content.features.title}</h2>
          <p className="text-lg text-slate-300">{content.features.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {content.features.items.map((feature, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-theme-primary/20 rounded-lg flex items-center justify-center text-theme-primary text-xl mx-auto mb-3">
                ✓
              </div>
              <h3 className="text-sm font-bold text-white">{feature.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FEATURES LAYOUT 8: Banner
export function FeaturesBanner() {
  return (
    <section className="py-20 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.features.title}</h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">{content.features.subtitle}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {content.features.items.map((feature, i) => (
            <div key={i} className="max-w-xs text-center">
              <div className="w-16 h-16 bg-theme-primary/20 rounded-full flex items-center justify-center text-theme-primary text-3xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FEATURES LAYOUT 9: Masonry
export function FeaturesMasonry() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-300">{content.features.subtitle}</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {content.features.items.map((feature, i) => (
            <div key={i} className="break-inside-avoid bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-theme-primary transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FEATURES LAYOUT 10: Gradient Cards
export function FeaturesGradient() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-300">{content.features.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.features.items.map((feature, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-theme-primary/20 to-theme-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-slate-900 border border-theme-primary/30 rounded-xl p-8">
                <div className="w-12 h-12 bg-linear-to-br from-theme-primary to-theme-secondary rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
