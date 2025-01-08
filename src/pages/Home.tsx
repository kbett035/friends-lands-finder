import HeroSection from "@/components/home/HeroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedProperties />
      <ServicesSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
};

export default Home;