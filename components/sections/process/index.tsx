"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { SectionHeader } from "@/ui/SectionHeader";

// Layout 1: Timeline Vertical (atual - moderno e visual)
export function ProcessTimeline() {
  return (
    <Section id="process" background="dark" padding="lg">
      <Container size="lg">
        <SectionHeader
          title={content.process.title}
          subtitle={content.process.subtitle}
          align="center"
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-400 via-emerald-500 to-green-400 -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {content.process.steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-6 sm:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 hidden md:block" />

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl items-center justify-center shadow-lg shadow-green-500/50 z-10">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-950">{index + 1}</span>
                </div>

                <div className="flex-1">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-green-500/50 transition-all group">
                    <div className="flex items-start gap-3 sm:gap-4 md:hidden mb-3 sm:mb-4">
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-950">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-green-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Layout 2: Steps com Setas (horizontal progressivo)
export function ProcessSteps() {
  return (
    <section className="section relative overflow-hidden bg-slate-900/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content.process.title}
          </h2>
          <p className="text-xl text-slate-400">{content.process.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {content.process.steps.map((step, index) => (
              <div key={index} className="relative">
                {index < content.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-4 h-0.5 bg-linear-to-r from-green-400 to-emerald-500 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-green-400" />
                  </div>
                )}
                
                <div className="relative bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all group h-full">
                  <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-slate-950">{index + 1}</span>
                  </div>
                  <h3 className="font-bold mb-2 text-lg">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Layout 3: Cards Numerados (grid limpo e corporativo)
export function ProcessCards() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            Processo Simples
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content.process.title}
          </h2>
          <p className="text-lg text-slate-400">{content.process.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.process.steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-slate-950">{index + 1}</span>
              </div>
              
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 pt-10 hover:border-green-500/30 transition-all h-full">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
