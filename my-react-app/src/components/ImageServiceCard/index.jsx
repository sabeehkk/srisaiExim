"use client"

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { PRIMARY_COLOR, ACCENT_COLOR, TEAL ,VIOLET} from "@/lib/constants" 
import { useInViewAnimation } from "@/lib/hooks"

const ImageServiceCard = ({ title, shortDescription, imageUrl, index, linkPath }) => {
  const ref = useRef(null)
  const inView = useInViewAnimation(ref)

  const finalLinkPath = linkPath || `/services/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl overflow-hidden shadow-xl shadow-gray-400/30 transition duration-500 ease-out 
        transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-gray-500/50 cursor-pointer 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ animationDelay: `${index * 0.1}s`, border: "1px solid #e5e7eb" }}
    >
      <div className="w-full aspect-[3/2] overflow-hidden relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) =>
            (e.target.src = `https://placehold.co/600x400/${PRIMARY_COLOR.slice(1)}/FFFFFF?text=${title.replace(" ", "+")}`)
          }
        />
        <div 
          className="absolute inset-0 bg-transparent transition-all duration-500 ease-in-out 
                     group-hover:bg-gradient-to-t group-hover:from-black/10 group-hover:to-transparent"
        ></div>
      </div>

      <div className="p-4 sm:p-6 text-center">
        
       
        <h3 
          className="text-lg sm:text-xl font-bold mb-2" 
          
          style={{ color: PRIMARY_COLOR }} 
        >
          {title}
        </h3>
        
      
        <p className="text-sm mb-4" 
          
           style={{ color: '#6b7280' }}
        >
          {shortDescription}
        </p>

        <a
          href={finalLinkPath}
        
          className="inline-flex items-center justify-center w-auto px-5 py-2 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 border-2"
          style={{ 
            backgroundColor: PRIMARY_COLOR, 
            color: 'white', 
            borderColor: PRIMARY_COLOR,
          }}
          onMouseEnter={(e) => {
       
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = VIOLET;
            e.currentTarget.style.borderColor = VIOLET; 
          }}
          onMouseLeave={(e) => {
        
            e.currentTarget.style.backgroundColor = TEAL;
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = TEAL;
          }}
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export default ImageServiceCard