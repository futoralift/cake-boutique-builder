import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919762632539?text=Hi%20The%20Creamy%20Walnut,%20I%20want%20to%20order%20a%20cake.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex w-14 h-14 md:w-16 md:h-16 rounded-full bg-[hsl(142,70%,45%)] items-center justify-center shadow-2xl animate-pulse-glow hover:scale-110 transition-transform duration-300 group"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-foreground fill-current" />
      {/* Tooltip */}
      <span className="absolute right-16 md:right-20 bg-card border border-border text-foreground text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Order Now 🎂
      </span>
    </a>
  );
};

export default WhatsAppButton;
