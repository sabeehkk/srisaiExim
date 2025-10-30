import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const linkClasses = ({ isActive }) =>
    `hover:text-blue-600 transition-colors duration-200 ${
      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <nav className="flex space-x-6 text-lg">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About
        </NavLink>
        <NavLink to="/team" className={linkClasses}>
          Team
        </NavLink>
        <NavLink to="/services" className={linkClasses}>
          Services
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default NavLinks;
