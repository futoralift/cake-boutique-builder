import { motion } from "framer-motion";
import designerCake from "@/assets/designer-cake.png";
import birthdayCake from "@/assets/birthday-cake.png";
import anniversaryCake from "@/assets/anniversary-cake.png";
import customCake from "@/assets/custom-cake.png";

const categories = [
  { title: "Designer Cakes", subtitle: "Artistic Masterpieces", image: designerCake },
  { title: "Birthday Cakes", subtitle: "Celebrate in Style", image: birthdayCake },
  { title: "Anniversary Cakes", subtitle: "Romantic Elegance", image: anniversaryCake },
  { title: "Custom Photo Cakes", subtitle: "Your Memories, Our Canvas", image: customCake },
];

const WHATSAPP_BASE = "https://wa.me/919762632539?text=";

const FeaturedCakes = () => {
  return (
    <section id="featured" className="section-padding relative overflow-hidden">
      {/* Background parallax glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xs font-medium tracking-wider uppercase">Speciality</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            Featured <span className="text-gold-gradient">Cakes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={`${WHATSAPP_BASE}Hi, I'm interested in ${encodeURIComponent(cat.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-[4/3] card-luxury"
              initial={{ opacity: 0, y: 40, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <motion.p
                  className="text-accent text-[10px] sm:text-xs font-medium mb-0.5"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {cat.subtitle}
                </motion.p>
                <h3 className="font-heading text-base sm:text-xl md:text-2xl font-bold text-foreground">{cat.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
