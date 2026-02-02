"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";

// STATS LAYOUT 1: Horizontal Row
export function StatsHorizontal() {
  return (
    <section className="py-12 bg-slate-900">
      <Container size="xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-theme-primary mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// STATS LAYOUT 2: Cards with Background
export function StatsCards() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center hover:border-theme-primary transition-colors">
              <div className="text-6xl font-bold text-theme-primary mb-3">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// STATS LAYOUT 3: Gradient Cards
export function StatsGradient() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="bg-linear-to-br from-theme-primary/20 to-theme-secondary/20 border border-theme-primary/50 rounded-xl p-8 text-center">
              <div className="text-6xl font-bold text-white mb-3">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-sm text-slate-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// STATS LAYOUT 4: Minimal Dividers
export function StatsMinimal() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="lg">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-bold text-theme-primary mb-2">{stat.number}</div>
              <div className="text-base text-white font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
              {i < content.stats.items.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-700" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// STATS LAYOUT 5: Large Numbers
export function StatsLarge() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="text-8xl font-black text-theme-primary/20">{stat.number}</div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">{stat.label}</div>
                <div className="text-slate-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// STATS LAYOUT 6: Circular
export function StatsCircular() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-slate-800 border-4 border-theme-primary flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-theme-primary">{stat.number}</div>
                  <div className="text-sm text-white">{stat.label}</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 text-center">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// STATS LAYOUT 7: Split Background
export function StatsSplit() {
  return (
    <section className="relative py-20 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="text-5xl font-bold text-theme-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// STATS LAYOUT 8: Compact Banner
export function StatsCompact() {
  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800">
      <Container size="xl">
        <div className="flex flex-wrap justify-around items-center gap-8">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-5xl font-bold text-theme-primary">{stat.number}</div>
              <div>
                <div className="text-sm font-semibold text-white">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// STATS LAYOUT 9: Grid with Icons
export function StatsIcons() {
  const icons = ["⚡", "🎯", "⭐", "🚀"];
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">{icons[i]}</div>
              <div className="text-5xl font-bold text-theme-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// STATS LAYOUT 10: Animated Counters
export function StatsAnimated() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.stats.items.map((stat, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-theme-primary/10 rounded-xl blur-xl group-hover:bg-theme-primary/20 transition-all" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
                <div className="text-6xl font-bold bg-linear-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
