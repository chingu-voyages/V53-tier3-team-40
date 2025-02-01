import { NavLink } from "react-router-dom";

const Menu = ({ className }) => {
  const linkStyle = ({ isActive }) =>
    `font-medium ${
      isActive ? "text-blue-500" : "text-gray-900"
    } hover:text-blue-400 mx-4 border border-white rounded-full px-6 py-2`;

  return (
    <nav className={className}>
      <NavLink to="/" end className={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/help-animals" className={linkStyle}>
        Help Animals
      </NavLink>
      <NavLink to="/search" className={linkStyle}>
        Search
      </NavLink>
      <NavLink to="/map" className={linkStyle}>
        Map
      </NavLink>
    </nav>
  );
};

export default Menu;
