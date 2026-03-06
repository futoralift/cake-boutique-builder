import { Clock, Palette, Leaf, Truck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Freshly Baked Daily",
    description: "Every cake is baked fresh, ensuring the perfect taste and texture.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Unique designs tailored to your vision for every special occasion.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    description: "Premium ingredients sourced for the richest flavours.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Timely delivery so your celebration never waits.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative floating orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xs font-medium tracking-wider uppercase">Our Promise</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            Why Choose <span className="text-gold-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="card-luxury p-5 md:p-7 text-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center relative z-10"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-5 h-5 text-accent" />
              </motion.div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-foreground mb-2 relative z-10">{feature.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
