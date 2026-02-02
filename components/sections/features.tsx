"use client";

import { content } from "@/config/content";
import { getWhatsAppUrl } from "@/lib/utils";

export function FeaturesGrid() {
  return (
    <section className="section bg-slate-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-400">{content.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.items.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-green-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <CheckIcon />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesList() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-400">{content.features.subtitle}</p>
        </div>

        <div className="space-y-6">
          {content.features.items.map((feature, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-slate-800/30 border border-slate-700 rounded-xl hover:border-green-500/50 transition-all"
            >
              <div className="shrink-0 w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <CheckIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesCards() {
  return (
    <section className="section bg-slate-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-400">{content.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.features.items.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden p-8 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-all" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesBento() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{content.features.title}</h2>
          <p className="text-xl text-slate-400">{content.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
          {content.features.items.map((feature, index) => (
            <div
              key={index}
              className={`p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-green-500/50 transition-all ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
