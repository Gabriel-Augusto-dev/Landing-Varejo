"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";

// BENEFITS LAYOUT 1: Cards Grid
export function BenefitsCards() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.benefits.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.benefits.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {content.benefits.items.map((benefit, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-theme-primary transition-all hover:scale-105">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <span className="inline-block px-3 py-1 bg-theme-primary/20 text-theme-primary text-xs font-bold rounded-full mb-3">
                {benefit.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400 mb-4">{benefit.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-theme-primary">{benefit.highlight}</span>
                <span className="text-sm text-slate-500">{benefit.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// BENEFITS LAYOUT 2: Horizontal with Image
export function BenefitsHorizontal() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={content.benefits.featuredImage} alt="Benefits" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-theme-primary/20 to-theme-secondary/20" />
          </div>
          
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">{content.benefits.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.benefits.subtitle}</p>
            
            <div className="space-y-6">
              {content.benefits.items.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-4xl shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-400 mb-2">{benefit.description}</p>
                    <span className="text-2xl font-bold text-theme-primary">{benefit.highlight}</span>
                    <span className="text-sm text-slate-500 ml-2">{benefit.metric}</span>
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

// BENEFITS LAYOUT 3: Stacked
export function BenefitsStacked() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.benefits.title}</h2>
          <p className="text-xl text-slate-300">{content.benefits.subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {content.benefits.items.map((benefit, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="text-6xl shrink-0">{benefit.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-theme-primary/20 text-theme-primary text-xs font-bold rounded-full">
                      {benefit.tag}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-theme-primary">{benefit.highlight}</span>
                      <span className="text-sm text-slate-500">{benefit.metric}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// BENEFITS LAYOUT 4: Split with Image
export function BenefitsSplit() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="sticky top-24 h-fit">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img src={content.benefits.featuredImage} alt="Benefits" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-br from-theme-primary/30 to-theme-secondary/30" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white mb-4">{content.benefits.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.benefits.subtitle}</p>
            
            {content.benefits.items.map((benefit, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl">{benefit.icon}</div>
                  <span className="px-3 py-1 bg-theme-primary/20 text-theme-primary text-xs font-bold rounded-full">
                    {benefit.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{benefit.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-theme-primary">{benefit.highlight}</span>
                  <span className="text-sm text-slate-500">{benefit.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// BENEFITS LAYOUT 5: Minimal List
export function BenefitsMinimal() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold text-white mb-6">{content.benefits.title}</h2>
          <p className="text-xl text-slate-300 mb-12">{content.benefits.subtitle}</p>
          
          <div className="space-y-8">
            {content.benefits.items.map((benefit, i) => (
              <div key={i} className="border-l-4 border-theme-primary pl-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-5xl">{benefit.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{benefit.title}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-theme-primary">{benefit.highlight}</span>
                      <span className="text-sm text-slate-500">{benefit.metric}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// BENEFITS LAYOUT 6: Masonry
export function BenefitsMasonry() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.benefits.title}</h2>
          <p className="text-xl text-slate-300">{content.benefits.subtitle}</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {content.benefits.items.map((benefit, i) => (
            <div key={i} className="break-inside-avoid bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-theme-primary transition-colors">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <span className="inline-block px-3 py-1 bg-theme-primary/20 text-theme-primary text-xs font-bold rounded-full mb-3">
                {benefit.tag}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{benefit.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-theme-primary">{benefit.highlight}</span>
                <span className="text-sm text-slate-500">{benefit.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// BENEFITS LAYOUT 7: Pricing Style
export function BenefitsPricing() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.benefits.title}</h2>
          <p className="text-xl text-slate-300">{content.benefits.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.benefits.items.map((benefit, i) => (
            <div key={i} className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-8 text-center hover:border-theme-primary transition-all hover:scale-105">
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <span className="inline-block px-4 py-2 bg-theme-primary/20 text-theme-primary text-sm font-bold rounded-full mb-4">
                {benefit.tag}
              </span>
              <div className="mb-6">
                <div className="text-5xl font-bold text-theme-primary mb-2">{benefit.highlight}</div>
                <div className="text-sm text-slate-500">{benefit.metric}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-slate-400 mb-6">{benefit.description}</p>
              <button className="w-full px-6 py-3 bg-theme-primary text-white rounded-lg font-bold hover:bg-theme-primary/80 transition-colors">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// BENEFITS LAYOUT 8: Banner
export function BenefitsBanner() {
  return (
    <section className="py-20 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.benefits.title}</h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">{content.benefits.subtitle}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12">
          {content.benefits.items.map((benefit, i) => (
            <div key={i} className="max-w-xs text-center">
              <div className="w-24 h-24 bg-theme-primary/20 rounded-full flex items-center justify-center text-6xl mx-auto mb-4">
                {benefit.icon}
              </div>
              <div className="mb-3">
                <div className="text-4xl font-bold text-theme-primary">{benefit.highlight}</div>
                <div className="text-sm text-slate-500">{benefit.metric}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// BENEFITS LAYOUT 9: Compact
export function BenefitsCompact() {
  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800">
      <Container size="xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">{content.benefits.title}</h2>
          <p className="text-lg text-slate-300">{content.benefits.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {content.benefits.items.map((benefit, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl mb-3">{benefit.icon}</div>
              <div className="text-2xl font-bold text-theme-primary mb-1">{benefit.highlight}</div>
              <h3 className="text-sm font-bold text-white">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// BENEFITS LAYOUT 10: Gradient Cards
export function BenefitsGradient() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.benefits.title}</h2>
          <p className="text-xl text-slate-300">{content.benefits.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.benefits.items.map((benefit, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-theme-primary/20 to-theme-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-slate-900 border border-theme-primary/30 rounded-xl p-8">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <span className="inline-block px-3 py-1 bg-linear-to-r from-theme-primary to-theme-secondary text-white text-xs font-bold rounded-full mb-3">
                  {benefit.tag}
                </span>
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-linear-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent">
                    {benefit.highlight}
                  </span>
                  <span className="text-sm text-slate-500 ml-2">{benefit.metric}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
