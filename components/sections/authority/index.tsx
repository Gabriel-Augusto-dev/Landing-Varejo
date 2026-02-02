"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { SectionHeader } from "@/ui/SectionHeader";
import { Grid } from "@/ui/Grid";
import { Card } from "@/ui/Card";

export {
  AuthorityGridBadges,
  AuthorityVideoLeft,
  AuthorityCenteredPartners,
  AuthorityVideoCenter,
  AuthorityMinimalList,
  AuthorityImageBg,
  AuthorityHorizontal,
  AuthoritySplitStats,
  AuthorityCompact,
  AuthorityBanner,
} from "./AuthorityLayouts";

// Layout 1: Grid de Badges (atual - mais completo e visual)
export function AuthorityGrid() {
  return (
    <Section id="authority" background="darker" padding="lg">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={content.authority.title}
          subtitle={content.authority.subtitle}
          align="center"
        />

        <Grid cols={{ default: 1, sm: 2, lg: 4 }} gap="lg" className="mb-12 sm:mb-16">
          {content.authority.badges.map((badge, index) => (
            <Card key={index} hover glow className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-slate-950">{badge.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{badge.title}</h3>
              <p className="text-slate-400 text-sm sm:text-base">{badge.description}</p>
            </Card>
          ))}
        </Grid>

        <div className="text-center">
          <p className="text-slate-400 mb-6 sm:mb-8 text-base sm:text-lg">{content.authority.partnersLabel}</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {content.authority.partners.map((partner, index) => (
              <div key={index} className="group relative">
                <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-300 group-hover:text-green-400 transition-colors">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Layout 2: Stats Bar (horizontal com números em destaque)
export function AuthorityStats() {
  return (
    <Section id="authority" background="gradient" padding="lg">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container size="xl" className="relative z-10">
        <SectionHeader
          title={content.authority.title}
          subtitle={content.authority.subtitle}
          align="center"
        />

        <Grid cols={{ default: 1, sm: 2, lg: 4 }} gap="md" className="mb-8 sm:mb-12">
          {content.authority.badges.map((badge, index) => (
            <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-6 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-xl sm:text-2xl">{badge.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg mb-1 truncate">{badge.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2">{badge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Grid>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8">
          <p className="text-center text-slate-400 mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">{content.authority.partnersLabel}</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {content.authority.partners.map((partner, index) => (
              <span key={index} className="text-base sm:text-lg lg:text-xl font-bold text-slate-300 hover:text-green-400 transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Layout 3: Minimal Clean (minimalista e corporativo)
export function AuthorityMinimal() {
  return (
    <Section id="authority" background="dark" padding="lg">
      <Container size="lg" className="relative z-10">
        <SectionHeader
          title={content.authority.title}
          subtitle={content.authority.subtitle}
          align="center"
        />

        <div className="max-w-5xl mx-auto">
          <Grid cols={{ default: 2, lg: 4 }} gap="lg" className="mb-12 sm:mb-16">
            {content.authority.badges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-linear-to-br from-green-400/10 to-emerald-500/10 rounded-full flex items-center justify-center group-hover:from-green-400/20 group-hover:to-emerald-500/20 transition-all">
                  <span className="text-3xl sm:text-4xl">{badge.icon}</span>
                </div>
                <h3 className="font-bold mb-1 text-sm sm:text-base">{badge.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm">{badge.description}</p>
              </div>
            ))}
          </Grid>

          <div className="border-t border-slate-800 pt-8 sm:pt-12">
            <p className="text-center text-slate-500 text-xs sm:text-sm uppercase tracking-wider mb-6 sm:mb-8">
              {content.authority.partnersLabel}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 sm:gap-x-12 sm:gap-y-6">
              {content.authority.partners.map((partner, index) => (
                <span key={index} className="text-base sm:text-lg font-semibold text-slate-400 hover:text-white transition-colors cursor-default">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
