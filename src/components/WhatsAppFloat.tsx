import { MessageCircle } from "lucide-react";
import { BUSINESS, whatsappLink } from "@/lib/config";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Hello ${BUSINESS.brandName}, I would like to enquire about solar solutions.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${BUSINESS.brandName} on WhatsApp`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.19_150)] text-white shadow-lift transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
