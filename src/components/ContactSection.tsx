import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent text-xs font-medium tracking-wider uppercase">Get in Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            Visit <span className="text-gold-gradient">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border bg-card">
          {/* Info */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-0.5">Address</h3>
                  <p className="text-muted-foreground text-xs">CRXH+4M3, Vetal Baba Chowk, Narhe, Pune, Maharashtra 411041</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-0.5">Phone</h3>
                  <a href="tel:+919762632539" className="text-accent hover:underline text-xs font-medium">
                    +91 97626 32539
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-0.5">Opening Hours</h3>
                  <p className="text-muted-foreground text-xs">Mon – Sun: 9:00 AM – 10:00 PM</p>
                </div>
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
