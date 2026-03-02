import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Get in Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 text-foreground">
            Visit <span className="text-gold-gradient">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden border border-border bg-card">
          {/* Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">The Creamy Walnut, Pune, Maharashtra</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+919762632539"
                    className="text-accent hover:underline text-sm font-medium"
                  >
                    +91 97626 32539
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground text-sm">Mon – Sun: 9:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-80 md:h-auto min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68077767!2d73.72288390258!3d18.524598558498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
