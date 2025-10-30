import { Plane, Ship, Truck, Zap, FileText, Package } from "lucide-react"

export const COMPANY_NAME = "Sri Sai Exim"
export const PRIMARY_COLOR = "#0047AB" // Blue
export const ACCENT_COLOR = "#FF9900" // Orange
export const DARK_BLUE = "#000b39ff"
export const TEAL = "#174D4D" //dark shade of blue-green
export const VIOLET = "#4A235A" //Medium Violet

export const CLIENT_LOGOS = [
  { name: "Tangoe", url: "https://srisaiexim.in/images/clients/tangoe.jpg" }, 
  { name: "Analog-devices", url: "https://srisaiexim.in/images/clients/analog-devices.jpg" },
  { name: "Capgemini", url: "https://srisaiexim.in/images/clients/capgemini.jpg" },
  { name: "Kuliza", url: "https://srisaiexim.in/images/clients/kuliza.jpg" },
  { name: "Mindtree", url: "https://srisaiexim.in/images/clients/mindtree.jpg" },
  { name: "Sap", url: "https://srisaiexim.in/images/clients/sap.jpg" },
  { name: "Happiest-minds", url: "https://srisaiexim.in/images/clients/happiest-minds.jpg" },
  { name: "Mitel", url: "https://srisaiexim.in/images/clients/mitel.jpg" },
  { name: "Qubix", url: "https://srisaiexim.in/images/clients/qubix.jpg" },
  { name: "Beckman-coulter", url: "https://srisaiexim.in/images/clients/beckman-coulter.jpg" },
  { name: "Harman", url: "https://srisaiexim.in/images/clients/harman.jpg" },
  { name: "Cis Global", url: "https://srisaiexim.in/images/clients/cis-global.jpg" },
  { name: "Sabre", url: "https://srisaiexim.in/images/clients/sabre.jpg" },
  { name: "Impelsys", url: "https://srisaiexim.in/images/clients/impelsys.jpg" },
  { name: "Micro Focus", url: "https://srisaiexim.in/images/clients/micro-focus.jpg" },
  { name: "Prestige", url: "https://srisaiexim.in/images/clients/prestige.jpg" },
]

export const PAGE_LINKS = [
  { name: "Home", page: "home" },
  { name: "About", page: "about" },
  { name: "Team", page: "team" },
  { name: "Services", page: "services" },
  { name: "Contact", page: "contact" },
]

export const TEAM_MEMBERS = [
  {
    name: "Mr. Keerthi",
    title: "Director",
    image: "https://srisaiexim.in/images/mr-keerthi.jpg",
    motto: "Leading the vision and strategic execution of global logistics.",
  },
  // {
  //   name: "Ms. Ganavi S.k",
  //   title: "Operational Manager",
  //   image: "https://srisaiexim.in/images/ganavi.jpg",
  //   motto: "Streamlining operations for maximum efficiency and client satisfaction.",
  // },
]

