import { navItems } from "../constants";
import logo from "../image/logo.png";
import {Menu,X} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false); // State to toggle nav items visibility
  
  // Function to toggle the mobile nav visibility
  const togglerNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          
          {/* Logo on the left */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-8 w-15 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Kings</span>
          </div>

          {/* Hamburger menu on mobile */}
          <div className="lg:hidden flex items-center">
            <button onClick={togglerNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />} {/* Change between X and Menu */}
            </button>
          </div>

          {/* Desktop navigation items */}
          <ul className="hidden lg:flex items-center ml-14 space-x-12 pt-1.5">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="  hover:text-orange-500 hover:underline transition-all duration-200"
                  
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Sign In / Create an Account buttons */}
          <div className="lg:flex hidden justify-between space-x-12 items-center">
            <a href="#" className="py-2 px-2 border rounded-md ml-6 w-1/2">Sign in</a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md whitespace-nowrap">
              Create Account
            </a>
          </div>
        </div>

        {/* Mobile Nav items */}
        {mobileDrawerOpen && (
          <ul className="lg:hidden absolute top-0 right-0 mt-14 mr-4 bg-black text-white shadow-lg rounded-md w-56 space-y-4 p-4">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }} // Delay each item by 100ms
              >
                <a
                  href={item.href}
                  onClick={() => setMobileDrawerOpen(false)} // Close the menu when a link is clicked
                  className="hover:text-orange-500 hover:underline transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <div className="flex space-x-2">
              <a href="#" className="py-2 px-3 border rounded-md whitespace-nowrap">Sign In</a>
              <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 whitespace-nowrap"> Create Account</a>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
