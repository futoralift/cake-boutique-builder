import { useState } from "react";
import { Menu, X, Cake } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Flavours", href: "#flavours" },
    { label: "Featured", href: "#featured" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <a href="#home" className="flex items-center gap-2">
            <Cake className="w-6 h-6 text-accent" />
            <span className="font-heading text-base md:text-lg font-bold text-foreground">
              The Creamy Walnut
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919762632539?text=Hi%20The%20Creamy%20Walnut,%20I%20want%20to%20order%20a%20cake."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity gold-glow"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-up">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919762632539?text=Hi%20The%20Creamy%20Walnut,%20I%20want%20to%20order%20a%20cake."
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-center text-sm font-semibold"
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
