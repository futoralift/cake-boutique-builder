import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919762632539?text=Hi%20The%20Creamy%20Walnut,%20I%20want%20to%20order%20a%20cake.";

const WhatsAppButton = () => {
  return (
    <>
      {/* Desktop floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden md:flex w-16 h-16 rounded-full bg-[hsl(142,70%,45%)] items-center justify-center shadow-2xl animate-pulse-glow hover:scale-110 transition-transform duration-300 group"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-foreground fill-current" />
        {/* Tooltip */}
        <span className="absolute right-20 bg-card border border-border text-foreground text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Order Now 🎂
        </span>
      </a>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/90 backdrop-blur-xl border-t border-border">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[hsl(142,70%,45%)] text-foreground py-3.5 rounded-xl font-semibold text-base shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Order Cake Now
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
