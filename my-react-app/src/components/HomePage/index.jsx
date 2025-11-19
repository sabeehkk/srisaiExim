import HeroSection from "@/components/HeroSection";
import ServicesGridSection from "@/components/ServicesGridSection"
import ExpertiseGridSection from "@/components/ExpertiseGridSection";
import LogoCarousel from "@/components/LogoCarousel";
import AboutSection from "../AboutSection";
import CoreStrengthsSection from "../CoreStrengthsSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesGridSection/>
      <ExpertiseGridSection />
      <AboutSection />
      <CoreStrengthsSection />
      <LogoCarousel />
      <ScrollToTopButton /> 
    </>
  );
};

export default HomePage;
