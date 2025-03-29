import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import log from "../../assets/log.png";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

// Navigation menu items
const navigation = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Shop", path: "/shop" },
  { title: "Product", path: "/product" },
  { title: "Blog", path: "/blog" },
];

const Header = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? "bg-gray-900 shadow-md fixed" : "bg-transparent shadow-sm"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-20">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={log}
            alt="Logo"
            className="lg:w-12 md:w-10 w-8 invert brightness-200"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-semibold">
          {navigation.map((nav) => (
            <li key={nav.path}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  `hover:text-sky-400 transition-colors duration-200 font-bold ${isActive ? "text-sky-400" : "text-white"
                  }`
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side - Icons or Login */}
        <div className="flex items-center space-x-4">
         
            <div className="flex space-x-4 text-xl">
              <NavLink to="/profile" className="p-2 rounded-full">
                <FaUser  className={({ isActive }) =>
                  `hover:text-sky-400 transition-colors duration-200 font-bold ${isActive ? "text-sky-400" : "text-white"
                  }`
                } />
              </NavLink>
            </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden block focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-md p-4">
          <ul className="font-semibold text-center space-y-2">
            {navigation.map((nav) => (
              <li key={nav.path}>
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    `block py-2 transition-colors duration-200 ${isActive ? "text-sky-400" : "text-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}

            {/* Show profile, bag, and cart only if logged in */}
            {userName && (
              <div className="flex justify-center space-x-4 text-xl pt-4">
                <NavLink to="/profile" className="p-2 rounded-full">
                  <FaUser className="cursor-pointer text-white hover:text-cyan-500" />
                </NavLink>
                <NavLink to="/userbag" className="p-2 rounded-full">
                  <FaHeart className="cursor-pointer text-white hover:text-red-500" />
                </NavLink>
                <NavLink to="/cart" className="p-2 rounded-full">
                  <FaShoppingBag className="cursor-pointer text-white hover:text-green-500" />
                </NavLink>
              </div>
            )}

            {!userName && (
              <div className="flex justify-center pt-4">
                <NavLink
                  to="/login"
                  className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full"
                >
                  Login
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
