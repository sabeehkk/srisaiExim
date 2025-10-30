import React from 'react';

const CoreStrengthsSection = () => {
  const mainImageUrl = "https://srisaiexim.in/images/sri-sai-exim-core-strength.png";
  const coreStrengthsIcon = "https://srisaiexim.in/images/core-strengths-ico.png";
  const customsClearanceIcon = "https://srisaiexim.in/images/customs-clearance-ico.png";

  const strengthsList = [
    "In the depth knowledge of the industry",
    "Commitment Towards understanding customer needs",
    "An excellent team that is dedicated to ensuring customer satisfaction",
    "Built trusted relationships with customs and statutory authorities which facilitates smooth operations.",
  ];

  const customsClearanceText = "Our comprehensive Customs clearance and Customs Brokerage service frees our esteemed clientele from any bureaucratic hassles that could could emerge at customs.";

  return (
    <section className="relative bg-[#14599c] py-5 text-white overflow-hidden">

      <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-white z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          <div className="flex justify-center lg:justify-start mb-12 lg:mb-0">
            <img
              src={mainImageUrl}
              alt="Sri Sai Exim Core Strengths - Global Logistics"
              className="w-full max-w-md md:max-w-lg lg:max-w-full h-auto object-contain"
            />
          </div>

          
          <div>
            
            <div className="flex items-center mb-2">
              <img src={coreStrengthsIcon} alt="Core Strengths Icon" className="w-10 h-10 mr-4 object-contain" />
              <h2 className="text-2xl font-extrabold">Core Strengths</h2>
            </div>
            <ul className="space-y-4 mb-12">
              {strengthsList.map((strength, index) => (
                <li key={index} className="flex items-start">
                  
                  <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-base">{strength}</p>
                </li>
              ))}
            </ul>

            {/* Customs Clearance Section */}
            <div className="flex items-center mb-6">
              <img src={customsClearanceIcon} alt="Customs Clearance Icon" className="w-10 h-10 mr-4 object-contain" />
              <h3 className="text-2xl font-extrabold">Customs Clearance</h3>
            </div>
            <p className="text-base leading-relaxed">
              {customsClearanceText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengthsSection;