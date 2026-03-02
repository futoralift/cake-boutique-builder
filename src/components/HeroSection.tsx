import { Cake, MessageCircle } from "lucide-react";
import heroCake from "@/assets/hero-cake.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
      
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
          <img
            src={heroCake}
            alt="Premium layered chocolate cake with gold decorations"
            className="w-full h-full object-cover opacity-60 md:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent tracking-wider uppercase">
              Different Style Cake
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">The</span>
            <br />
            <span className="text-gold-gradient">Creamy</span>
            <br />
            <span className="text-foreground">Walnut</span>
          </h1>

          {/* Tagline */}
          <p className="font-heading text-xl md:text-2xl italic text-accent/80 mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Love At First Bite
          </p>

          <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Freshly baked happiness for every celebration. Premium cakes crafted with love and the finest ingredients.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#flavours"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-all duration-300 gold-glow gold-glow-hover"
            >
              <Cake className="w-5 h-5" />
              Explore Flavours
            </a>
            <a
              href="https://wa.me/919762632539?text=Hi%20The%20Creamy%20Walnut,%20I%20want%20to%20order%20a%20cake."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-accent/30 text-accent px-8 py-4 rounded-xl font-semibold text-base hover:bg-accent/10 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
