// import HeroSection from "@/components/HeroSection";
// import ExpertiseGridSection from "@/components/ExpertiseGridSection";
// import LogoCarousel from "@/components/LogoCarousel";
// import AboutSection from "../AboutSection";
// import CoreStrengthsSection from "../CoreStrengthsSection";

// const HomePage = () => {
//   return (
//     <>
//       <HeroSection />
//       <ExpertiseGridSection />
//       <AboutSection />
//       <CoreStrengthsSection />
//       <LogoCarousel />
//     </>
//   );
// };

// export default HomePage;



import HeroSection from "@/components/HeroSection";
import ExpertiseGridSection from "@/components/ExpertiseGridSection";
import LogoCarousel from "@/components/LogoCarousel";
import AboutSection from "../AboutSection";
import CoreStrengthsSection from "../CoreStrengthsSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ExpertiseGridSection />
      <AboutSection />
      <CoreStrengthsSection />
      <LogoCarousel />
      <ScrollToTopButton /> {/* 👈 Only visible on HomePage */}
    </>
  );
};

export default HomePage;
