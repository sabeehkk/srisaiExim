"use client";

import { useRef } from "react";
import { PRIMARY_COLOR, ACCENT_COLOR, TEAL } from "@/lib/constants";
import { useInViewAnimation } from "@/lib/hooks";

const TeamMember = ({ member, index }) => {
  const ref = useRef(null);
  const inView = useInViewAnimation(ref);

  return (
    <div
      ref={ref}
      className={`
        p-6 sm:p-8 bg-white rounded-xl shadow-lg text-center 
        transition duration-700 ease-out transform 
        hover:-translate-y-2 hover:shadow-2xl border-b-4
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{
        animationDelay: `${index * 0.15}s`,
        borderColor: TEAL,
      }}
    >
      {/* Member Image */}
      <img
        src={member.image || "/placeholder.svg"}
        alt={member.name}
        className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full object-cover object-top border-4 shadow-md"
        style={{ borderColor: PRIMARY_COLOR }}
        onError={(e) => {
          e.target.src = `https://placehold.co/200x200/${ACCENT_COLOR.slice(
            1
          )}/000000?text=${member.name.split(" ")[0]}`;
        }}
      />

      {/* Name & Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
        {member.name}
      </h3>
      <p
        className="text-sm sm:text-base font-semibold mb-2 sm:mb-3"
        style={{ color: PRIMARY_COLOR }}
      >
        {member.title}
      </p>

      {/* Motto */}
      {member.motto && (
        <p className="text-gray-600 italic text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
          "{member.motto}"
        </p>
      )}
    </div>
  );
};

export default TeamMember;
