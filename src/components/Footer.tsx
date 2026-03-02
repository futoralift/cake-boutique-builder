import { Cake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-12 md:pb-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Cake className="w-6 h-6 text-accent" />
            <span className="font-heading text-xl font-bold text-foreground">The Creamy Walnut</span>
          </div>
          <p className="text-muted-foreground text-sm mb-2">Different Style Cake · Love At First Bite</p>
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} The Creamy Walnut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
