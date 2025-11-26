import React from 'react';
import { TEAL } from "@/lib/constants"
import { PRIMARY_COLOR, ACCENT_COLOR, SERVICE_CARDS } from "@/lib/constants"; 

const AboutSection = () => {
  const aboutText = `Sri Sai Exim was established in 2015 with the vision of setting new standards in customs clearance and freight forwarding with combined decades of combined experience in customs clearance and International Freight Forwarding. Over we have enriched our experience in various departments like including Customs Clearance, Warehosing, Refunds, Track & Trace Capabilities, Goods, Insurance Facilities, EOU, STPI, SEZ, JDGFT, Central Excise Import and Export.`;
  const imageUrl = "https://srisaiexim.in/images/about-sri-sai-exim.png";

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="mb-12 lg:mb-0">
            <h3 className="text-center text-sm font-semibold text-gray-600 tracking-wide uppercase">
              About
            </h3>
            <h2 className="text-center mt-2 text-3xl font-extrabold text-black sm:text-4xl">
              Sri Sai <span style={{ color: PRIMARY_COLOR }}>Exim</span>
            </h2>
      
            <div className="mt-2 flex items-center justify-center"> 
              <div className="w-16 h-1 bg-blue-700 rounded-full"></div>
              
              <div className="ml-3 w-6 h-6 rounded-full  flex items-center justify-center">
                <img src="https://srisaiexim.in/images/sri-sai-exim.png" alt="about"/>
              </div>
              <div className="ml-3 w-16 h-1 bg-blue-700 rounded-full"></div>

            </div>
            <p className="mt-8 text-base text-gray-700 leading-relaxed text-center lg:text-left pt-2">
              {aboutText}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              className="w-full max-w-md md:max-w-lg lg:max-w-full h-auto object-contain" 
              src={imageUrl} 
              alt="About Sri Sai Exim - Global Logistics and Customs Clearance" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;