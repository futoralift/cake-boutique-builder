import { Cake } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-12 md:pb-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cake className="w-6 h-6 text-accent" />
            </motion.div>
            <span className="font-heading text-xl font-bold text-foreground">The Creamy Walnut</span>
          </motion.div>
          <p className="text-muted-foreground text-sm mb-2">Different Style Cake · Love At First Bite</p>
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} The Creamy Walnut. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
