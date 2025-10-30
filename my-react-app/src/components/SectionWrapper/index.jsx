"use client"

import { useRef } from "react"
import { useInViewAnimation } from "@/lib/hooks"

const SectionWrapper = ({ children, className = "", id }) => {
  const ref = useRef(null)
  const inView = useInViewAnimation(ref)

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-16 font-poppins transition-opacity duration-1000 ease-in transform ${className} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export default SectionWrapper
