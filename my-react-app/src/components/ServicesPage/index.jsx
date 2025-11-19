import { PRIMARY_COLOR, ACCENT_COLOR, SERVICE_CARDS, TEAL, VIOLET } from "@/lib/constants"
import SectionWrapper from "@/components/SectionWrapper"
import ServicesGridSection from "@/components/ServicesGridSection"
import ServiceCard from "@/components/ServiceCard"

const ServicesPage = () => (
  // <SectionWrapper id="services-page" className="bg-gray-50">
  //   <div className="text-center mb-16">
  //     <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2" style={{ color: TEAL }}>
  //       What we offer
  //     </p>

  //     <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
  //       <span style={{ color: PRIMARY_COLOR }}>Our </span>Expertise
  //     </h2>
  //     <p className="text-xl text-gray-600">
  //       We have a wide array of expertise in international transportation both air and sea Our Innovation Adaptability,
  //       Leadership and Team work have enabled us to elevate our service to new heights. We Continuously Invest in the
  //       latest technologies and support it with a constant study of market conditions, this allows us to offer
  //       innovative solutions that are customized for each customer specific requirements.
  //     </p>
  //   </div>

  //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //     {SERVICE_CARDS.map((service, index) => (
  //       <ServiceCard key={service.id} {...service} index={index} />
  //     ))}
  //   </div>
  // <ExpertiseGridSection />
  // </SectionWrapper> 
  <div>
    <ServicesGridSection/>
  </div>
)

export default ServicesPage
