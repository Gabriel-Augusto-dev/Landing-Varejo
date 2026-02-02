import { content } from "@/config/content";

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || content.whatsapp.message;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${content.whatsapp.number}?text=${encodedMessage}`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
