"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";

// TESTIMONIALS LAYOUT 1: Carousel
export function TestimonialsCarousel() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.testimonials.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.testimonials.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {content.testimonials.items.map((testimonial, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-xl text-white mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIALS LAYOUT 2: Grid
export function TestimonialsGrid() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.testimonials.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.testimonials.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {content.testimonials.items.map((testimonial, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-theme-primary transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t border-slate-800 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIALS LAYOUT 3: Masonry
export function TestimonialsMasonry() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.testimonials.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.testimonials.subtitle}</p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {content.testimonials.items.map((testimonial, i) => (
            <div key={i} className="break-inside-avoid bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-300 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIALS LAYOUT 4: Featured
export function TestimonialsFeatured() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured */}
          <div className="lg:col-span-2 bg-linear-to-br from-theme-primary/20 to-theme-secondary/20 border border-theme-primary/50 rounded-2xl p-12">
            <div className="flex gap-2 mb-6">
              {[...Array(content.testimonials.items[0].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-3xl">★</span>
              ))}
            </div>
            <p className="text-2xl text-white mb-8 italic">&ldquo;{content.testimonials.items[0].text}&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {content.testimonials.items[0].name[0]}
              </div>
              <div>
                <p className="text-xl font-bold text-white">{content.testimonials.items[0].name}</p>
                <p className="text-slate-300">{content.testimonials.items[0].role}</p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-4">
            {content.testimonials.items.slice(1).map((testimonial, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-slate-300 mb-3 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-bold text-white text-sm">{testimonial.name}</p>
                <p className="text-xs text-slate-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIALS LAYOUT 5: Minimal
export function TestimonialsMinimal() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">{content.testimonials.title}</h2>
          <p className="text-xl text-slate-300 mb-12">{content.testimonials.subtitle}</p>
          
          <div className="space-y-8">
            {content.testimonials.items.map((testimonial, i) => (
              <div key={i} className="border-l-4 border-theme-primary pl-8">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-xl text-white mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIALS LAYOUT 6: Compact
export function TestimonialsCompact() {
  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800">
      <Container size="xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">{content.testimonials.title}</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {content.testimonials.items.map((testimonial, i) => (
            <div key={i} className="max-w-sm bg-slate-800/50 rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-300 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-bold text-white text-sm">{testimonial.name}</p>
              <p className="text-xs text-slate-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIALS LAYOUT 7: Banner
export function TestimonialsBanner() {
  return (
    <section className="py-20 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.testimonials.title}</h2>
          <p className="text-2xl text-slate-300">{content.testimonials.subtitle}</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-theme-primary/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {testimonial.name[0]}
                </div>
                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-white mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIALS LAYOUT 8: Split
export function TestimonialsSplit() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">{content.testimonials.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.testimonials.subtitle}</p>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-2xl font-bold text-theme-primary mb-4">4.9/5.0</p>
              <p className="text-slate-400">Baseado em +500 avaliações</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {content.testimonials.items.map((testimonial, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <span key={j} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIALS LAYOUT 9: Cards with Images
export function TestimonialsCards() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.testimonials.title}</h2>
          <p className="text-xl text-slate-300">{content.testimonials.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.items.map((testimonial, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-linear-to-br from-theme-primary to-theme-secondary rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
                {testimonial.name[0]}
              </div>
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-bold text-white text-lg">{testimonial.name}</p>
              <p className="text-sm text-slate-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIALS LAYOUT 10: Interactive
export function TestimonialsInteractive() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.testimonials.title}</h2>
          <p className="text-xl text-slate-300">{content.testimonials.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.testimonials.items.map((testimonial, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-theme-primary/10 rounded-xl blur-xl group-hover:bg-theme-primary/30 transition-all" />
              <div className="relative bg-slate-900 border-2 border-slate-800 rounded-xl p-6 group-hover:border-theme-primary transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-theme-primary to-theme-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-300 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
