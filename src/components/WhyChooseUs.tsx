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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent text-xs font-medium tracking-wider uppercase">Our Promise</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            Why Choose <span className="text-gold-gradient">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-luxury p-5 md:p-7 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
