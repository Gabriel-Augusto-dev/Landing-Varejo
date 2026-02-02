"use client";

import { getWhatsAppUrl } from "@/lib/utils";
import { useEffect, useState } from "react";

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    const pulseTimer = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(pulseTimer);
    };
  }, []);

  return (
    <>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className="relative">
          <div className={`absolute inset-0 bg-theme-secondary rounded-full blur-xl transition-all ${
            isPulsing ? "scale-150 opacity-75" : "scale-100 opacity-50"
          }`} />
          
          <div className="relative gradient-primary p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
            style={{ boxShadow: '0 20px 60px rgb(var(--secondary) / 0.5)' }}>
            <WhatsAppIcon className="w-8 h-8 text-white" />
          </div>

          <div className="absolute -top-1 -right-1 w-6 h-6 bg-theme-error rounded-full flex items-center justify-center border-2 border-dark animate-bounce">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>

        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-elevated text-white px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-theme">
          <span className="font-semibold">Fale conosco agora!</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-elevated border-r border-b border-theme" />
        </div>
      </a>

      {isVisible && (
        <div className="fixed bottom-24 right-6 z-40 bg-white text-slate-900 px-6 py-4 rounded-2xl shadow-2xl border-2 border-theme-secondary max-w-xs animate-slide-in-up">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white text-lg">👋</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm mb-1">Precisa de ajuda?</p>
              <p className="text-xs text-slate-600">Clique aqui e fale com um especialista agora!</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsVisible(false);
              }}
              className="text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function WhatsAppIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
