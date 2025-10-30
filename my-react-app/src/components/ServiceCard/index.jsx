"use client"

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { PRIMARY_COLOR, ACCENT_COLOR,TEAL } from "@/lib/constants"
import { useInViewAnimation } from "@/lib/hooks"

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const ref = useRef(null)
  const inView = useInViewAnimation(ref)

  return (
    <div
      ref={ref}
      className={`p-6 md:p-8 bg-white border border-gray-100 rounded-xl shadow-lg transition duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-accent cursor-pointer ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-xl bg-primary text-white shadow-lg" style={{ backgroundColor: PRIMARY_COLOR }}>
          <Icon className="w-8 h-8" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button
        className="flex items-center text-primary font-semibold text-sm transition duration-300 hover:text-accent"
        style={{ color: PRIMARY_COLOR }}
        onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
        onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
      >
        View Details
        <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  )
}

export default ServiceCard
