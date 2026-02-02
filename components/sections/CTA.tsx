"use client";

import { content } from "@/config/content";
import { getWhatsAppUrl } from "@/lib/utils";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { Button } from "@/ui/Button";
import { WhatsAppIcon } from "@/ui/Icons";

export function CtaSplit() {
  return (
    <Section id="cta" background="dark" padding="lg">
      <Container size="xl">
        <div className="relative overflow-hidden bg-linear-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl sm:rounded-3xl">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12 xl:p-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{content.cta.title}</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8">{content.cta.subtitle}</p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={getWhatsAppUrl()}
                  icon={<WhatsAppIcon />}
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  {content.cta.button}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  href={getWhatsAppUrl()}
                  className="w-full sm:w-auto"
                >
                  {content.cta.buttonSecondary}
                </Button>
              </div>
              {content.cta?.note && (
                <p className="mt-4 text-xs sm:text-sm text-slate-400">
                  {content.cta.note}
                </p>
              )}
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-48 h-48 lg:w-64 lg:h-64 bg-linear-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <PhoneIcon className="w-24 h-24 lg:w-32 lg:h-32 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function CtaCentered() {
  return (
    <Section id="cta" background="darker" padding="lg">
      <Container size="md" className="text-center">
        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{content.cta.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10">{content.cta.subtitle}</p>
          
          <Button
            variant="primary"
            size="lg"
            href={getWhatsAppUrl()}
            icon={<WhatsAppIcon />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            {content.cta.button}
          </Button>
          {content.cta?.note && (
            <p className="mt-4 text-xs sm:text-sm text-slate-400">
              {content.cta.note}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}

export function CtaBanner() {
  return (
    <Section id="cta" background="dark" padding="md">
      <Container size="xl">
        <div className="relative overflow-hidden bg-linear-to-r from-green-400 to-emerald-500 rounded-2xl sm:rounded-3xl">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-950 mb-2">
                {content.cta.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-950/80">{content.cta.subtitle}</p>
              {content.cta?.note && (
                <p className="text-xs sm:text-sm text-slate-950/80 mt-2">
                  {content.cta.note}
                </p>
              )}
            </div>
            
            <Button
              variant="primary"
              size="lg"
              href={getWhatsAppUrl()}
              icon={<WhatsAppIcon />}
              iconPosition="left"
              className="w-full md:w-auto shrink-0"
            >
              {content.cta.button}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PhoneIcon({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
