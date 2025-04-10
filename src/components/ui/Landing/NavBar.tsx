import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <header>
      <div className="sticky top-0 flex justify-between items-center h-16 border-b-1 border-gray-300">
        <div>
          <img
            src="../../../../../../images/pcglogo.png"
            alt="Presbyterian Church logo"
            width={100}
            height={80}
          />
        </div>
        <div>
          <ul className="flex items-center gap-8 text-theme-xl">
            <Link
              to="#"
              className="lg:hover:border-b-2 border-brand-500 transition-all ease-in-out duration-300"
            >
              <li>Home</li>
            </Link>
            <Link
              to="#about"
              className="lg:hover:border-b-2 border-brand-500 transition-all ease-in-out duration-300"
            >
              <li>About</li>
            </Link>
            <Link
              to="#features"
              className="lg:hover:border-b-2 border-brand-500 transition-all ease-in-out duration-300"
            >
              <li>Features </li>
            </Link>
          </ul>
        </div>
        <div>
          <button className="bg-brand-500 rounded-lg text-white px-4 py-2 cursor-pointer lg:hover:bg-brand-400">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
