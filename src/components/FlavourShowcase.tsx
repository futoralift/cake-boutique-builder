import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import chocolateCakeImg from "@/assets/chocolate-cake-flavour.png";
import fruitCakeImg from "@/assets/fruit-cake-flavour.png";
import zebraChocolateImg from "@/assets/zebra-chocolate.jpeg";
import kiwiCakeImg from "@/assets/kiwi-cake.jpeg";
import darkFantasyImg from "@/assets/dark-fantasy.jpeg";
import blackForestImg from "@/assets/black-forest.jpeg";
import mangoCakeImg from "@/assets/mango-cake.jpeg";

const chocolateFlavours = [
  { name: "Zebra Chocolate", image: zebraChocolateImg },
  { name: "Dark Fantasy", image: darkFantasyImg },
  { name: "Black Forest", image: blackForestImg },
  { name: "Kivan Crunchy", image: chocolateCakeImg },
  { name: "Truffle Chocolate", image: chocolateCakeImg },
  { name: "Belgium Chocolate", image: chocolateCakeImg },
  { name: "Oreo Chocolate", image: chocolateCakeImg },
  { name: "Ferrero Rocher Chocolate", image: chocolateCakeImg },
  { name: "Hazelnut Chocolate", image: chocolateCakeImg },
  { name: "Royal Chocolate", image: chocolateCakeImg },
  { name: "Kit Kat", image: chocolateCakeImg },
  { name: "Caramel Chocolate", image: chocolateCakeImg },
  { name: "Almond Truffle", image: chocolateCakeImg },
  { name: "Choco Blueberry", image: chocolateCakeImg },
  { name: "Classic Chocolate", image: chocolateCakeImg },
  { name: "Coffee Truffle", image: chocolateCakeImg },
];

const fruitFlavours = [
  { name: "Mango Cake", image: mangoCakeImg },
  { name: "Kiwi Cake", image: kiwiCakeImg },
  { name: "Choco Pineapple", image: fruitCakeImg },
  { name: "Tiramisu", image: fruitCakeImg },
  { name: "Coffee", image: fruitCakeImg },
  { name: "Pineapple Cake", image: fruitCakeImg },
  { name: "Blueberry", image: fruitCakeImg },
  { name: "Litchi Cake", image: fruitCakeImg },
  { name: "Strawberry", image: fruitCakeImg },
  { name: "Butter Scotch", image: fruitCakeImg },
  { name: "Mango Kiwi", image: fruitCakeImg },
  { name: "Mix Fruit", image: fruitCakeImg },
  { name: "Rose Petal", image: fruitCakeImg },
  { name: "Gulab Jamun", image: fruitCakeImg },
  { name: "Rasmalai", image: fruitCakeImg },
  { name: "Red Velvet", image: fruitCakeImg },
  { name: "Vanilla Dry Fruit", image: fruitCakeImg },
  { name: "White Forest", image: fruitCakeImg },
  { name: "Black Currant", image: fruitCakeImg },
  { name: "Green Apple", image: fruitCakeImg },
];

const tabs = [
  { id: "chocolate", label: "🍫 Chocolate", flavours: chocolateFlavours },
  { id: "fruit", label: "🍍 Fruit & Special", flavours: fruitFlavours },
];

const WHATSAPP_BASE = "https://wa.me/919762632539?text=";

const FlavourShowcase = () => {
  const [activeTab, setActiveTab] = useState("chocolate");
  const activeTabData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="flavours" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xs font-medium tracking-wider uppercase">Our Menu</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            Explore Our <span className="text-gold-gradient">Flavours</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            From rich chocolate indulgence to fresh fruit delights — find your perfect cake.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${activeTab === tab.id
                  ? "bg-accent text-accent-foreground gold-glow"
                  : "bg-card border border-border text-muted-foreground hover:border-accent/30"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {activeTabData.flavours.map((flavour) => (
            <motion.a
              key={flavour.name}
              href={`${WHATSAPP_BASE}Hi, I want to order ${encodeURIComponent(flavour.name)} cake.`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-luxury overflow-hidden group cursor-pointer flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={flavour.image}
                  alt={flavour.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-3 flex flex-col items-center text-center gap-2 flex-1">
                <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
                  {flavour.name}
                </h3>
                <span className="mt-auto inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider hover:opacity-90 transition-opacity">
                  <ShoppingBag className="w-3 h-3" />
                  Order Now
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FlavourShowcase;
