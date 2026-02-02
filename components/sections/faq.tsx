"use client";

import { content } from "@/config/content";
import { useState } from "react";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{content.faq.title}</h2>
          <p className="text-lg md:text-xl text-slate-400">{content.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {content.faq.items.map((item, index) => (
            <div
              key={index}
              className="border border-slate-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-slate-800/50 hover:bg-slate-800 transition-all"
              >
                <span className="font-bold text-base md:text-lg pr-8">{item.question}</span>
                <ChevronIcon isOpen={openIndex === index} />
              </button>
              {openIndex === index && (
                <div className="p-6 bg-slate-900/50 border-t border-slate-700">
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqGrid() {
  return (
    <section className="section bg-slate-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{content.faq.title}</h2>
          <p className="text-lg md:text-xl text-slate-400">{content.faq.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {content.faq.items.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-green-500/50 transition-all"
            >
              <h3 className="font-bold text-lg md:text-xl mb-4 text-green-400">{item.question}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const item = content.faq.items[activeTab];

  return (
    <section className="section">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{content.faq.title}</h2>
          <p className="text-lg md:text-xl text-slate-400">{content.faq.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="space-y-2">
            {content.faq.items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 rounded-xl transition-all text-sm md:text-base ${
                  activeTab === index
                    ? "bg-green-500 text-black font-bold"
                    : "bg-slate-800/50 border border-slate-700 hover:border-green-500/50"
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>

          <div className="md:col-span-2 p-6 md:p-8 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <h3 className="font-bold text-xl md:text-2xl mb-6 text-green-400">{item.question}</h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-6 h-6 text-green-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
