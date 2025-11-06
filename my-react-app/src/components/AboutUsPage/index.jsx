"use client"
import { Link } from "react-router-dom"
import { PRIMARY_COLOR, COMPANY_NAME, TEAL } from "@/lib/constants"
import SectionWrapper from "@/components/SectionWrapper"

const AboutUsPage = () => (
  <SectionWrapper id="about-us-page" className="p-0 bg-gray-50 font-poppins">

    {/* Hero Section */}
    <div
      className={`relative min-h-[60vh] md:min-h-[70vh] mb-8`}
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://srisaiexim.in/images/sri-sai-exim-banner-i.jpg')",
          backgroundBlendMode: "multiply",
          filter: "brightness(0.9)",
        }}
        onError={(e) =>
          (e.target.style.backgroundImage = `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_COLOR}DD)`)
        }
      ></div>

      <div className="relative h-full flex flex-col justify-center items-center p-6 sm:p-8 z-10 animate-fade-in-up text-center sm:text-left">
        <p className="text-gray-200 text-xs sm:text-sm tracking-widest uppercase mb-2 font-light">
          <Link to="/" className="hover:underline" style={{color:"#005ef5ff" , textShadow: "0 0 0.5px black, 0 0 0.5px white" }} >Home</Link> /{" "}
          <span className="font-medium text-white" style={{ textShadow: "0 0 0.5px white, 0 0 0.5px white" }}>
            About Us
          </span>
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-tight">
          <span className="text-[#30b6f0]" style={{ textShadow: "2px 2px 4px rgba(26, 1, 1, 0.66)" }}>
            ABOUT{" "}
          </span>
          <span className="font-bold text-white" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>
            {COMPANY_NAME}
          </span>
        </h2>
            {/* style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.66)" }} */}
        <div className="w-16 sm:w-20 h-1 mt-4 rounded-full" style={{ backgroundColor: "#3444ffff" }}></div>
      </div>
    </div>

    {/* About Content */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="space-y-8 sm:space-y-12 text-gray-700">
        <p
          className="text-lg sm:text-xl font-light tracking-wide leading-relaxed text-gray-900 border-l-4 pl-4 sm:pl-6 pt-8 sm:pt-12"
          style={{ borderColor: PRIMARY_COLOR }}
        >
          <strong className="font-extrabold">Sri Sai Exim</strong> was
          established in 2015 with the vision of setting new standards in
          customs clearance and freight forwarding, built on decades of combined
          expertise in International Freight Forwarding.
        </p>

        <p className="text-base sm:text-lg leading-7">
          Over the years, we have enriched our experience across critical
          logistics functions, including Customs Clearance, Warehousing,
          Refunds, Track & Trace capabilities, Goods Insurance, and specialized
          statutory compliance areas such as EOU, STPI, SEZ, JDGFT, and Central
          Excise Import and Export.
        </p>

        <p className="text-base sm:text-lg leading-7">
          We maintain a wide array of expertise in international transportation,
          spanning both Air and Sea freight. Our core values{" "}
          <span className="font-semibold">
            Innovation, Adaptability, Leadership, and Teamwork
          </span>{" "}
          drive our service excellence. We continuously invest in the latest
          technologies and market analysis to offer innovative solutions
          customized for each client's specific requirements.
        </p>

        {/* Core Services */}
        <div className="mt-10 p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50">
          <p className="font-bold text-gray-900 mb-3">Core Service Areas:</p>
          <div className="flex flex-wrap gap-3 text-sm sm:text-base font-medium">
            {[
              "Air Freight Services in India",
              "Ocean Freight Services in India",
              "Surface Transportation Services",
              "Logistics & Transportation",
              "DG Certification Services in India",
            ].map((service) => (
              <span
                key={service}
                className="px-3 py-1 rounded-full text-white shadow-md break-words"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Contact CTA */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-base sm:text-lg font-light text-gray-800 text-center sm:text-left mb-6 sm:mb-0">
          For all inquiries, please call our specialist team at:{" "}
          <a
            href="tel:+919945242861"
            className="font-bold tracking-wide hover:text-gray-900 transition duration-300 whitespace-nowrap"
            style={{ color: PRIMARY_COLOR }}
          >
            +91 9945242861
          </a>
        </p>

        <Link
          to="/contact"
          className="px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-lg text-white transition duration-300 hover:opacity-90 shadow-md"
          style={{ backgroundColor: PRIMARY_COLOR,
            color: "#FFFFFF"
           }}
        >
          Initiate Contact
        </Link>
      </div>
    </div>

    {/* Copyright */}
    <div className="max-w-7xl mx-auto text-center text-xs sm:text-sm text-gray-400 py-6 border-t border-gray-100">
      Copyright © Sri Sai Exim {new Date().getFullYear()}, All Rights Reserved
    </div>
  </SectionWrapper>
)

export default AboutUsPage
