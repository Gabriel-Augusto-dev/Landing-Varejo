"use client";

import { content } from "@/config/content";
import { getWhatsAppUrl } from "@/lib/utils";
import { useState } from "react";

// Layout 1: Cards Interativos (atual - mais moderno e visual)
export function ServicesCards() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="section relative overflow-hidden" id="servicos">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <span>●</span>
            <span>O que fazemos por você</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            {content.services.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400">{content.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.services.items.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveService(index)}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-3xl blur-2xl transition-opacity duration-500 ${
                activeService === index ? "opacity-100" : "opacity-0"
              }`} />
              
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 md:p-8 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="absolute top-6 right-6 w-12 h-12 md:w-16 md:h-16 bg-linear-to-br from-green-400/10 to-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl md:text-4xl">{service.icon}</span>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium">
                    {service.tag}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-2 pt-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckIcon className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold group/link mt-4 text-sm md:text-base"
                  >
                    <span>Solicitar orçamento</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-green-400 to-emerald-500 text-slate-950 font-bold rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 transition-all text-base md:text-lg"
          >
            <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />
            <span>Falar com Especialista Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Layout 2: Accordion (lista expansível - profissional e compacto)
export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section relative overflow-hidden bg-slate-950" id="servicos">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <span>●</span>
            <span>O que fazemos por você</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {content.services.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400">{content.services.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {content.services.items.map((service, index) => (
            <div key={index} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl md:text-3xl">{service.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
                      <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-xs font-medium">
                        {service.tag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{service.description}</p>
                  </div>
                </div>
                <ChevronIcon className={`w-6 h-6 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-slate-800">
                  <ul className="grid md:grid-cols-2 gap-3 mt-6 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckIcon className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-400 to-emerald-500 text-slate-950 font-bold rounded-xl hover:scale-105 transition-all text-sm md:text-base"
                  >
                    <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Solicitar Orçamento</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Layout 3: Grid Simples (clean e corporativo)
export function ServicesGrid() {
  return (
    <section className="section relative overflow-hidden bg-slate-950" id="servicos">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {content.services.title}
          </h2>
          <p className="text-base md:text-lg text-slate-400">{content.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 md:mb-12">
          {content.services.items.map((service, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-green-500/30 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-green-400/10 to-emerald-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded mb-2">
                    {service.tag}
                  </span>
                  <h3 className="text-base md:text-lg font-bold mb-2">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckIcon className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${service.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-sm group/link"
              >
                <span>Saiba mais</span>
                <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-green-400 to-emerald-500 text-slate-950 font-bold rounded-xl hover:scale-105 transition-all text-sm md:text-base"
          >
            <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span>Falar com Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Ícones compartilhados
function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function ChevronIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
