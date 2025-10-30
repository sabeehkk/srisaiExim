"use client";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { PRIMARY_COLOR } from "@/lib/constants";

const HeroSection = () => (
  <div
    className="relative min-h-[60vh] md:min-h-[90vh] font-poppins bg-primary"
    style={{ backgroundColor: PRIMARY_COLOR }}
  >
    {/* Background Banner */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-70"
      style={{
        backgroundImage:
          "url('https://srisaiexim.in/images/sri-sai-exim-banner.jpg')",
        backgroundBlendMode: "multiply",
        filter: "brightness(0.9)",
      }}
      onError={(e) =>
        (e.target.style.backgroundImage = `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_COLOR}DD)`)
      }
    ></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:pt-25 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6 animate-fade-in-up">
        We make your relocation as{" "}
        <span className="text-[#30b6f0]">smooth</span> as you need.
      </h1>

      <p className="max-w-3xl lg:max-w-4xl mx-auto text-base sm:text-lg lg:text-xl text-white/90 mb-10 animate-fade-in-up">
        We assure you a completely hassle-free relocation experience under your budget.
      </p>

      {/* Button */}
      <Link
        to="/services"
        className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg text-white shadow-xl transition lg:mb-30 md:mb-30 mb-30 lg:m-10 duration-300 transform hover:scale-105 hover:bg-[#00AEEF] bg-[#30b6f0]"
        style={{color:"#FFFFFF"}}
      >
        Explore Services
      </Link>

      {/* Scroll Down Icon */}
       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <ChevronDown className="w-6 h-6 text-white animate-bounce" />
    </div>
    </div>
  </div>
);

export default HeroSection;
