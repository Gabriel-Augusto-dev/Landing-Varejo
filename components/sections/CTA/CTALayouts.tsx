"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";

// CTA LAYOUT 1: Split with Image
export function CTASplit() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">{content.cta.title}</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8">{content.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
              <button className="px-8 py-4 bg-theme-primary text-white rounded-lg font-bold text-lg hover:bg-theme-primary/80 transition-colors">
                {content.cta.button}
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-bold text-lg hover:bg-slate-700 transition-colors">
                {content.cta.buttonSecondary}
              </button>
            </div>
            <p className="text-sm text-slate-400">{content.cta.note}</p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop" alt="CTA" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-theme-primary/30 to-theme-secondary/30" />
          </div>
        </div>
      </Container>
    </section>
  );
}

// CTA LAYOUT 2: Centered Minimal
export function CTACentered() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">{content.cta.title}</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8">{content.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-4 md:mb-6">
            <button className="px-10 py-5 bg-theme-primary text-white rounded-lg font-bold text-xl hover:bg-theme-primary/80 transition-colors">
              {content.cta.button}
            </button>
            <button className="px-10 py-5 bg-slate-800 text-white rounded-lg font-bold text-xl hover:bg-slate-700 transition-colors">
              {content.cta.buttonSecondary}
            </button>
          </div>
          <p className="text-slate-400">{content.cta.note}</p>
        </div>
      </Container>
    </section>
  );
}

// CTA LAYOUT 3: Banner Urgent
export function CTABanner() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-linear-to-r from-theme-primary to-theme-secondary px-4">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">{content.cta.title}</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90">{content.cta.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-slate-950 rounded-lg font-bold text-base md:text-lg hover:bg-slate-100 transition-colors whitespace-nowrap">
              {content.cta.button}
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-slate-900 text-white rounded-lg font-bold text-base md:text-lg hover:bg-slate-800 transition-colors whitespace-nowrap">
              {content.cta.buttonSecondary}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

// CTA LAYOUT 4: Fullscreen Overlay
export function CTAFullscreen() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop" alt="Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 to-slate-950/80" />
      </div>
      
      <Container size="lg">
        <div className="relative text-center max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">{content.cta.title}</h2>
          <p className="text-2xl text-slate-300 mb-12">{content.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="px-12 py-6 bg-theme-primary text-white rounded-lg font-bold text-2xl hover:bg-theme-primary/80 transition-all hover:scale-105">
              {content.cta.button}
            </button>
            <button className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-bold text-2xl hover:bg-white/20 transition-colors">
              {content.cta.buttonSecondary}
            </button>
          </div>
          <p className="text-lg text-slate-400">{content.cta.note}</p>
        </div>
      </Container>
    </section>
  );
}

// CTA LAYOUT 5: Gradient Background
export function CTAGradient() {
  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-theme-primary/20 to-theme-secondary/20" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      
      <Container size="xl">
        <div className="relative bg-slate-900/50 backdrop-blur-sm border border-theme-primary/30 rounded-3xl p-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent mb-6">
            {content.cta.title}
          </h2>
          <p className="text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">{content.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="px-10 py-5 bg-linear-to-r from-theme-primary to-theme-secondary text-white rounded-lg font-bold text-xl hover:opacity-80 transition-opacity">
              {content.cta.button}
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-lg font-bold text-xl hover:bg-white/20 transition-colors">
              {content.cta.buttonSecondary}
            </button>
          </div>
          <p className="text-slate-400">{content.cta.note}</p>
        </div>
      </Container>
    </section>
  );
}

// CTA LAYOUT 6: Image Background
export function CTAImageBg() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>
      
      <Container size="lg">
        <div className="relative">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">{content.cta.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="px-10 py-5 bg-theme-primary text-white rounded-lg font-bold text-xl hover:bg-theme-primary/80 transition-colors">
                {content.cta.button}
              </button>
              <button className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-lg font-bold text-xl hover:bg-white/20 transition-colors">
                {content.cta.buttonSecondary}
              </button>
            </div>
            <p className="text-slate-400">{content.cta.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// CTA LAYOUT 7: Video Background
export function CTAVideo() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-slate-900" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 to-slate-950/70" />
      </div>
      
      <Container size="lg">
        <div className="relative text-center max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold text-white mb-8">{content.cta.title}</h2>
          <p className="text-2xl text-slate-300 mb-12">{content.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="px-12 py-6 bg-theme-primary text-white rounded-lg font-bold text-2xl hover:bg-theme-primary/80 transition-colors">
              {content.cta.button}
            </button>
            <button className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-bold text-2xl hover:bg-white/20 transition-colors">
              {content.cta.buttonSecondary}
            </button>
          </div>
          <p className="text-lg text-slate-400">{content.cta.note}</p>
        </div>
      </Container>
    </section>
  );
}

// CTA LAYOUT 8: Compact Inline
export function CTACompact() {
  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{content.cta.title}</h2>
            <p className="text-slate-300">{content.cta.subtitle}</p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-theme-primary text-white rounded-lg font-bold hover:bg-theme-primary/80 transition-colors whitespace-nowrap">
              {content.cta.button}
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors whitespace-nowrap">
              {content.cta.buttonSecondary}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

// CTA LAYOUT 9: Multi Button Options
export function CTAMultiButton() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">{content.cta.title}</h2>
            <p className="text-2xl text-slate-300">{content.cta.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900 border-2 border-theme-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Atendimento Urgente</h3>
              <p className="text-slate-400 mb-6">Resposta em até 10 minutos</p>
              <button className="w-full px-8 py-4 bg-theme-primary text-white rounded-lg font-bold text-lg hover:bg-theme-primary/80 transition-colors">
                {content.cta.button}
              </button>
            </div>
            
            <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Diagnóstico Grátis</h3>
              <p className="text-slate-400 mb-6">Sem compromisso</p>
              <button className="w-full px-8 py-4 bg-slate-800 text-white rounded-lg font-bold text-lg hover:bg-slate-700 transition-colors">
                {content.cta.buttonSecondary}
              </button>
            </div>
          </div>
          
          <p className="text-center text-slate-400">{content.cta.note}</p>
        </div>
      </Container>
    </section>
  );
}

// CTA LAYOUT 10: Interactive Form
export function CTAForm() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">{content.cta.title}</h2>
            <p className="text-xl text-slate-300">{content.cta.subtitle}</p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="space-y-4 mb-6">
              <input 
                type="text" 
                placeholder="Seu nome" 
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-theme-primary focus:outline-none"
              />
              <input 
                type="tel" 
                placeholder="Seu WhatsApp" 
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-theme-primary focus:outline-none"
              />
              <textarea 
                placeholder="Descreva o problema do seu computador" 
                rows={4}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-theme-primary focus:outline-none resize-none"
              />
            </div>
            
            <button className="w-full px-8 py-4 bg-theme-primary text-white rounded-lg font-bold text-xl hover:bg-theme-primary/80 transition-colors">
              {content.cta.button}
            </button>
            
            <p className="text-sm text-slate-400 text-center mt-4">{content.cta.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
