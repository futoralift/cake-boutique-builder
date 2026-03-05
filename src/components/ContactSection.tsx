import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xs font-medium tracking-wider uppercase">Get in Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            Visit <span className="text-gold-gradient">Us</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border bg-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Info */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content: <p className="text-muted-foreground text-xs">CRXH+4M3, Vetal Baba Chowk, Narhe, Pune, Maharashtra 411041</p>,
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: (
                    <a href="tel:+919762632539" className="text-accent hover:underline text-xs font-medium">
                      +91 97626 32539
                    </a>
                  ),
                },
                {
                  icon: Clock,
                  title: "Opening Hours",
                  content: <p className="text-muted-foreground text-xs">Mon – Sun: 9:00 AM – 10:00 PM</p>,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-0.5">{item.title}</h3>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-64 md:h-auto min-h-[280px]">
            <iframe
              src="https://maps.google.com/maps?q=The+Creamy+Walnut+Narhe+Pune&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Creamy Walnut Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
