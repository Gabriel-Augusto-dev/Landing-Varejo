"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/utils";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { SectionHeader } from "@/ui/SectionHeader";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Validações
      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error("Preencha todos os campos obrigatórios");
      }

      // Aqui você pode enviar para um backend
      // Por enquanto, vamos usar WhatsApp
      const message = `Olá! Meu nome é ${formData.name}\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\n\nMensagem: ${formData.message}`;
      const whatsappUrl = getWhatsAppUrl(message);

      // Abrir WhatsApp em nova aba
      window.open(whatsappUrl, "_blank");

      // Limpar form
      setFormData({ name: "", email: "", phone: "", message: "", service: "" });
      setStatus("success");

      // Reset status após 3s
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <Section id="contato" background="dark" padding="lg">
      <Container size="md">
        <SectionHeader
          badge="Entre em Contato"
          badgeIcon="📧"
          title="Vamos conversar sobre seu projeto"
          subtitle="Preencha o formulário abaixo e entraremos em contato em breve"
          align="center"
        />

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-theme-primary/50 text-white placeholder-slate-500 transition-colors"
                placeholder="Seu nome"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-theme-primary/50 text-white placeholder-slate-500 transition-colors"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-2">
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-theme-primary/50 text-white placeholder-slate-500 transition-colors"
                placeholder="(11) 98765-4321"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-200 mb-2">
                Serviço de Interesse
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-theme-primary/50 text-white placeholder-slate-500 transition-colors"
              >
                <option value="">Selecione um serviço</option>
                <option value="revisao">Revisão Completa</option>
                <option value="manutencao">Manutenção Preventiva</option>
                <option value="alinhamento">Alinhamento e Balanceamento</option>
                <option value="eletrica">Sistema Elétrico</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-theme-primary/50 text-white placeholder-slate-500 transition-colors resize-none"
              placeholder="Conte-nos mais sobre seu projeto..."
            />
          </div>

          {/* Status Message */}
          {status === "success" && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-sm">
              ✓ Formulário enviado! Você será redirecionado para o WhatsApp.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
              ✗ Erro ao enviar. Verifique os campos obrigatórios.
            </div>
          )}

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 lg:px-8 lg:py-4 gradient-primary text-slate-950 font-bold rounded-lg lg:rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
            </button>
            <p className="text-xs sm:text-sm text-slate-400 flex items-center">
              ⏱️ Você será redirecionado para WhatsApp para resposta rápida
            </p>
          </div>
        </form>
      </Container>
    </Section>
  );
}
