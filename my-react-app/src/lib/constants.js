import { Plane, Ship, Truck, Zap, FileText, Package } from "lucide-react"
//import air_freight from "@/assets/air_freight.jpg"
import airFreight from "@/assets/airFreight.jpg"
import oceanFreight from "@/assets/oceanFreight.jpg"
import cargoTruck from "@/assets/cargoTruck.jpg"
import logistics from "@/assets/logistics.jpg"
import dgCertification from "@/assets/dgCertification.jpg"
import airFreightServices from "@/assets/airFreightServices.jpg"
import customsClearance from "@/assets/customsClearance.jpg"
//import customsClearanceConsultation from "@/assets/customsClearanceConsultation.jpg"
import DGAdvisory from "@/assets/DGAdvisory.jpg"
import customsComplianceAdvisory from "@/assets/customsComplianceAdvisory.jpg"
import internationalTradeGuidance from "@/assets/internationalTradeGuidance.jpg"
import supplyChainLogisticsPlanning from "@/assets/supplyChainLogisticsPlanning.jpg"
import projectCargoSpecialCargoConsultancy from "@/assets/projectCargoSpecialCargoConsultancy.jpg"
import exportImportStrategy from "@/assets/exportImportStrategy.jpg"


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
  // { name: "Contact", page: "contact" },
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
    //imageUrl: "https://srisaiexim.in/images/air-freight.jpg",
    imageUrl:`${airFreight}`,
    bannerImg:`${airFreightServices}`,
    content: {
      hero: "Seamless Global Air Cargo Management",
      intro: "We provide reliable, time-bound and flexible air-freight solutions designed for urgent, high-value, and sensitive cargo.",
      services: [
            "Next-Flight-Out, Express & Priority Air Cargo for immediate delivery requirements",
            "Direct and Consolidated Air Shipments based on cost and speed preferences",
            "Door-to-Door, Airport-to-Airport and Multimodal Options ensuring seamless movement",
            "Temperature-Controlled & Pharma Cargo Handling with specialised monitoring",
            "Dangerous Goods (DG), Heavy Lift & Oversized Cargo Handling with expert supervision",
            "Air Charter Solutions for large, urgent or non-standard commodities",
            "Professional packaging, palletizing and crating, ensuring cargo safety during transit",
            "End-to-end documentation support, customs processing, and real-time shipment updates",
      ],
      contact: {
        phone: "+91 9945242861",
        emailLink: "mailto:sales@srisaiexim.in",
      },
    },
  },
  {
    id: "ocean-freight",
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective and flexible seafreight solutions for FCL and LCL, ensuring global reach.",
    shortDescription: "We handle large loads of goods by sea using containers, ideal for shipments over 100kg.",
    imageUrl: "https://srisaiexim.in/images/ocean-freight.jpg",
    imageUrl :`${oceanFreight}`,
    bannerImg:`${oceanFreight}`,
    content: {
      hero: "Reliable, High-Volume Global Shipping",
      intro: "Our ocean-freight services provide economical, scalable solutions for bulk and containerized shipments across global trade lanes.",
      services: [
            "FCL (Full Container Load) & LCL (Less-than-Container Load) based on volume",
            "Consolidation Services to optimise shipping costs for small consignments",
            "Scheduled Weekly Sailings, fixed cut-offs and dependable transit timelines",
            "Special Equipment Handling including open-top, flat-rack and reefer containers",
            "Door-to-Port, Port-to-Door & Door-to-Door movement with pick-up and last-mile delivery",
            "Cargo Stuffing, De-stuffing, Warehousing & Storage support at major ports",
            "Break-bulk and Project Cargo handling for large/irregular industrial shipments",
            "Digital booking, loading confirmation and shipment visibility at each stage",
          ]
          ,
      contact: {
        phone: "+91 9945242861",
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
    // imageUrl: "https://srisaiexim.in/images/surface-transportation.jpg",
    imageUrl : `${cargoTruck}`,
    bannerImg:`${cargoTruck}`,
    content: {
      hero: "Seamless Road, Rail, and Integrated Freight",
      intro: "A strong and dependable ground-transport network ensures smooth cargo movement within India and cross-border routes.",
      services: [
            "FTL (Full Truck Load) & LTL (Less Than Truck Load) services for flexible cargo volumes",
            "Heavy-Haul, Oversized & Out-of-Gauge Cargo with engineering-based route planning",
            "Route Survey, Permit Approvals & Escort Services for complex and high-risk consignments",
            "Temperature-Controlled Transport for perishable, pharma and sensitive goods",
            "Crane, Rigging, Loading/Unloading & Cargo-Securing infrastructure for safe handling",
            "Real-time movement tracking and dedicated delivery coordination",
          ]
          ,
      contact: {
        phone: "+91 9945242861",
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
    // imageUrl: "https://srisaiexim.in/images/logistics-and-transportation.jpg",
    imageUrl : `${logistics}`,
    bannerImg:`${logistics}`,
    content: {
      hero: "Logistics & Transportation",
      intro: "We provide complete customs-clearance and regulatory-compliance assistance for smooth import and export operations.",
      services: [
        "Multi-modal coordination across air, sea, and road to shorten transit time and reduce cost",
        "Warehousing, Distribution & Inventory Management at key strategic locations",
        "Packing, Crating, Palletizing & Labelling for export-ready shipments",
        "First-mile pick-up to last-mile delivery across domestic and international destinations",
        "Project Logistics Management for industrial machinery, plant relocations, renewable-energy cargo, and heavy equipment",
        "Cargo Insurance Assistance ensuring protection for high-value shipments",
        "Dedicated client support, documentation management, and shipment monitoring",
      ],
      contact: {
        phone: "+91 9945242861",
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
    imageUrl: `${customsClearance}`,
    bannerImg: `${customsClearance}`,
    content: {
      hero: "Customs Brokerage",
      intro: "We provide complete customs-clearance and regulatory-compliance assistance for smooth import and export operations.",
      services: [
            "Import & Export Documentation, filing, assessment and coordination with customs",
            "Duty Drawback, Refunds, Claims & Post-Clearance Support",
            "Support for certifications: BIS, WPC, EPR, ETA, FSSAI (as applicable)",
            "AEO Certification Guidance for exporters/importers and logistics operators",
            "Special Valuation Branch (SVB) Support – fresh cases, renewal, supplier addition",
            "Handling Show-Cause Notices, Appeals, Bond Closure & Final Assessment",
            "Regulatory updates and compliance advisory to minimise delays and penalties",
      ],
      contact: {
        phone: "+91 9945242861",
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
    //imageUrl: "https://srisaiexim.in/images/dg-certification-and-packing.jpg",
    imageUrl :`${dgCertification}`,
    bannerImg:`${dgCertification}`,
    content: {
      hero: "dg-certification-&-packing",
      intro: "We are equipped to handle Dangerous Goods (DG) with full compliance to international safety standards.",
      services: [
            "DG Classification & Documentation based on the cargo nature and hazard category",
            "Correct UN Certification, Labelling & Marking as per aviation and maritime guidelines",
            "Specialised DG-approved Packaging, crating and cushioning to ensure safe transport",
            "Handling of Lithium Batteries, Chemicals, Flammable Goods, Toxic Items, and other regulated materials",
            "Safety audit, compliance checks and advisory before acceptance for shipment",
            "Trained DG-certified personnel ensuring complete end-to-end compliance",
      ],
      contact: {
        phone: "+91 9945242861",
        emailLink: "mailto:sales@srisaiexim.in",
      },
    },
  },
]

// src/lib/constants.js

export const servicesData = [
  {
    title: "Supply Chain/Logistics Planning",
    iconUrl: `${supplyChainLogisticsPlanning}`,
    // ADDED: Premium description for card view
    description: "Optimize transport modes, route planning, and consolidation strategies to ensure cost-effective and timely delivery.",
    details: [
      "Assessing transport modes (air/sea/road) to recommend the most cost-effective and time-efficient solution.",
      "Route planning for standard, temperature-controlled, heavy-haul and project cargo.",
      "Optimising consolidation, container utilisation, and shipment cycles to reduce cost.",
      "Advising on packaging, palletising, warehousing, and multimodal flow to improve cargo safety and speed."
    ],
  },
  {
    title: "International Trade Guidance",
    iconUrl: `${internationalTradeGuidance}`,
    // ADDED: Premium description for card view
    description: "Receive step-by-step guidance on export licensing, documentation, and trade-lane selection for seamless global market entry.",
    details: [
      "Step-by-step support for new exporters/importers entering global markets.",
      "Advising on export licensing, documentation readiness, country-specific regulations and shipping standards.",
      "Guidance for sourcing, vendor coordination, overseas delivery commitments and trade-lane selection."
    ],
  },
  {
    title: "Customs & Compliance Advisory",
    iconUrl: `${customsComplianceAdvisory}`,
    // ADDED: Premium description for card view
    description: "Ensure regulatory adherence through pre-shipment checks, audit preparedness, and duty-drawback optimization.",
    details: [
      "Pre-shipment compliance checks to avoid customs delays or penalties.",
      "Consultancy for certifications such as BIS, WPC, EPR, ETA and other regulatory requirements.",
      "Support on AEO certification, SVB cases, duty-drawback optimisation and audit preparedness.",
      "Review of customs filings, tariff classification, valuation, and regulatory updates."
    ],
  },
  {
    title: "Project Cargo & Special Cargo",
    iconUrl: `${projectCargoSpecialCargoConsultancy}`,
    // ADDED: Premium description for card view
    description: "Technical planning for oversized, heavy-lift, and out-of-gauge shipments, including route feasibility and risk evaluation.",
    details: [
      "Technical planning for oversized, out-of-gauge, machinery and heavy-lift shipments.",
      "Route feasibility studies, equipment selection, lifting/rigging recommendations and risk evaluation.",
      "Tailored consultations on chartering, special equipment selection and high-value cargo insurance."
    ],
  },
  {
    title: "Dangerous Goods (DG) Advisory",
    iconUrl: `${DGAdvisory}`,
    // ADDED: Premium description for card view
    description: "Comprehensive guidance on DG classification, required certifications, and safe transport methods for hazardous materials.",
    details: [
      "Guidance on DG classification, packaging, certifications and required documentation.",
      "Reviewing safe transport methods for chemicals, lithium batteries, flammable and toxic substances.",
      "Pre-acceptance checks to ensure air/sea carriers approve the shipment without delays."
    ],
  },
  {
    // title: "End-to-End Export/Import Strategy",
        title: "Export & Import Strategy",

    iconUrl: `${exportImportStrategy}`,
    // ADDED: Premium description for card view
    description: "Complete strategic planning for scaling international operations, from supply-chain design to final customs and delivery commitments.",
    details: [
      "Complete planning for businesses scaling their international shipments — from supply-chain design to customs, transport mode, cargo safety and delivery commitments.",
      "Tailored packages for startups, SMEs and enterprises looking to strengthen global operations."
    ],
  },
];