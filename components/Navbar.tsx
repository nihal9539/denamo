"use client";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 w-screen  flex justify-center z-[999] p-3 bg-transparent ">
      <div className={`bg-white/90 w-[85%] max-md:w-[100%] shadow-lg  px-3.5 py-2 rounded-3xl max-md:rounded-2xl`}>
        <div className="container mx-auto flex items-center justify-start">
          {/* Logo */}
          <a href="#" className="flex items-center" id="logo">
            <img src="./logo.jpg" className="w-10 h-8" alt="Logo" />
          </a>

          {/* Hamburger button (only visible on small screens) */}

          {/* Navigation Links for larger screens */}
          <div className={`hidden lg:flex lg:items-center lg:space-x-6 ml-6`}>
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900  font-semibold px-2.5 rounded-lg"
            >
              Home
            </a>
            <a
              href="#packages"
              className="text-gray-700 hover:text-gray-900  py-2 font-semibold px-2.5 rounded-lg"
            >
              Projects
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900  py-2 font-semibold px-2.5 rounded-lg"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900  py-2 font-semibold px-2.5 rounded-lg"
            >
              About 
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900  py-2 font-semibold px-2.5 rounded-lg"
            >
              Contact 
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden px-2 ml-auto text-gray-700 hover:text-gray-900 focus:outline-none "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Dropdown navigation for smaller screens */}
        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-700 ease-in-out lg:hidden  w-full`}
        >
          <ul className="flex flex-col  mt-5 space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#packages"
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg"
              >
                Packages
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
