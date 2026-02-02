"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { useState } from "react";

// FAQ LAYOUT 1: Accordion Classic
export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="lg">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.faq.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.faq.subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {content.faq.items.map((item, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800 transition-colors"
              >
                <span className="font-bold text-white text-lg pr-4">{item.question}</span>
                <span className="text-theme-primary text-2xl shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/50">
                  <p className="text-slate-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FAQ LAYOUT 2: Grid Two Column
export function FAQGrid() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.faq.title}</h2>
          <p className="text-xl text-slate-300">{content.faq.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.faq.items.map((item, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-theme-primary transition-colors">
              <h3 className="font-bold text-white text-xl mb-3">{item.question}</h3>
              <p className="text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FAQ LAYOUT 3: Minimal List
export function FAQMinimal() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold text-white mb-6">{content.faq.title}</h2>
          <p className="text-xl text-slate-300 mb-12">{content.faq.subtitle}</p>
          
          <div className="space-y-8">
            {content.faq.items.map((item, i) => (
              <div key={i} className="border-l-4 border-theme-primary pl-8">
                <h3 className="text-2xl font-bold text-white mb-3">{item.question}</h3>
                <p className="text-slate-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// FAQ LAYOUT 4: Split
export function FAQSplit() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="sticky top-24 h-fit">
            <h2 className="text-5xl font-bold text-white mb-6">{content.faq.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.faq.subtitle}</p>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <p className="text-3xl font-bold text-theme-primary mb-2">+500</p>
              <p className="text-slate-400">Perguntas respondidas este mês</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {content.faq.items.map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800 transition-colors"
                >
                  <span className="font-bold text-white pr-4">{item.question}</span>
                  <span className="text-theme-primary text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 py-4 border-t border-slate-800">
                    <p className="text-slate-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// FAQ LAYOUT 5: Compact
export function FAQCompact() {
  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800">
      <Container size="xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">{content.faq.title}</h2>
          <p className="text-lg text-slate-300">{content.faq.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {content.faq.items.map((item, i) => (
            <div key={i}>
              <h3 className="font-bold text-white text-lg mb-2">{item.question}</h3>
              <p className="text-slate-400 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FAQ LAYOUT 6: Banner
export function FAQBanner() {
  return (
    <section className="py-20 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.faq.title}</h2>
          <p className="text-2xl text-slate-300">{content.faq.subtitle}</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.faq.items.map((item, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <div className="text-4xl text-theme-primary mb-4">?</div>
              <h3 className="font-bold text-white text-xl mb-3">{item.question}</h3>
              <p className="text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FAQ LAYOUT 7: Masonry
export function FAQMasonry() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.faq.title}</h2>
          <p className="text-xl text-slate-300">{content.faq.subtitle}</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {content.faq.items.map((item, i) => (
            <div key={i} className="break-inside-avoid bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-theme-primary transition-colors">
              <div className="w-10 h-10 bg-theme-primary/20 rounded-full flex items-center justify-center text-theme-primary font-bold mb-4">
                Q
              </div>
              <h3 className="font-bold text-white mb-3">{item.question}</h3>
              <p className="text-sm text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FAQ LAYOUT 8: Interactive
export function FAQInteractive() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.faq.title}</h2>
          <p className="text-xl text-slate-300">{content.faq.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.faq.items.map((item, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-theme-primary/10 rounded-xl blur-xl group-hover:bg-theme-primary/30 transition-all" />
              <div className="relative bg-slate-900 border-2 border-slate-800 rounded-xl p-6 group-hover:border-theme-primary transition-colors cursor-pointer"
                   onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <h3 className="font-bold text-white mb-3 pr-8">{item.question}</h3>
                {openIndex === i && (
                  <p className="text-slate-400 text-sm">{item.answer}</p>
                )}
                <div className="absolute top-6 right-6 w-8 h-8 bg-theme-primary/20 rounded-full flex items-center justify-center text-theme-primary font-bold">
                  {openIndex === i ? "−" : "+"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FAQ LAYOUT 9: Cards with Numbers
export function FAQCards() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.faq.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.faq.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {content.faq.items.map((item, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-linear-to-br from-theme-primary to-theme-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold text-white text-lg mb-3">{item.question}</h3>
              <p className="text-sm text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// FAQ LAYOUT 10: Gradient
export function FAQGradient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent mb-4">
            {content.faq.title}
          </h2>
          <p className="text-xl text-slate-300">{content.faq.subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {content.faq.items.map((item, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-theme-primary/20 to-theme-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-slate-900 border border-theme-primary/30 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-bold text-white text-lg pr-4">{item.question}</span>
                  <span className="text-theme-primary text-2xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 py-4 border-t border-theme-primary/20 bg-slate-900/50">
                    <p className="text-slate-300">{item.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
