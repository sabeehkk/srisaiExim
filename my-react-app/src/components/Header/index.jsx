"use client";

import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ChevronRight } from "lucide-react";
import {
  PRIMARY_COLOR,
  ACCENT_COLOR, 
  PAGE_LINKS,
  SERVICE_CARDS,
  TEAL,
}
 from "@/lib/constants";
import SriSaiEximLogo from "@/components/SriSaiEximLogo";

// --- Styling for Focus Rings and Active State Gradient ---
const FocusResetStyle = () => (
  <style jsx global>{`
    button:focus:not(:focus-visible),
    a:focus:not(:focus-visible) {
      outline: none;
      box-shadow: none;
    }
    .focus-ring-visible:focus {
      outline: 2px solid var(--primary, ${PRIMARY_COLOR});
      outline-offset: 2px;
    }
    /* Define the luxurious gradient for active state */
    .active-service-gradient {
        background: linear-gradient(90deg, rgba(240, 240, 240, 0.7) 0%, rgba(255, 255, 255, 0) 100%);
    }
  `}</style>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    // Ultra-smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Base class for all service items in dropdown/sub-menu
  const baseServiceClass = "w-full text-left flex items-center text-base font-semibold relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.005]";
  const arrowSpacingActive = 'pl-7'; // Space for visible arrow
  const arrowSpacingInactive = 'pl-0'; // No space needed

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-sm border-b border-gray-100 shadow-xl font-poppins">
        <FocusResetStyle />
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:ml-[-4rem]" >
            <SriSaiEximLogo
              className="h-14 focus:outline-none focus-ring-visible mr-10 cursor-pointer transition duration-300 hover:opacity-90"
              onClick={() => handleNavigate("/")}
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <nav className="flex space-x-8 items-center h-full">
                {PAGE_LINKS.map((item) =>
                  item.page === "services" ? (
                    <div
                      key={item.page}
                      className="relative group h-full flex flex-row items-center"
                    >
                      <button
                        onClick={() => handleNavigate("/services")}
                        className="text-[#646cff] hover:text-primary transition duration-300 font-medium text-base py-4 flex items-center focus:outline-none focus-ring-visible"
                        style={{ "--primary": PRIMARY_COLOR , border: "none" ,outline: "none", backgroundColor: "transparent" }}
                      >
                        {item.name}
                        <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      </button>

                      {/* Desktop Dropdown - Luxurious/Corporate Style */}
                      <div
                        className="absolute top-full -left-4 mt-0 w-72 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out transform scale-y-0 opacity-0 origin-top group-hover:scale-y-100 group-hover:opacity-100 border border-gray-100"
                        style={{ zIndex: 60 }}
                      >
                        {SERVICE_CARDS.map((service) => {
                          const servicePath = `/services/${service.id}`;
                          const isActive = location.pathname === servicePath;
                          
                          return (
                            <button
                              key={service.id}
                              onClick={() => handleNavigate(servicePath)}
                              className={`${baseServiceClass} ${isActive ? 'active-service-gradient text-gray-900' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
                              style={{
                                borderLeft: isActive ? `4px solid ${PRIMARY_COLOR}` : '4px solid transparent', // Corporate accent border
                                padding: isActive ? '0.75rem 1rem 0.75rem 1rem' : '0.75rem 1rem 0.75rem 1.25rem', // Adjusted padding for border and arrow
                                '--primary': PRIMARY_COLOR, border : "none"
                              }}
                            >
                              {/* Luxurious Arrow: Smooth slide-in transition */}
                              <ChevronRight
                                className={`w-4 h-4 mr-3 absolute left-0 transition-all duration-300 ease-out`}
                                style={{ 
                                    color: PRIMARY_COLOR,
                                    transform: isActive ? 'translateX(0.5rem)' : 'translateX(-1rem)', 
                                    opacity: isActive ? 1 : 0
                                }}
                              />
                              {/* Text content shift */}
                              <span className={isActive ? arrowSpacingActive : arrowSpacingInactive}>
                                {service.title}
                              </span> 
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                  <NavLink
                      key={item.page}
                      to={item.page === "home" ? "/" : `/${item.page.toLowerCase()}`}
                      className={({ isActive }) =>
                        `text-base font-semibold tracking-tight py-5 px-3 transition-all duration-300 relative
                        border-b-[3px] border-transparent 
                        ${
                          isActive
                            ? "text-indigo-800 border-indigo-700" 
                            : "text-gray-900 hover:text-indigo-500 hover:border-indigo-500/10" 
                        }`
                      }
                  >
                      {item.name}
                      </NavLink>
                  )
                )}
              </nav>

              <div className="flex items-center space-x-6">
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="px-8 py-3 text-base font-semibold rounded-lg text-white transition duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-xl focus:outline-none focus-ring-visible whitespace-nowrap"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = TEAL)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)
                  }
                >
                  Get A Quote
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-600 hover:text-primary p-2 focus:outline-none focus-ring-visible transition duration-300"
              style={{ "--primary": PRIMARY_COLOR ,  }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Smooth slide and Luxurious Style Applied */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${ // Slower, smoother transition for luxury
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
            {PAGE_LINKS.map((item) => (
              <React.Fragment key={item.page}>
                {item.page === "services" ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex justify-between items-center px-3 py-2 text-base font-bold text-[#646cff] hover:text-primary rounded-md focus:outline-none focus-ring-visible transition duration-300"
                      style={{ "--primary": PRIMARY_COLOR , border : "none"}}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isServicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Mobile Services Sub-menu - Luxurious Style Applied */}
                    <div
                      className={`pl-4 pt-1 pb-2 ml-4 overflow-hidden transition-all duration-500 ease-in-out ${
                        isServicesOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {SERVICE_CARDS.map((service) => {
                        const servicePath = `/services/${service.id}`;
                        const isActive = location.pathname === servicePath;

                        return (
                          <button
                            key={service.id}
                            onClick={() => handleNavigate(servicePath)}
                            className={`w-full text-left flex items-center px-3 py-2 text-base font-semibold rounded-md focus:outline-none focus-ring-visible relative overflow-hidden transition-all duration-300 transform hover:scale-[1.01]
                              ${isActive ? 'active-service-gradient text-gray-900' : 'text-gray-700 hover:bg-gray-100'}
                            `}
                            style={{ 
                                borderLeft: isActive ? `4px solid ${PRIMARY_COLOR}` : '4px solid transparent',
                                paddingLeft: isActive ? '0.5rem' : '0.75rem',
                                '--primary': PRIMARY_COLOR,
                            }}
                          >
                            {/* Luxurious Arrow: Smooth slide-in transition */}
                            <ChevronRight
                                className={`w-4 h-4 mr-2 absolute left-0 transition-all duration-300 ease-out`}
                                style={{ 
                                    color: PRIMARY_COLOR,
                                    transform: isActive ? 'translateX(0.5rem)' : 'translateX(-1rem)',
                                    opacity: isActive ? 1 : 0
                                }}
                            />
                            {/* Text content shift */}
                            <span className={isActive ? 'pl-7' : 'pl-0'}>{service.title}</span> 
                          </button>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() =>
                      handleNavigate(
                        item.page === "home"
                          ? "/"
                          : `/${item.page.toLowerCase()}`
                      )
                    }
                    className="w-full text-left block px-3 py-2 text-base font-medium text-[#646cff] hover:text-primary rounded-md focus:outline-none focus-ring-visible transition duration-300 hover:bg-gray-50"
                    style={{ "--primary": PRIMARY_COLOR , border: "none"}}
                  >
                    {item.name}
                  </button>
                )}
              </React.Fragment>
            ))}

            {/* Contact and CTA */}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+919945242861"
                className="w-full flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-gray-700 border border-gray-300 hover:border-primary hover:text-primary transition duration-300 focus:outline-none focus-ring-visible hover:shadow-md"
                style={{ "--primary": PRIMARY_COLOR }}
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 9945242861
              </a>
              <button
                onClick={() => handleNavigate("/contact")}
                className="w-full px-6 py-3 text-base font-semibold rounded-lg text-white transition duration-300 shadow-lg focus:outline-none focus-ring-visible hover:scale-[1.01]"
                style={{ backgroundColor: PRIMARY_COLOR }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = TEAL)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)
                }
              >
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Add spacing below header to prevent content overlap */}
      <div className="pt-20" />
    </>
  );
};

export default Header;