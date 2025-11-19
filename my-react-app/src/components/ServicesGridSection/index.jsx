import { PRIMARY_COLOR, ACCENT_COLOR, SERVICE_CARDS } from "@/lib/constants"
import SectionWrapper from "@/components/SectionWrapper"
import ImageServiceCard from "@/components/ImageServiceCard"

const ExpertiseGridSection = ({ setPage }) => (
  <SectionWrapper id="expertise-grid" className="bg-white">
    <div className="text-center mb-12 md:mb-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        Our <span style={{ color: PRIMARY_COLOR }}>Expertise</span>
      </h2>
      <div className="w-24 h-1 mx-auto mt-4 mb-8 rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></div>
      <p className="text-lg text-gray-600 leading-relaxed">
        We have a wide array of expertise in international transportation both air and sea Our Innovation Adaptability,
        Leadership and Team work have enabled us to elevate our service to new heights. We Continuously Invest in the
        latest technologies and support it with a constant study of market conditions, this allows us to offer
        innovative solutions that are customized for each customer specific requirements.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {SERVICE_CARDS.map((service, index) => (
        <ImageServiceCard
          key={service.id}
          title={service.title}
          shortDescription={service.description}
          imageUrl={service.imageUrl}
          index={index}
          setPage={setPage}
        />
      ))}
    </div>
  </SectionWrapper>
)

export default ExpertiseGridSection
