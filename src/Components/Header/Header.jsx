import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center bg-[#e7d9fa] text-lg font-semibold space-x-6 p-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Header;
