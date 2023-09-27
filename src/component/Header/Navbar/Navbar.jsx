import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";



const Navbar = () => {
  return (
    <div>
      <nav className="lg:flex md:flex justify-between  items-center mt-4"> 
        <Logo></Logo>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 font-bold underline" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 font-bold underline" : ""
              }
            >
              Donation
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 font-bold underline" : ""
              }
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