export const SERVICE_CARDS = [
  {
    id: "air-freight",
    icon: Plane,
    title: "Air Freight",
    description: "Fast, reliable, and secure air transportation for time-critical and high-value shipments worldwide.",
    shortDescription: "Sri Sai Exim's specialist air freight teams constantly monitor direct flights and offer just-in-time deliveries to reduce inventory costs.",
    imageUrl: "https://srisaiexim.in/images/air-freight.jpg",
    content: {
      hero: "Seamless Global Air Cargo Management",
      intro: "Sri Sai Exim specialist air freight teams constantly monitor direct flights and liaise with airlines and agents. With an extensive warehouse network, we also offer temporary storage and just-in-time deliveries that will measurably reduce your inventory costs.",
      services: [
        "Worldwide Air Freight",
        "Global Preferred Carriers",
        "Packaging, crating, and short-term warehousing",
        "Handling of heavy and/or dangerous goods / project cargo",
        "Perishables, Dangerous Goods, Sensitive Cargo Handling",
        "Customs Clearance",
        "Warehousing",
        "Packaging & Pallet Services",
        "Optional Storage Facilities",
        "Proof of Delivery Services",
        "Freight Collect Services",
        "Door-To-Door Services",
      ],
      contact: {
        phone: "+91 9972314988",
        emailLink: "mailto:sales@srisaiexim.in",
      },
    },
  },
  {
    id: "ocean-freight",
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective and flexible seafreight solutions for FCL (Full Container Load) and LCL (Less than Container Load), ensuring global reach.",
    shortDescription: "We handle large loads of goods by sea using containers, ideal for shipments over 100kg.",
    imageUrl: "https://srisaiexim.in/images/ocean-freight.jpg",
    content: {
      hero: "Reliable, High-Volume Global Shipping",
      intro: "Sri Sai Exim handling ocean freight is the method of transporting often large loads of goods by sea – putting cargo in large containers which are loaded onto vessels. As a general rule, shipments weighing more than 100kg – or consisting of multiple cartons – will be sent by sea freight.",
      services: [
        "Transportation (Inland Transport)",
        "Warehousing",
        "Packing, Loading and Stuffing",
        "Perishables, Dangerous Goods, Sensitive Cargo Handling",
        "Door-To-Door Services",
        "LCL Console movements (Less than Container Load)",
        "Tank Containers (for liquids, gases, powders)",
        "Heavy Duty Containers (for specialized cargo)",
      ],
      contact: {
        phone: "+91 9972314988",
        emailLink: "mailto:sales@srisaiexim.in",
      },
    },
  },
  {
    id: "surface-transportation",
    icon: Truck,
    title: "Surface Transportation",
    description: "Efficient road and rail cargo services, ensuring timely and damage-free delivery across land routes.",
    shortDescription: "We provide safe, efficient distribution by road, rail, and integrated freight, backed by our own and leased fleet.",
    imageUrl: "https://srisaiexim.in/images/surface-transportation.jpg",
    content: {
      hero: "Seamless Road, Rail, and Integrated Freight",
      intro: "Surface transportation means any conveyance of people, goods, or commodities using one or more surface transportation modes. Surface transportation primarily means the movement of people and cargo by road, train or ship. With focus and expertise, we provide safe and efficient distribution of a broad variety of goods which includes raw materials, finished and consumer goods, machinery, documents and foodstuffs with support of our dedicated Road Transport team.",
      services: [
        "Tailor-made Road Freight Solutions",
        "Distribution of Raw Materials, Finished Goods, and Machinery",
        "Fleet of own and leased trucks",
        "Seamless Sea-Road Movements",
        "Efficient Air-Road Movements",
        "Highest quality of customer service and perfect handling",
      ],
      contact: {
        phone: "+91 9972314988",
        emailLink: "mailto:sales@srisaiexim.in",
      },
    },
  },
  {
    id: "logistics-&-transportation",
    icon: Zap,
    title: "Logistics & Transportation",
    description: "End-to-end supply chain management, optimizing flow from origin to the final point of delivery.",
    shortDescription: "Expert, integrated supply chain management and transportation solutions.",
    imageUrl: "https://srisaiexim.in/images/logistics-and-transportation.jpg",
    content: {
      hero: "Service Coming Soon",
      intro: "Service Coming Soon We’re working on adding detailed information for this service. Stay tuned for updates.",
      services: [
        "Reliable logistics solutions",
        "Professional support",
        "Timely updates",
      ],
      contact: {
        phone: "+91 9972314988",
        emailLink: "mailto:sales@srisaiexim.in",
      },
    },
  },
  {
    id: "customs-brokerage",
    icon: FileText,
    title: "Customs Brokerage",
    description: "Expert customs clearance and regulatory compliance to navigate complex international trade smoothly.",
    shortDescription: "Licensed brokerage services to minimize delays and ensure smooth international trade.",
     imageUrl: "https://srisaiexim.in/images/custom-brokerage.jpg",
    content: {
      hero: "Service Coming Soon",
      intro: "Service Coming Soon We’re working on adding detailed information for this service. Stay tuned for updates.",
      services: [
        "Reliable logistics solutions",
        "Professional support",
        "Timely updates",
      ],
      contact: {
        phone: "+91 9972314988",
        emailLink: "mailto:sales@srisaiexim.in",
      },
    },
  },
  {
    id: "dg-certification-&-packing",
    icon: Package,
    title: "DG Certification & Packing",
    description: "Certified and specialized handling of Dangerous Goods compliant with global safety standards.",
    shortDescription: "Specialized handling and certification for safe transport of hazardous materials.",
    imageUrl: "https://srisaiexim.in/images/dg-certification-and-packing.jpg",
    content: {
      hero: "Service Coming Soon",
      intro: "Service Coming Soon We’re working on adding detailed information for this service. Stay tuned for updates.",
      services: [
        "Reliable logistics solutions",
        "Professional support",
        "Timely updates",
      ],
      contact: {
        phone: "+91 9972314988",
        emailLink: "mailto:sales@srisaiexim.in",
      },
    },
  },
]
