import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

// Import new images
import img1 from "@/assets/new_images/IMG20260308114828compresed.jpg";
import img2 from "@/assets/new_images/IMG20260308115157compresed.jpg";
import img3 from "@/assets/new_images/IMG20260308115242compresed.jpg";
import img4 from "@/assets/new_images/IMG20260308115349compresed.jpg";
import img5 from "@/assets/new_images/IMG20260308115422compresed.jpg";
import img6 from "@/assets/new_images/IMG20260308115840compresed.jpg";
import img7 from "@/assets/new_images/IMG20260308115917compresed.jpg";
import img8 from "@/assets/new_images/IMG20260308120014compresed.jpg";
import img9 from "@/assets/new_images/IMG20260308120059compresed.jpg";
import img10 from "@/assets/new_images/IMG20260308120333compresed.jpg";
import img11 from "@/assets/new_images/IMG20260308120408compresed.jpg";
import img12 from "@/assets/new_images/IMG20260308120419compresed.jpg";
import img13 from "@/assets/new_images/IMG20260308120441compresed.jpg";
import pastry1 from "@/assets/new_images/pastry1.jpg";
import pastry2 from "@/assets/new_images/pastry2.jpg";
import pastry3 from "@/assets/new_images/pastry3.jpg";

const cakeFlavours = [
  { name: "Black Forest", image: img1, price: "₹549", desc: "Classic chocolate cake with cherries and cream" },
  { name: "Butterscotch Chocolate", image: img2, price: "₹599", desc: "Dual delight of butterscotch and rich chocolate" },
  { name: "Creamy Chocolate", image: img3, price: "₹549", desc: "Indulgent layer cake with smooth chocolate ganache" },
  { name: "Mix Fruit Jelly", image: img4, price: "₹599", desc: "Refreshing cake topped with fresh fruits and jelly" },
  { name: "Pineapple Bliss", image: img5, price: "₹499", desc: "Classic tropical pineapple sponge cake" },
  { name: "Royal Chocolate", image: img6, price: "₹649", desc: "Premium dark chocolate cake for true connoisseurs" },
  { name: "Vanilla Chocolate", image: img7, price: "₹549", desc: "The perfect balance of vanilla and chocolate sponge" },
  { name: "Special Chocolate", image: img8, price: "₹599", desc: "Specially crafted celebration cake" },
  { name: "Pistachio Perfection", image: img9, price: "₹699", desc: "Rich pistachio flavour with premium nuts" },
  { name: "Rainbow Radiance", image: img10, price: "₹749", desc: "Vibrant multi-layered cake for grand celebrations" },
  { name: "Hazelnut Heaven", image: img11, price: "₹649", desc: "Crunchy hazelnut and smooth chocolate blend" },
  { name: "Coffee Cascade", image: img12, price: "₹549", desc: "Infused with premium coffee for a bold taste" },
  { name: "Lemon Luscious", image: img13, price: "₹499", desc: "Zesty lemon flavour with a light sponge" },
];

const pastryFlavours = [
  { name: "Classic Butter Pastry", image: pastry1, price: "₹99", desc: "Flaky and buttery traditional pastry" },
  { name: "Fruit Jam Pastry", image: pastry2, price: "₹120", desc: "Sweet pastry filled with premium fruit jam" },
  { name: "Chocolate Cream Pastry", image: pastry3, price: "₹149", desc: "Rich chocolate cream in a light pastry shell" },
];

const WHATSAPP_BASE = "https://wa.me/919762632539?text=";

const FlavourShowcase = () => {
  return (
    <section id="flavours" className="section-padding bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary text-xs font-medium tracking-wider uppercase opacity-70">Our Menu</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-[#2d2d2d]">
            Our <span className="text-gold-gradient">Menu</span>
          </h2>
          <p className="text-[#555] mt-3 max-w-lg mx-auto text-sm">
            Handcrafted cakes and delicious pastries for every occasion.
          </p>
        </motion.div>

        {/* Delicious Cakes Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 border-b border-[#2d2d2d]/10 pb-3">
            <span className="text-xl">🎂</span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d]">Delicious Cakes</h3>
          </div>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } },
            }}
          >
            {cakeFlavours.map((cake) => (
              <motion.a
                key={cake.name}
                href={`${WHATSAPP_BASE}Hi, I want to order ${encodeURIComponent(cake.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col border border-border/50"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="relative aspect-square overflow-hidden bg-white p-2">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 bg-card">
                  <div className="flex justify-between items-start mb-1.5">
                    <h4 className="font-heading font-semibold text-base text-card-foreground pr-2 line-clamp-1">
                      {cake.name}
                    </h4>
                    <span className="text-accent font-bold mt-0.5 text-sm whitespace-nowrap">{cake.price}</span>
                  </div>
                  <p className="text-muted-foreground text-xs mb-4 line-clamp-2 min-h-[32px]">
                    {cake.desc}
                  </p>
                  <div className="mt-auto w-full bg-[#cca64b] hover:bg-[#b5923f] text-white py-1.5 rounded-lg font-medium text-xs transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                    <ShoppingBag size={14} />
                    <span>Order Now</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Mousse, Cheese Cups & Pastries Section */}
        <div>
          <div className="flex items-center gap-2 mb-6 border-b border-[#2d2d2d]/10 pb-3">
            <span className="text-xl">🧁</span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d]">Mousse, Cheese Cups & Pastries</h3>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } },
            }}
          >
            {pastryFlavours.map((pastry) => (
              <motion.a
                key={pastry.name}
                href={`${WHATSAPP_BASE}Hi, I want to order ${encodeURIComponent(pastry.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col border border-border/50"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="relative aspect-square overflow-hidden bg-white p-2">
                  <img
                    src={pastry.image}
                    alt={pastry.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 bg-card">
                  <div className="flex justify-between items-start mb-1.5">
                    <h4 className="font-heading font-semibold text-base text-card-foreground pr-2 line-clamp-1">
                      {pastry.name}
                    </h4>
                    <span className="text-accent font-bold mt-0.5 text-sm whitespace-nowrap">{pastry.price}</span>
                  </div>
                  <p className="text-muted-foreground text-xs mb-4 line-clamp-2 min-h-[32px]">
                    {pastry.desc}
                  </p>
                  <div className="mt-auto w-full bg-[#cca64b] hover:bg-[#b5923f] text-white py-1.5 rounded-lg font-medium text-xs transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                    <ShoppingBag size={14} />
                    <span>Order Now</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlavourShowcase;
