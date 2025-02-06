import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const linkStyle = ({ isActive }) =>
    `font-medium ${
      isActive ? "text-blue-500" : "text-gray-900 dark:text-gray-300"
    } whitespace-nowrap hover:text-blue-400 dark:hover:text-blue-400 mx-4 px-5 py-2`;

  return (
    <>
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
    </>
  );
}
