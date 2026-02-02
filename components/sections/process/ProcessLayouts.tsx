"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";

// PROCESS LAYOUT 1: Timeline Vertical
export function ProcessTimeline() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="lg">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.process.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.process.subtitle}</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-theme-primary/30 hidden md:block" />
          {content.process.steps.map((step, i) => (
            <div key={i} className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </div>
              <div className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-slate-950 z-10">
                {i + 1}
              </div>
              <div className="flex-1" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// PROCESS LAYOUT 2: Horizontal Steps
export function ProcessHorizontal() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.process.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.process.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {content.process.steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center h-full">
                <div className="w-16 h-16 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.description}</p>
              </div>
              {i < content.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-theme-primary/50" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// PROCESS LAYOUT 3: Cards Grid
export function ProcessCards() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.process.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.process.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {content.process.steps.map((step, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-theme-primary transition-colors">
              <div className="w-12 h-12 bg-theme-primary/20 rounded-full flex items-center justify-center text-theme-primary font-bold text-xl mb-4">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// PROCESS LAYOUT 4: Accordion
export function ProcessAccordion() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.process.title}</h2>
          <p className="text-xl text-slate-300">{content.process.subtitle}</p>
        </div>
        
        <div className="space-y-4">
          {content.process.steps.map((step, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// PROCESS LAYOUT 5: Minimal List
export function ProcessMinimal() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">{content.process.title}</h2>
          <p className="text-xl text-slate-300 mb-12">{content.process.subtitle}</p>
          
          <div className="space-y-8">
            {content.process.steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-6xl font-black text-theme-primary/20">{i + 1}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// PROCESS LAYOUT 6: Circular Flow
export function ProcessCircular() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.process.title}</h2>
          <p className="text-xl text-slate-300">{content.process.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {content.process.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-linear-to-br from-theme-primary to-theme-secondary rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-lg shadow-theme-primary/50">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.description}</p>
              {i < content.process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-theme-primary/30" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// PROCESS LAYOUT 7: Split View
export function ProcessSplit() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">{content.process.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.process.subtitle}</p>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3">Processo Transparente</h3>
              <p className="text-slate-400">Cada etapa é clara e você acompanha tudo em tempo real.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {content.process.steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// PROCESS LAYOUT 8: Banner Style
export function ProcessBanner() {
  return (
    <section className="py-20 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.process.title}</h2>
          <p className="text-2xl text-slate-300">{content.process.subtitle}</p>
        </div>
        
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-8">
            {content.process.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center max-w-xs">
                <div className="w-20 h-20 bg-theme-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-theme-primary">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-slate-400 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// PROCESS LAYOUT 9: Tabs
export function ProcessTabs() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.process.title}</h2>
          <p className="text-xl text-slate-300">{content.process.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            {content.process.steps.map((step, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 cursor-pointer hover:border-theme-primary transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="font-bold text-white">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{content.process.steps[0].title}</h3>
            <p className="text-lg text-slate-400 mb-6">{content.process.steps[0].description}</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-theme-primary text-white rounded-lg font-bold hover:bg-theme-primary/80 transition-colors">
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// PROCESS LAYOUT 10: Interactive
export function ProcessInteractive() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.process.title}</h2>
          <p className="text-xl text-slate-300">{content.process.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {content.process.steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-theme-primary/10 rounded-xl blur-xl group-hover:bg-theme-primary/30 transition-all" />
              <div className="relative bg-slate-900 border-2 border-slate-800 rounded-xl p-6 text-center h-full group-hover:border-theme-primary transition-colors">
                <div className="w-16 h-16 bg-linear-to-br from-theme-primary to-theme-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
