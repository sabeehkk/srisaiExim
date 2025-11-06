import { Link } from "react-router-dom";
import { PRIMARY_COLOR, TEAM_MEMBERS, TEAL } from "@/lib/constants";
import SectionWrapper from "@/components/SectionWrapper";
import TeamMember from "@/components/TeamMember";

const TeamPage = () => {
  return (
    <SectionWrapper id="team-page" className="bg-gray-50 font-poppins">
      {/* Header Section */}
      <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-500 text-sm mb-1">
          Home / <span className="font-medium" style={{ color: PRIMARY_COLOR }}>Our Team</span>
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Meet Our{" "}
          <span className="font-extrabold" style={{ color: PRIMARY_COLOR }}>
            Expert Team
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          The leadership that makes global logistics seamless—united by experience, passion,
          and a commitment to excellence.
        </p>

        <div
          className="w-20 sm:w-24 h-1 mx-auto mt-4 rounded-full"
          style={{ backgroundColor: PRIMARY_COLOR }}
        ></div>
      </div>

      {/* Team Members Grid */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={member.name} className="w-full sm:w-[45%] lg:w-[30%]">
              <TeamMember
                member={member}
                index={index}
                totalMembers={TEAM_MEMBERS.length}
              />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="text-center mt-16 p-8 sm:p-10 bg-primary rounded-xl shadow-2xl max-w-4xl mx-auto"
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          <p className="text-lg sm:text-xl font-light text-white mb-4">
            For all inquiries, please call{" "}
            <span
              className="font-bold"
              style={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
              }}
            >
              +91 9945242861
            </span>{" "}
            or reach out below.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-4 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg text-white shadow-xl transition-transform duration-300 transform hover:scale-105"
            style={{ backgroundColor: "#30b6f0", color:"#FFFFFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = TEAL)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#30b6f0")}
          >
            Contact Now
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TeamPage;

