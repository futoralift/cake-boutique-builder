import { useState } from "react";
import { Cake, ShoppingBag } from "lucide-react";

const chocolateFlavours = [
  "Kivan Crunchy", "Truffle Chocolate", "Belgium Chocolate", "Oreo Chocolate",
  "Ferrero Rocher Chocolate", "Hazelnut Chocolate", "Royal Chocolate", "Kit Kat",
  "Caramel Chocolate", "Almond Truffle", "Choco Blueberry", "Classic Chocolate",
  "Zebra Chocolate", "Coffee Truffle",
];

const fruitFlavours = [
  "Choco Pineapple", "Dark Fantasy", "Black Forest", "Tiramisu", "Coffee",
  "Pineapple Cake", "Blueberry", "Mango Cake", "Kiwi Cake", "Litchi Cake",
  "Strawberry", "Butter Scotch", "Mango Kiwi", "Mix Fruit", "Rose Petal",
  "Gulab Jamun", "Rasmalai", "Red Velvet", "Vanilla Dry Fruit", "White Forest",
  "Black Currant", "Green Apple",
];

const tabs = [
  { id: "chocolate", label: "🍫 Chocolate Flavours", flavours: chocolateFlavours },
  { id: "fruit", label: "🍍 Fruit & Special", flavours: fruitFlavours },
];

const WHATSAPP_BASE = "https://wa.me/919762632539?text=";

const FlavourShowcase = () => {
  const [activeTab, setActiveTab] = useState("chocolate");
  const activeFlavours = tabs.find((t) => t.id === activeTab)!.flavours;

  return (
    <section id="flavours" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Our Menu</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 text-foreground">
            Explore Our <span className="text-gold-gradient">Flavours</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            From rich chocolate indulgence to fresh fruit delights — find your perfect cake.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-accent text-accent-foreground gold-glow"
                  : "bg-card border border-border text-muted-foreground hover:border-accent/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {activeFlavours.map((flavour, i) => (
            <div
              key={flavour}
              className="card-luxury p-5 text-center group cursor-pointer"
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Cake className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-3 leading-tight">{flavour}</h3>
              <a
                href={`${WHATSAPP_BASE}Hi, I want to order ${encodeURIComponent(flavour)} cake.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ShoppingBag className="w-3 h-3" />
                Order Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavourShowcase;
