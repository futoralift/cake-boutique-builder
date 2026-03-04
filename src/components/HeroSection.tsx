import { Cake, MessageCircle } from "lucide-react";
import heroCake from "@/assets/hero-cake.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCake}
          alt="Premium bakery interior with golden lighting"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-24">
        {/* Small tagline */}
        <p
          className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-accent font-medium mb-6 animate-fade-up"
        >
          Different Style Cake
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="w-8 sm:w-12 h-px bg-accent/40" />
          <Cake className="w-4 h-4 text-accent/60" />
          <span className="w-8 sm:w-12 h-px bg-accent/40" />
        </div>

        {/* Main heading */}
        <h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-4 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          The Creamy
          <br />
          <span className="text-gold-gradient">Walnut</span>
        </h1>

        {/* Subheading */}
        <p
          className="font-heading text-lg sm:text-xl md:text-2xl italic text-accent/80 mb-5 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Love At First Bite
        </p>

        {/* Description */}
        <p
          className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          Freshly baked happiness for every celebration. Premium cakes crafted
          with love and the finest ingredients.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#flavours"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-full font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-all duration-300 gold-glow gold-glow-hover"
          >
            <Cake className="w-4 h-4" />
            Explore Flavours
          </a>
          <a
            href="https://wa.me/919762632539?text=Hi%20The%20Creamy%20Walnut,%20I%20want%20to%20order%20a%20cake."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-accent/40 text-accent px-7 py-3 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-accent/10 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
