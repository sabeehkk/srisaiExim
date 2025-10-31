"use client";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import {
  PRIMARY_COLOR,
  ACCENT_COLOR,
  PAGE_LINKS,
  SERVICE_CARDS,
  TEAL,
} from "@/lib/constants";
import SriSaiEximLogo from "@/components/SriSaiEximLogo";

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
  `}</style>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-sm border-b border-gray-100 shadow-md font-poppins">
        <FocusResetStyle />
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <SriSaiEximLogo
              className="h-14 focus:outline-none focus-ring-visible mr-10 cursor-pointer"
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
                        className="text-[#646CFF] hover:text-primary transition duration-300 font-medium text-base py-4 flex items-center focus:outline-none focus-ring-visible"
                        style={{
                          "--primary": PRIMARY_COLOR,
                          backgroundColor: "transparent",
                          outline: "none",
                          border: "none",
                        }}
                      >
                        {item.name}
                        <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      </button>

                      {/* Desktop Dropdown */}
                      <div
                        className="absolute top-full -left-4 mt-0 w-72 bg-white/97 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out transform scale-y-0 opacity-0 origin-top group-hover:scale-y-100 group-hover:opacity-100"
                        style={{ zIndex: 60 }}
                      >
                        {SERVICE_CARDS.map((service) => {
                          const Icon = service.icon;
                          const servicePath = `/services/${service.id}`;
                          return (
                            <button
                              key={service.id}
                              onClick={() => handleNavigate(servicePath)}
                              className="w-full text-left flex items-center px-4 py-3 text-sm text-gray-700 hover:text-primary transition duration-200 focus:outline-none focus-ring-visible"
                              style={{
                                backgroundColor: "transparent",
                                outline: "none",
                                border: "none",
                              }}
                            >
                              <Icon
                                className="w-4 h-4 mr-3 text-accent"
                                style={{ color: PRIMARY_COLOR }}
                              />
                              {service.title}
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
                        `text-base font-medium transition duration-300 py-4 ${
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-600 hover:text-primary"
                        }`
                      }
                      style={{ "--primary": PRIMARY_COLOR }}
                    >
                      {item.name}
                    </NavLink>
                  )
                )}
              </nav>

              {/* Get A Quote button */}
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="px-10 py-2 text-base font-semibold rounded-lg text-white transition duration-300 transform hover:scale-[1.02] shadow-lg focus:outline-none focus-ring-visible whitespace-nowrap"
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
              className="md:hidden text-gray-600 hover:text-primary p-2 focus:outline-none focus-ring-visible"
              style={{
                "--primary": PRIMARY_COLOR,
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
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
                      className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-primary rounded-md focus:outline-none focus-ring-visible"
                      style={{
                        "--primary": PRIMARY_COLOR,
                        backgroundColor: "transparent",
                        outline: "none",
                        border: "none",
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    <div
                      className={`pl-6 pt-1 pb-2 ml-4 overflow-hidden transition-all duration-300 ${
                        isServicesOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {SERVICE_CARDS.map((service) => {
                        const Icon = service.icon;
                        const servicePath = `/services/${service.id}`;
                        return (
                          <button
                            key={service.id}
                            onClick={() => handleNavigate(servicePath)}
                            className="w-full text-left flex items-center px-3 py-1 text-sm text-gray-600 rounded-md hover:text-primary focus:outline-none focus-ring-visible"
                            style={{ backgroundColor: "transparent" }}
                          >
                            <Icon
                              className="w-4 h-4 mr-2 text-primary"
                              style={{ color: PRIMARY_COLOR }}
                            />
                            {service.title}
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
                    className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary rounded-md focus:outline-none focus-ring-visible"
                    style={{
                      "--primary": PRIMARY_COLOR,
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    {item.name}
                  </button>
                )}
              </React.Fragment>
            ))}

            {/* Contact and CTA */}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+919972314988"
                className="w-full flex items-center justify-center px-6 py-2 text-base font-medium rounded-lg text-gray-700 border border-gray-300 hover:border-primary hover:text-primary transition duration-300 focus:outline-none focus-ring-visible"
                style={{ "--primary": PRIMARY_COLOR }}
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 9972314988
              </a>
              <button
                onClick={() => handleNavigate("/contact")}
                className="w-full px-6 py-2 text-base font-semibold rounded-lg text-white transition duration-300 shadow-lg focus:outline-none focus-ring-visible"
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
