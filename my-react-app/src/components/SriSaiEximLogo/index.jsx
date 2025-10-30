"use client"
//import './index.css'

const SriSaiEximLogo = ({ className = "w-auto h-10", onClick }) => (
  <button
    onClick={onClick}
    // Ensures classes like h-14 from the parent are applied
    className={`flex items-center space-x-2 font-poppins focus:outline-none bg-transparent border-none shadow-none m-0 ${className}`} 
    style={{
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
      outline: "none" ,
    }}
  >
    <svg
      className="w-10 h-10" // Explicitly size the SVG icon
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent", }}
    >
        {/* Placeholder for the actual SVG path/content, if any */}
    </svg>

    <img
      src="https://srisaiexim.in/images/sri-sai-exim.png"
      className="h-full object-contain" // Use h-full to size the image relative to the button height
      style={{ backgroundColor: "transparent" }}
    />

    <span 
        // CRITICAL FIX: Added whitespace-nowrap to prevent the text from wrapping
        className="text-xl font-extrabold tracking-tight text-gray-900 whitespace-nowrap">
      SRI SAI <span style={{ color: "#0047AB" }}>EXIM</span>
    </span>
  </button>
)

export default SriSaiEximLogo