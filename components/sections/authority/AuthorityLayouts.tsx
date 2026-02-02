"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { MediaContainer } from "@/ui/MediaContainer";

// ========================================
// AUTHORITY LAYOUT 1: Grid Badges Only
// ========================================
export function AuthorityGridBadges() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.authority.title}</h2>
          <p className="text-xl text-slate-300">{content.authority.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.authority.badges.map((badge, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-theme-primary transition-colors">
              <div className="text-5xl mb-4">{badge.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{badge.title}</h3>
              <p className="text-sm text-slate-400">{badge.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ========================================
// AUTHORITY LAYOUT 2: Video Left + Badges Right
// ========================================
export function AuthorityVideoLeft() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {content.authority.featuredMedia && (
            <div className="relative rounded-2xl overflow-hidden">
              <MediaContainer
                type={content.authority.featuredMedia.type}
                src={content.authority.featuredMedia.src}
                alt={content.authority.featuredMedia.alt}
              />
            </div>
          )}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.authority.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.authority.subtitle}</p>
            <div className="space-y-4">
              {content.authority.badges.map((badge, i) => (
                <div key={i} className="flex gap-4 items-start bg-slate-800 border border-slate-700 rounded-xl p-4">
                  <div className="text-3xl">{badge.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{badge.title}</h3>
                    <p className="text-sm text-slate-400">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// AUTHORITY LAYOUT 3: Centered with Partners
// ========================================
export function AuthorityCenteredPartners() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.authority.title}</h2>
          <p className="text-xl text-slate-300 mb-12">{content.authority.subtitle}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {content.authority.badges.map((badge, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{badge.title}</h3>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-slate-400 mb-4">{content.authority.partnersLabel}</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {content.authority.partners.map((partner, i) => (
              <span key={i} className="text-slate-500 font-semibold text-lg">{partner}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// AUTHORITY LAYOUT 4: Video Center + Side Badges
// ========================================
export function AuthorityVideoCenter() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.authority.title}</h2>
          <p className="text-xl text-slate-300">{content.authority.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Badges */}
          <div className="space-y-4">
            {content.authority.badges.slice(0, 2).map((badge, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{badge.title}</h3>
                <p className="text-sm text-slate-400">{badge.description}</p>
              </div>
            ))}
          </div>
          
          {/* Video Center */}
          {content.authority.featuredMedia && (
            <div className="relative rounded-2xl overflow-hidden border-2 border-theme-primary/50">
              <MediaContainer
                type={content.authority.featuredMedia.type}
                src={content.authority.featuredMedia.src}
                alt={content.authority.featuredMedia.alt}
              />
            </div>
          )}
          
          {/* Right Badges */}
          <div className="space-y-4">
            {content.authority.badges.slice(2, 4).map((badge, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{badge.title}</h3>
                <p className="text-sm text-slate-400">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// AUTHORITY LAYOUT 5: Minimal List
// ========================================
export function AuthorityMinimalList() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.authority.title}</h2>
          <p className="text-xl text-slate-300 mb-12">{content.authority.subtitle}</p>
          
          <div className="space-y-6">
            {content.authority.badges.map((badge, i) => (
              <div key={i} className="border-l-4 border-theme-primary pl-6 py-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{badge.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{badge.title}</h3>
                </div>
                <p className="text-slate-400">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// AUTHORITY LAYOUT 6: Image Background
// ========================================
export function AuthorityImageBg() {
  return (
    <section className="relative py-20 overflow-hidden">
      {content.authority.featuredMedia && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <MediaContainer
            type="image"
            src={content.authority.featuredMedia.src}
            alt={content.authority.featuredMedia.alt}
            className="h-full"
          />
        </div>
      )}
      
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.authority.title}</h2>
          <p className="text-xl text-white/80">{content.authority.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.authority.badges.map((badge, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">{badge.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{badge.title}</h3>
              <p className="text-sm text-white/70">{badge.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ========================================
// AUTHORITY LAYOUT 7: Horizontal Scroll
// ========================================
export function AuthorityHorizontal() {
  return (
    <section className="py-20 bg-slate-900 overflow-hidden">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.authority.title}</h2>
          <p className="text-xl text-slate-300">{content.authority.subtitle}</p>
        </div>
      </Container>
      
      <div className="flex gap-6 px-6 overflow-x-auto pb-6 scrollbar-hide">
        {content.authority.badges.map((badge, i) => (
          <div key={i} className="shrink-0 w-72 sm:w-80 bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8 text-center snap-center">
            <div className="text-6xl mb-4">{badge.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{badge.title}</h3>
            <p className="text-slate-400">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ========================================
// AUTHORITY LAYOUT 8: Split with Stats
// ========================================
export function AuthoritySplitStats() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">{content.authority.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.authority.subtitle}</p>
            
            {/* Stats Mini */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {content.stats.items.slice(0, 4).map((stat, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-theme-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            {content.authority.badges.map((badge, i) => (
              <div key={i} className="flex gap-4 items-center bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-theme-primary transition-colors">
                <div className="text-4xl">{badge.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{badge.title}</h3>
                  <p className="text-sm text-slate-400">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// AUTHORITY LAYOUT 9: Compact Cards
// ========================================
export function AuthorityCompact() {
  return (
    <section className="py-20 bg-slate-900">
      <Container size="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.authority.title}</h2>
            <p className="text-xl text-slate-300">{content.authority.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.authority.badges.map((badge, i) => (
              <div key={i} className="aspect-square bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h3 className="text-sm font-bold text-white">{badge.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400 mb-4">{content.authority.partnersLabel}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {content.authority.partners.map((partner, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 text-sm">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ========================================
// AUTHORITY LAYOUT 10: Full Width Banner
// ========================================
export function AuthorityBanner() {
  return (
    <section className="py-20 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.authority.title}</h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">{content.authority.subtitle}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {content.authority.badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center gap-3 max-w-xs">
              <div className="w-20 h-20 bg-theme-primary/20 rounded-full flex items-center justify-center text-5xl">
                {badge.icon}
              </div>
              <h3 className="text-xl font-bold text-white text-center">{badge.title}</h3>
              <p className="text-sm text-slate-400 text-center">{badge.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center border-t border-slate-700 pt-8">
          <p className="text-slate-400 mb-4">{content.authority.partnersLabel}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {content.authority.partners.map((partner, i) => (
              <span key={i} className="text-slate-500 font-bold text-xl">{partner}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
