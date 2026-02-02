"use client";

import { content } from "@/config/content";

// Layout 1: Grid de Badges (atual - mais completo e visual)
export function AuthorityGrid() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-slate-900/50">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {content.authority.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400">{content.authority.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {content.authority.badges.map((badge, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-linear-to-r from-green-400/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 text-center hover:border-green-500/50 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-slate-950">{badge.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{badge.title}</h3>
                <p className="text-slate-400 text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-400 mb-6 md:mb-8 text-base md:text-lg">{content.authority.partnersLabel}</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {content.authority.partners.map((partner, index) => (
              <div key={index} className="group relative">
                <div className="px-6 py-3 md:px-8 md:py-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all">
                  <span className="text-xl md:text-2xl font-bold text-slate-300 group-hover:text-green-400 transition-colors">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Layout 2: Stats Bar (horizontal com números em destaque)
export function AuthorityStats() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {content.authority.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400">{content.authority.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {content.authority.badges.map((badge, index) => (
            <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-xl md:text-2xl">{badge.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base md:text-lg mb-1">{badge.title}</h3>
                  <p className="text-slate-400 text-sm">{badge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8">
          <p className="text-center text-slate-400 mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider">{content.authority.partnersLabel}</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {content.authority.partners.map((partner, index) => (
              <span key={index} className="text-lg md:text-xl font-bold text-slate-300 hover:text-green-400 transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Layout 3: Minimal Clean (minimalista e corporativo)
export function AuthorityMinimal() {
  return (
    <section className="section relative overflow-hidden bg-slate-950">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            {content.authority.title}
          </h2>
          <p className="text-base md:text-lg text-slate-400">{content.authority.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {content.authority.badges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-linear-to-br from-green-400/10 to-emerald-500/10 rounded-full flex items-center justify-center group-hover:from-green-400/20 group-hover:to-emerald-500/20 transition-all">
                  <span className="text-3xl md:text-4xl">{badge.icon}</span>
                </div>
                <h3 className="font-bold mb-1 text-sm md:text-base">{badge.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm">{badge.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-10 md:pt-12">
            <p className="text-center text-slate-500 text-xs md:text-sm uppercase tracking-wider mb-6 md:mb-8">
              {content.authority.partnersLabel}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
              {content.authority.partners.map((partner, index) => (
                <span key={index} className="text-base md:text-lg font-semibold text-slate-400 hover:text-white transition-colors cursor-default">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
