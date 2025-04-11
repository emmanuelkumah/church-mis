import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";

import { Link } from "react-router";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);
  const toggleNavMenus = () => {
    setOpenMenu((prevVal) => !prevVal);
  };
  return (
    <nav className="relative border-b-1 border-gray-300 shadow-xs">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo and primary nav */}
          <div>
            <img
              src="../../../../../images/pcglogo.png"
              width={100}
              alt="PCG logo"
            />
          </div>

          {/* Primary nav and cta hidden  on mobile */}
          <div className="hidden md:flex md:gap-32 items-center">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="#"
                className="hover:border-b-4 border-brand-500 transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
              <Link
                to="#"
                className="hover:border-b-4 border-brand-500 transition-all duration-300 ease-in-out"
              >
                About
              </Link>
              <Link
                to="#"
                className="hover:border-b-4 border-brand-500 transition-all duration-300 ease-in-out"
              >
                Features
              </Link>
            </div>
            <div>
              <button className="w-full bg-brand-500 rounded-lg px-4 py-2 text-white hover:bg-brand-400 cursor-pointer">
                Login
              </button>
            </div>
          </div>
          {/* mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavMenus}
              className="cursor-pointer border border-brand-400 rounded-lg p-2"
            >
              {openMenu ? <RiCloseLargeFill /> : <CiMenuBurger />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-brand-100 shadow-xl ${
          openMenu ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 px-4">
          <Link
            to="#"
            className="hover:text-brand-500 transition-all duration-300 ease-in-out mt-4"
          >
            Home
          </Link>
          <Link
            to="#"
            className="hover:text-brand-500 transition-all duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="#"
            className="hover:text-brand-500 transition-all duration-300 ease-in-out"
          >
            Features
          </Link>
        </div>
        <div className="mt-4">
          <button className="w-full bg-brand-500 rounded-xs px-4 py-2 text-white hover:bg-brand-400 cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
