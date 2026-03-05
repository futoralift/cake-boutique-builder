import { useState } from "react";
import { Cake, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

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
  { id: "chocolate", label: "🍫 Chocolate", flavours: chocolateFlavours },
  { id: "fruit", label: "🍍 Fruit & Special", flavours: fruitFlavours },
];

const WHATSAPP_BASE = "https://wa.me/919762632539?text=";

const FlavourShowcase = () => {
  const [activeTab, setActiveTab] = useState("chocolate");
  const activeFlavours = tabs.find((t) => t.id === activeTab)!.flavours;

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
              className={`px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
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
          {activeFlavours.map((flavour) => (
            <motion.a
              key={flavour}
              href={`${WHATSAPP_BASE}Hi, I want to order ${encodeURIComponent(flavour)} cake.`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-luxury p-4 text-center group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Cake className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-foreground mb-2 leading-tight">{flavour}</h3>
              <span className="inline-flex items-center gap-1 text-[10px] text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ShoppingBag className="w-3 h-3" />
                Order
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FlavourShowcase;
