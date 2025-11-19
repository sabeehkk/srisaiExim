import { useParams } from "react-router-dom";
import { SERVICE_CARDS } from "@/lib/constants";
// import air_freight from "@/assets/air_freight.jpg"

// --- Default/Fallback Content ---
const DEFAULT_IMAGE = "https://srisaiexim.in/images/sri-sai-exim-banner-i.jpg"; 
const DEFAULT_TITLE = "Exclusive Service Coming Soon";
const DEFAULT_INTRO =
  "We are meticulously preparing the details for this premium service offering. Kindly stay tuned for a comprehensive update on how we can elevate your business.";
const DEFAULT_SERVICES = [
  "Bespoke logistics and supply chain strategies",
  "Dedicated, professional client support, 24/7",
  "Proactive, real-time tracking and timely milestone reports",
];
const DEFAULT_CONTACT = {
  phone: "+91 99452 42861",
  email: "sales@srisaiexim.in",
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = SERVICE_CARDS.find((s) => s.id === serviceId);

  // Fallback content logic remains the same for robustness
  const title = service?.title || DEFAULT_TITLE;
  const imageUrl = service?.bannerImg || DEFAULT_IMAGE;
  const intro = service?.content?.intro || DEFAULT_INTRO;
  const services = service?.content?.services || DEFAULT_SERVICES;
  const contact = {
    phone: service?.content?.contact?.phone || DEFAULT_CONTACT.phone,
    email: service?.content?.contact?.email || DEFAULT_CONTACT.email,
  };

  return (
    <div className="min-h-screen bg-gray-50"> 
      <div className="relative h-120 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-105" 
        /> {/* object-cover */}
        <div className="absolute inset-0 bg-[#122b6015] bg-opacity-40 flex items-end p-12">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white tracking-tight leading-snug drop-shadow-lg" style={{fontSize: "40px" , textShadow: "2px 2px 4px rgba(26, 1, 1, 0.66)" }} >
            {title}
          </h1>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="max-w-6xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Introduction Text (Column 1 & 2) */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-indigo-700 mb-3 uppercase tracking-wider">
                Our Commitment
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-indigo-500 pl-4 bg-white shadow-md p-4 rounded-lg">
                {/* Text is slightly larger and uses a clean border/background for emphasis */}
                {intro}
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-b pb-2">
                Core Service Excellence
            </h3>
            
            {/* Services List (Corporate Style) */}
            <ul className="space-y-4">
              {services.map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start text-gray-700 text-base p-3 bg-white hover:bg-indigo-50 transition duration-150 rounded-lg shadow-sm"
                >
                  {/* Checkmark icon for professionalism */}
                  <svg className="flex-shrink-0 w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information (Column 3 - Sidebar) */}
          
          <div className="lg:col-span-1">
            <div className="sticky top-25 p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-[#207391] mb-4 border-b pb-2">  {/* gray-800 */}
                Connect with Our Team
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to discuss your requirements? Reach out to our dedicated client services team.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center">
                  <span className="p-2 bg-indigo-100 text-indigo-600 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2-2a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V6z"></path></svg>
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <a href={`mailto:${contact.email}`} className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <span className="p-2 bg-indigo-100 text-indigo-600 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">Client Hotline</p>
                    <a href={`tel:${contact.phone}`} className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;


