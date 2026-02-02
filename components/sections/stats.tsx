"use client";

import { content } from "@/config/content";

export function Stats() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden px-4">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {content.stats.items.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-linear-to-r from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative text-4xl md:text-6xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
              </div>
              <div className="text-lg md:text-xl font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
