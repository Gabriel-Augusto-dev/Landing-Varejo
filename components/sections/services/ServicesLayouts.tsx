"use client";

import { content } from "@/config/content";
import { Container } from "@/ui/Container";
import { MediaContainer } from "@/ui/MediaContainer";

// SERVICE LAYOUT 1: Grid with Gallery
export function ServicesGridGallery() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.services.title}</h2>
          <p className="text-xl text-slate-300">{content.services.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content.services.items.map((service, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-theme-primary transition-colors">
              <div className="text-5xl mb-4">{service.icon}</div>
              <span className="inline-block px-3 py-1 bg-theme-primary/20 text-theme-primary text-xs font-bold rounded-full mb-3">
                {service.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="text-theme-primary">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Gallery */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">{content.services.gallery.title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.services.gallery.items.map((item, i) => (
            <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
              <MediaContainer type={item.type} src={item.src} alt={item.alt} className="hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// SERVICE LAYOUT 2: List with Image
export function ServicesListImage() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">{content.services.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{content.services.subtitle}</p>
            
            <div className="space-y-6">
              {content.services.items.map((service, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-4xl shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {content.services.gallery.items.map((item, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden">
                <MediaContainer type={item.type} src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// SERVICE LAYOUT 3: Tabs Style
export function ServicesTabs() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.services.title}</h2>
          <p className="text-xl text-slate-300">{content.services.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {content.services.items.map((service, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center hover:border-theme-primary transition-colors cursor-pointer">
              <div className="text-4xl mb-2">{service.icon}</div>
              <h3 className="text-sm font-bold text-white">{service.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">{content.services.items[0].title}</h3>
          <p className="text-slate-400 mb-6">{content.services.items[0].description}</p>
          <ul className="grid grid-cols-2 gap-3">
            {content.services.items[0].features.map((feature, i) => (
              <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                <span className="text-theme-primary text-xl">✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

// SERVICE LAYOUT 4: Carousel
export function ServicesCarousel() {
  return (
    <section className="py-20 bg-slate-950 overflow-hidden">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.services.title}</h2>
          <p className="text-xl text-slate-300">{content.services.subtitle}</p>
        </div>
      </Container>
      
      <div className="flex gap-6 px-6 overflow-x-auto pb-6 scrollbar-hide">
        {content.services.items.map((service, i) => (
          <div key={i} className="shrink-0 w-96 bg-slate-900 border border-slate-800 rounded-xl p-8">
            <div className="text-5xl mb-4">{service.icon}</div>
            <span className="inline-block px-3 py-1 bg-theme-primary/20 text-theme-primary text-xs font-bold rounded-full mb-4">
              {service.tag}
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, j) => (
                <li key={j} className="text-sm text-slate-400 flex items-center gap-2">
                  <span className="text-theme-primary">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// SERVICE LAYOUT 5: Accordion
export function ServicesAccordion() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.services.title}</h2>
          <p className="text-xl text-slate-300">{content.services.subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {content.services.items.map((service, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-6 flex items-center gap-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-theme-primary/20 text-theme-primary text-xs font-bold rounded-full mb-2">
                    {service.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="px-6 pb-6 border-t border-slate-800 pt-4">
                <p className="text-slate-400 mb-4">{service.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="text-theme-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// SERVICE LAYOUT 6: Two Columns
export function ServicesTwoCol() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.services.title}</h2>
          <p className="text-xl text-slate-300">{content.services.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.services.items.map((service, i) => (
            <div key={i} className="flex gap-6 bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-theme-primary transition-colors">
              <div className="text-5xl shrink-0">{service.icon}</div>
              <div>
                <span className="inline-block px-3 py-1 bg-theme-primary/20 text-theme-primary text-xs font-bold rounded-full mb-3">
                  {service.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="text-theme-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// SERVICE LAYOUT 7: Minimal List
export function ServicesMinimal() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold text-white mb-6">{content.services.title}</h2>
          <p className="text-xl text-slate-300 mb-12">{content.services.subtitle}</p>
          
          <div className="space-y-8">
            {content.services.items.map((service, i) => (
              <div key={i} className="border-l-4 border-theme-primary pl-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-5xl">{service.icon}</span>
                  <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-400">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// SERVICE LAYOUT 8: Masonry Grid
export function ServicesMasonry() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950 px-4">
      <Container size="xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{content.services.title}</h2>
          <p className="text-lg md:text-xl text-slate-300">{content.services.subtitle}</p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {content.services.items.map((service, i) => (
            <div key={i} className="break-inside-avoid bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-theme-primary transition-colors">
              <div className="text-4xl mb-4">{service.icon}</div>
              <span className="inline-block px-3 py-1 bg-theme-primary/20 text-theme-primary text-xs font-bold rounded-full mb-3">
                {service.tag}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature, j) => (
                  <li key={j} className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="text-theme-primary">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// SERVICE LAYOUT 9: Featured with Sidebar
export function ServicesFeatured() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Service */}
          <div className="lg:col-span-2 bg-linear-to-br from-theme-primary/20 to-theme-secondary/20 border border-theme-primary/50 rounded-2xl p-8">
            <span className="inline-block px-4 py-2 bg-theme-primary text-white text-sm font-bold rounded-full mb-4">
              {content.services.items[0].tag}
            </span>
            <div className="text-6xl mb-6">{content.services.items[0].icon}</div>
            <h2 className="text-4xl font-bold text-white mb-4">{content.services.items[0].title}</h2>
            <p className="text-xl text-slate-300 mb-6">{content.services.items[0].description}</p>
            <ul className="grid grid-cols-2 gap-3">
              {content.services.items[0].features.map((feature, i) => (
                <li key={i} className="text-slate-300 flex items-center gap-2">
                  <span className="text-theme-primary text-2xl">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Other Services */}
          <div className="space-y-4">
            {content.services.items.slice(1).map((service, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-theme-primary transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-sm text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// SERVICE LAYOUT 10: Pricing Cards
export function ServicesPricing() {
  return (
    <section className="py-20 bg-slate-950">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.services.title}</h2>
          <p className="text-xl text-slate-300">{content.services.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.items.map((service, i) => (
            <div key={i} className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-8 hover:border-theme-primary transition-all hover:scale-105 text-center">
              <div className="text-6xl mb-4">{service.icon}</div>
              <span className="inline-block px-4 py-2 bg-theme-primary/20 text-theme-primary text-sm font-bold rounded-full mb-4">
                {service.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.description}</p>
              <div className="border-t border-slate-800 pt-6 space-y-3">
                {service.features.map((feature, j) => (
                  <div key={j} className="text-sm text-slate-300 flex items-center justify-center gap-2">
                    <span className="text-theme-primary">✓</span> {feature}
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full px-6 py-3 bg-theme-primary text-white rounded-lg font-bold hover:bg-theme-primary/80 transition-colors">
                Solicitar
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
