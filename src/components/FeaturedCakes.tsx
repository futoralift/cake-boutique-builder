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
    <section id="featured" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent text-xs font-medium tracking-wider uppercase">Speciality</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            Featured <span className="text-gold-gradient">Cakes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={`${WHATSAPP_BASE}Hi, I'm interested in ${encodeURIComponent(cat.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-[4/3] card-luxury"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="text-accent text-[10px] sm:text-xs font-medium mb-0.5">{cat.subtitle}</p>
                <h3 className="font-heading text-base sm:text-xl md:text-2xl font-bold text-foreground">{cat.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
