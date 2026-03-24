import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import img1 from "@/assets/new_images/IMG20260308114828compresed.jpg";
import img2 from "@/assets/new_images/IMG20260308115157compresed.jpg";
import img3 from "@/assets/new_images/IMG20260308115242compresed.jpg";
import img4 from "@/assets/new_images/IMG20260308115349compresed.jpg";
import img5 from "@/assets/new_images/IMG20260308115422compresed.jpg";
import img6 from "@/assets/new_images/IMG20260308115840compresed.jpg";

const images = [
  { src: img1, label: "Silk Velvet" },
  { src: img2, label: "Tonal Textures" },
  { src: img3, label: "Pastel Bloom" },
  { src: img4, label: "Royal Cocoa" },
  { src: img5, label: "Golden Garnish" },
  { src: img6, label: "Floral Whisper" },
];

const CakeGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary text-xs font-medium tracking-wider uppercase opacity-70">Our Creations</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            Cake <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            A glimpse into our handcrafted masterpieces — each one baked with love.
          </p>
        </motion.div>

        {/* Masonry-style grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square shadow-sm bg-white p-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-3 md:p-4"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                <p className="font-heading text-sm md:text-base font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setSelected(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              src={images[selected].src}
              alt={images[selected].label}
              className="max-w-[90vw] md:max-w-2xl max-h-[70vh] rounded-2xl shadow-2xl object-contain bg-muted p-2 md:p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.p
              className="absolute bottom-8 font-heading text-lg font-semibold text-foreground"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {images[selected].label}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CakeGallery;
