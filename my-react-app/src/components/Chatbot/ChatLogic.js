// ChatLogic.js

/**
 * Knowledge base for SRI SAI EXIM.
 * Keywords are lowercased for matching.
 */
const knowledgeBase = {
  // --- GREETINGS ---
  "hello": "Hello! Welcome to SRI SAI EXIM. How can I assist you with your export or import query today?",
  "hi": "Welcome to Sri Sai Exim. How may we assist you today? We provide complete solutions for international freight forwarding, customs brokerage, and logistics management.",
  "hey": "Hello! How can Sri Sai Exim assist you with your logistics, customs, or freight queries today?",

  // --- CONTACT INFORMATION ---
  "contact": `Contact Information:
Phone: +91 99723 14988
Email: sales@srisaiexim.in
Business Hours: Monday – Saturday, 9:00 AM – 6:00 PM IST
Our team aims to respond to all queries within 24 hours.`,
  "how to approach you": `Contact Information:
Phone: +91 99723 14988
Email: sales@srisaiexim.in
Business Hours: Monday – Saturday, 9:00 AM – 6:00 PM IST
Our team aims to respond to all queries within 24 hours.`,
  "how can i contact you": `Contact Information:
Phone: +91 99723 14988
Email: sales@srisaiexim.in
Business Hours: Monday – Saturday, 9:00 AM – 6:00 PM IST
Our team aims to respond to all queries within 24 hours.`,
  "phone": "You can reach us at +91 99723 14988 during business hours.",
  "email": "You can email us at sales@srisaiexim.in. We respond to all inquiries within 24 hours.",
  "address": "Our office is located at No. 310, F Block, 10TH Cross, Sahakaranagar, Bengaluru - 560092.",

  // --- CORE SERVICES ---
  "air freight": `Air Freight Services — Sri Sai Exim ensures swift and reliable air cargo movement for time-sensitive shipments.
Process Overview:
1. Cargo pickup and verification
2. Documentation and Airway Bill preparation
3. Customs clearance and security inspection
4. Flight scheduling and dispatch
5. Cargo tracking and delivery confirmation
We partner with leading global airlines to ensure fast transit times, secure handling, and consistent performance.`,

  "ocean freight": `Ocean Freight Services — We provide end-to-end sea freight solutions including FCL and LCL shipments.
Process Overview:
1. Booking and container allocation
2. Cargo consolidation and documentation
3. Customs clearance and export compliance
4. Port handling and shipment dispatch
5. Tracking and final delivery to destination
Our global partnerships ensure efficient and reliable cargo transport.`,

  "surface transportation": `Surface Transportation — Sri Sai Exim provides domestic and regional road transport for all types of cargo.
Process Overview:
1. Route planning and scheduling
2. Cargo pickup and secure loading
3. Transportation with real-time tracking
4. Delivery confirmation to consignee
We prioritize safe handling and timely delivery.`,

  "customs brokerage": `Customs Brokerage — We manage customs clearance formalities efficiently to avoid delays.
Process Overview:
1. Preparation of required documents (Invoices, Packing List, Bill of Entry)
2. Submission to customs authorities
3. Payment of duties and taxes
4. Coordination with carriers for cargo release
5. Tracking and confirmation of clearance
We ensure full compliance with Indian Customs and DGFT regulations.`,

  "dg certification & packing": `DG Certification & Packing — Safe handling of sensitive or hazardous goods is ensured through proper certification and packaging.
Process Overview:
1. Evaluation of goods and packaging requirements
2. Certification of compliance with DG norms
3. Packaging using approved materials
4. Handover for transport with documentation
Safety and regulatory compliance are always ensured.`,

  "logistics": `Logistics & Transportation — Integrated logistics solutions including warehousing, distribution, and supply chain management.
Process Overview:
1. Inventory management
2. Transportation scheduling
3. Real-time cargo tracking
4. Delivery and confirmation
We optimize cost, time, and safety for every shipment.`,

  // --- OPERATIONS & FINANCE ---
  "payment terms": "For new clients, standard payment terms are 50% advance and 50% against BL copy or via irrevocable Letter of Credit (L/C). Customized terms are available for established partners.",
  "moq": "Minimum Order Quantity (MOQ) depends on the product type and logistics service required. Please provide details of your shipment for exact requirements.",
  "quality control": "Our quality control focuses on cargo safety, packaging integrity, and documentation accuracy. Pre-shipment checks and compliance assurance are standard.",
  "certifications": "We operate with all necessary licenses and certifications required by Indian Customs and DGFT for freight operations.",

  // --- EXPORT/IMPORT PRODUCTS ---
  "export products": "We primarily handle logistics for a wide range of goods, including spices, coir products, textiles, and other cargo as per client requirements.",
  "import": "We assist with import customs clearance and transportation of all types of legal cargo, including machinery, raw materials, and other shipments as required by clients.",

  // --- LEAD TIME & INCOTERMS ---
  "lead time": "Lead time varies based on the shipping mode and destination. For general cargo, expect 4-6 weeks for sea shipments and 3-7 days for air shipments.",
  "incoterms": "We commonly facilitate shipments using FOB (Free On Board) and CIF (Cost, Insurance, and Freight). Our team helps finalize the best Incoterm for your trade.",

  // --- TRACKING ---
  "tracking": "Yes, we provide real-time cargo tracking for both air and sea shipments. A tracking number and link will be provided upon confirmation of your booking.",

  // --- DEFAULT FALLBACK ---
  "default": "I'm sorry, I do not have specific information regarding that query. You may ask about our air freight, ocean freight, customs brokerage, surface transportation, DG certification & packing, payment terms, or contact details. Alternatively, please email sales@srisaiexim.in or call +91 99723 14988 for direct assistance."
};

/**
 * Searches the knowledge base for an answer based on user input.
 * @param {string} userInput
 * @returns {string} Bot response
 */
export const getBotResponse = (userInput) => {
  const text = userInput.toLowerCase().trim();

  for (const keyword in knowledgeBase) {
    if (text.includes(keyword)) {
      return knowledgeBase[keyword];
    }
  }

  return knowledgeBase["default"];
};
