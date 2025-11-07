
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PRIMARY_COLOR,
  TEAL,
  PAGE_LINKS,
  SERVICE_CARDS,
  COMPANY_NAME,
} from "@/lib/constants";
import SriSaiEximLogo from "@/components/SriSaiEximLogo";

const Footer = () => {
  const backgroundColor = "#219ebc";
  const headingColor = "#ffffff";
  const textColor = "#e6f1f5";
  const accentColor = "#023047";

  return (
    <footer
      className="text-white pt-16 pb-8 font-poppins border-t-4"
      style={{
        borderColor: accentColor,
        backgroundColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-200/30 pb-10">
          
          {/* Column 1: Logo & About */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start space-y-3">
            {/* Logo - shifted fully left */}
            <div style={{ marginLeft: "-1.5rem" , marginTop: "-1rem" }}>
              <Link to="/" className="inline-block">
                <SriSaiEximLogo className="w-22 h-auto cursor-pointer" />
              </Link>
            </div>

            {/* About Paragraph (keeps normal padding) */}
            <p
              className="text-sm leading-relaxed text-left"
              style={{ color: textColor, marginTop: "-1rem" }}
            >
              Dedicated to providing hassle-free, timely, and cost-effective
              logistics and customs solutions worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4
              className="text-lg font-semibold tracking-wide mb-3"
              style={{
                color: headingColor,
                textShadow: "2px 2px 4px rgba(26, 1, 1, 0.66)",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {PAGE_LINKS.map((link) => (
                <li key={link.page}>
                  <Link
                    to={`/${link.page === "home" ? "" : link.page}`}
                    className="transition duration-300"
                    style={{
                      color: textColor,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = accentColor)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = textColor)
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4
              className="text-lg font-semibold tracking-wide mb-3"
              style={{
                color: headingColor,
                textShadow: "2px 2px 4px rgba(26, 1, 1, 0.66)",
              }}
            >
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICE_CARDS.map((service) => {
                const serviceSlug =
                  service.id ||
                  service.title.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={service.id}>
                    <Link
                      to={`/services/${serviceSlug}`}
                      className="transition duration-300"
                      style={{
                        color: textColor,
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = accentColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = textColor)
                      }
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
            <h4
              className="text-lg font-semibold tracking-wide mb-3"
              style={{
                color: headingColor,
                textShadow: "2px 2px 4px rgba(26, 1, 1, 0.66)",
              }}
            >
              Reach Us
            </h4>
            <div className="flex items-center space-x-3 text-sm">
              <MapPin
                className="w-5 h-5"
                style={{
                  color: accentColor,
                  textShadow: "2px 2px 4px rgba(255, 255, 255, 1)",
                }}
              />
              <p style={{ color: textColor }}>
                Sahakaranagar, Bengaluru - 560092
              </p>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-5 h-5" style={{ color: accentColor }} />
              <a
                href="tel:+919945242861"
                className="transition"
                style={{ color: textColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = accentColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = textColor)
                }
              >
                +91 9945242861
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-5 h-5" style={{ color: accentColor }} />
              <a
                href="mailto:sales@srisaiexim.in"
                className="transition"
                style={{ color: textColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = accentColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = textColor)
                }
              >
                sales@srisaiexim.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p
            className="mb-2 md:mb-0 text-center md:text-left"
            style={{ color: "#dceef2" }}
          >
            © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
