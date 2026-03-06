import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlavourShowcase from "@/components/FlavourShowcase";
import FeaturedCakes from "@/components/FeaturedCakes";
import CakeGallery from "@/components/CakeGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FlavourShowcase />
      <FeaturedCakes />
      <CakeGallery />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
