"use client";

import { content } from "@/config/content";
import { useState } from "react";

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section bg-slate-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{content.testimonials.title}</h2>
          <p className="text-lg md:text-xl text-slate-400">{content.testimonials.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {content.testimonials.items.map((testimonial, index) => (
                  <div key={index} className="w-full shrink-0 px-4">
                    <div className="p-6 md:p-8 lg:p-12 bg-slate-800 border border-slate-700 rounded-3xl">
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 italic">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <div className="font-bold text-base md:text-lg">{testimonial.name}</div>
                        <div className="text-slate-400 text-sm md:text-base">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {content.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? "bg-green-500 w-8" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{content.testimonials.title}</h2>
          <p className="text-lg md:text-xl text-slate-400">{content.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-green-500/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic text-sm md:text-base">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-sm md:text-base">{testimonial.name}</div>
                <div className="text-xs md:text-sm text-slate-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsMasonry() {
  return (
    <section className="section bg-slate-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{content.testimonials.title}</h2>
          <p className="text-lg md:text-xl text-slate-400">{content.testimonials.subtitle}</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {content.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid p-6 md:p-8 bg-slate-800 border border-slate-700 rounded-2xl hover:border-green-500/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-slate-300 mb-6 text-sm md:text-base">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold text-base md:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
