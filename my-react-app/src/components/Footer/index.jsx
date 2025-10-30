import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PRIMARY_COLOR,
  TEAL,
  DARK_BLUE,
  VIOLET,
  PAGE_LINKS,
  SERVICE_CARDS,
  COMPANY_NAME,
} from "@/lib/constants";
import SriSaiEximLogo from "@/components/SriSaiEximLogo";

const Footer = () => {
  return (
    <footer
      className="text-white pt-16 pb-8 font-poppins border-t-4"
      style={{ borderColor: VIOLET, backgroundColor: "#baecfb" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-300 pb-10">
          
          {/* Column 1: Logo & About */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="inline-block">
              <SriSaiEximLogo className="w-8 h-8 cursor-pointer" />
            </Link>
            <p className="text-sm text-[#0047AB] max-w-xs">   {/* gray-900  */}
              Dedicated to providing hassle-free, timely, and cost-effective logistics and customs solutions worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-3" style={{ color: TEAL }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {PAGE_LINKS.map((link) => (
                <li key={link.page} style={{ paddingBottom: "12px" }}>
                  <Link
                    to={`/${link.page === "home" ? "" : link.page}`}
                    className="transition duration-300"
                    style={{
                      color: PRIMARY_COLOR,
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = DARK_BLUE)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-3" style={{ color: TEAL }}>
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICE_CARDS.map((service) => {
                const serviceSlug = service.id || service.title.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={service.id} style={{ paddingBottom: "12px" }}>
                    <Link
                      to={`/services/${serviceSlug}`}
                      className="transition duration-300"
                      style={{
                        color: PRIMARY_COLOR,
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = DARK_BLUE)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
                    >
                      {service.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-lg font-bold mb-3" style={{ color: TEAL }}>
              Reach Us
            </h4>
            <div className="flex items-center space-x-3 text-sm">
              <MapPin className="w-5 h-5" style={{ color: VIOLET }} />
              <p className="text-[#0047AB]">Sahakaranagar,Bengaluru - 560092</p>  {/* gray-900 */}
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-5 h-5" style={{ color: VIOLET }} />
              <a
                href="tel:+919972314988"
                className="transition"
                style={{ color: PRIMARY_COLOR }}
                onMouseEnter={(e) => (e.currentTarget.style.color = DARK_BLUE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
              >
                +91 9972314988
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-5 h-5" style={{ color: VIOLET }} />
              <a
                href="mailto:sales@srisaiexim.in"
                className="transition"
                style={{ color: PRIMARY_COLOR }}
                onMouseEnter={(e) => (e.currentTarget.style.color = DARK_BLUE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
              >
                sales@srisaiexim.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p className="mb-2 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
