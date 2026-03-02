import { Clock, Palette, Leaf, Truck } from "lucide-react";

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
    <section id="why-us" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Our Promise</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 text-foreground">
            Why Choose <span className="text-gold-gradient">Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="card-luxury p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
