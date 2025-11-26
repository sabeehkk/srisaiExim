import React from 'react';
import { CLIENT_LOGOS } from "@/lib/constants";
import { PRIMARY_COLOR, ACCENT_COLOR, SERVICE_CARDS } from "@/lib/constants"; 

const LogoGrid = () => {
  const logos = CLIENT_LOGOS;

  return (
    <div className="py-16 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 tracking-tight sm:text-4xl">
          Clients
        </h2>
         <div className="w-20 h-1 mx-auto mt-3  rounded-full mb-12 " style={{ backgroundColor: PRIMARY_COLOR }}></div>
        {/* Grid layout maintained for 4 columns on desktop: grid-cols-2 for small, md:grid-cols-4 for medium/large */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              // *** MODIFIED: Increased container height from h-24 to h-32 to make the logo visibly larger. ***
              className="col-span-1 flex justify-center items-center h-32 p-4 bg-white rounded-lg shadow-md 
                        hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 group"
            >
              {/* MODIFIED: Reduced inner padding from p-3 to p-2 to give the logo more space inside the h-32 container. */}
              <div className="w-full h-full flex items-center justify-center p-2 opacity-80 group-hover:opacity-100 transition duration-500">
                <img
                  src={logo.url}
                  alt={logo.name + " Logo"}
                  // max-h-full ensures the image scales to the new h-32 size
                  className="object-contain max-h-full max-w-full filter grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;