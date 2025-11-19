import { useState } from "react";
import { PRIMARY_COLOR, ACCENT_COLOR, SERVICE_CARDS } from "@/lib/constants"
import { servicesData } from "@/lib/constants"; 
import { X, CheckCircle } from "lucide-react"; 

const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl border border-gray-200 shadow-3xl shadow-cyan-500/10 w-full max-w-5xl mx-4 transform transition-all duration-500 opacity-100 overflow-hidden max-h-[95vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header: Clean top bar */}
                <div className="p-8 md:p-10 border-b border-gray-100 flex justify-between items-start">
                    
                    {/* Title: Modern, strong weight, dynamic color */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        <span className="text-cyan-600">Future-Proof</span> {service.title}
                    </h2>
                    
                    {/* Close Button: Clear focus ring */}
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6 stroke-2" />
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    
                    {/* Column 1: Icon & Summary (Vertical accent line) */}
                    <div className="lg:col-span-1 p-8 md:p-10 border-r border-gray-100">
                        <div className="mb-6 pb-6 border-b border-gray-200">
                            <img
                                src={service.iconUrl}
                                alt={service.title}
                                className="w-16 h-16 object-contain mb-4 border-2 border-cyan-500 p-2 rounded-lg"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                            <p className="text-lg text-gray-700 font-medium">
                               {service.description}
                            </p>
                        </div>
                        {/* <p className="text-sm text-gray-500">
                            Our proprietary methodologies ensure rapid deployment and quantifiable ROI, positioning your firm ahead of market shifts.
                        </p> */}
                    </div>

                    {/* Column 2 & 3: Deliverables Checklist */}
                    <div className="lg:col-span-2 p-8 md:p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-cyan-500 pb-2">
                            Validated Value Streams
                        </h3>
                        
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                            {service.details.map((item, i) => (
                                <li key={i} className="flex items-start text-gray-800">
                                    {/* Checklist item with modern, bright cyan accent */}
                                    <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-base font-normal leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer/CTA: Solid, action-oriented bar */}
                <div className="p-6 md:p-8 border-t border-gray-200 text-center">
                    <button className="w-full md:w-auto bg-cyan-600 text-white font-extrabold text-lg py-3 px-10 rounded-lg shadow-lg shadow-cyan-500/40 hover:bg-cyan-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-cyan-300">
                        Activate Digital Transformation
                    </button>
                </div>
            </div>
        </div>
    );
};
// --- 2. Main Services Component ---
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-28 bg-white"> 
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-20 relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-1 before:bg-blue-600 before:rounded-full pb-4">
          Our <span style={{ color: PRIMARY_COLOR }}>Consultation Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 text-center flex flex-col items-center justify-start shadow-xl rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl group"
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  {/* <div className="relative w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center shadow-inner shadow-blue-200/50 group-hover:shadow-blue-300 transition duration-500">
                    <img
                      src={service.iconUrl}
                      alt={service.title}
                      className="relative w-14 h-14 object-contain z-10"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div> */}
                  
                  <div className="relative w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center shadow-inner shadow-blue-200/50 group-hover:shadow-blue-300 transition duration-500 overflow-hidden">
                    <img
                        src={service.iconUrl}
                        alt={service.title}
                        className="relative w-full h-full object-cover z-10" 
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-900 h-14 flex items-center justify-center mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center mb-6 h-10 overflow-hidden line-clamp-2">
                  {service.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => openModal(service)}
                  className="w-full py-3 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  style={{ backgroundColor: "#0d059bff" }}
                >
                  View Full Details
                </button>
              </div>
          ))}
        </div>
      </div>
    
    <ServiceModal service={selectedService} onClose={closeModal} />
  </section>
  );
}