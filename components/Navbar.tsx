"use client";
import { links } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLinkClick = () => {
    setServiceOpen(false);
    setProjectOpen(false);
  };
  const handleLinkClickMobile = () => {
    setServiceOpen(false);
    setProjectOpen(false);
    setIsOpen(false);
  };
 

  return (
    <div className="fixed top-0 w-screen flex justify-center z-[999] p-3 bg-transparent">
      <div className="bg-white/90 w-[85%] max-md:w-full shadow-lg px-3.5 py-2 rounded-3xl max-md:rounded-2xl">
        <div className="container mx-auto flex items-center justify-start">
          {/* Logo */}
          <Link href="/" className="flex items-center" id="logo">
            <img src="/logo.jpg" className="w-10 h-8" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex ml-5 items-center space-x-6">
            {links.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => {
                  if (link.name === "Services") setServiceOpen(true);
                  if (link.name === "Projects") setProjectOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.name === "Services") setServiceOpen(false);
                  if (link.name === "Projects") setProjectOpen(false);
                }}
              >
                {link.subLinks ? (
                  <button className="flex items-center text-gray-700 hover:text-gray-900 font-semibold px-2.5 rounded-lg">
                    {link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`w-6 h-6 ml-1 transition-transform ${
                        (link.name === "Services" && serviceOpen) ||
                        (link.name === "Projects" && projectOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    className="text-gray-700 hover:text-gray-900 font-semibold px-2.5 rounded-lg"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Sublinks */}
                {/* Sublinks */}
                {link.subLinks && (
                  <ul
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-0  shadow-md rounded-lg overflow-hidden transition-all duration-700 ease-in-out ${
                      (link.name === "Services" && serviceOpen) ||
                      (link.name === "Projects" && projectOpen)
                        ? "max-h-max w-[32rem] overflow-scroll opacity-100 " // Added grid layout for two columns
                        : "max-h-0 w-72 opacity-0"
                    }`}
                  >
                    <div className="mt-3 grid grid-cols-2 bg-white/90 rounded-md">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.name}>
                          <Link
                            href={subLink.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                            onClick={handleLinkClick} // Close the dropdown on link click
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden px-2 ml-auto text-gray-700 hover:text-gray-900 focus:outline-none"
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

        {/* Mobile Dropdown */}
        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-700 ease-in-out lg:hidden w-full`}
        >
          <ul className="flex flex-col mt-5 space-y-2 w-full">
            {links.map((link) => (
              <li key={link.name} className="relative w-full">
                {link.subLinks ? (
                  <button
                    onClick={() =>
                      link.name === "Services"
                        ? setServiceOpen(!serviceOpen)
                        : setProjectOpen(!projectOpen)
                    }
                    className="relative flex items-center w-full text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg"
                  >
                    {link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`w-6 h-6 ml-auto transition-transform ${
                        (link.name === "Services" && serviceOpen) ||
                        (link.name === "Projects" && projectOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    className="text-gray-700 flex w-full hover:text-gray-900 px-4 py-2 rounded-lg"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Mobile Sublinks */}
                {link.subLinks && (
                  <ul
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      (link.name === "Services" && serviceOpen) ||
                      (link.name === "Projects" && projectOpen)
                        ? "max-h-40 overflow-scroll opacity-100"
                        : "max-h-0 opacity-0"
                    } mt-2 space-y-1 ml-6`}
                  >
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.name}>
                        <Link
                          href={subLink.path}
                          className="text-gray-700 hover:text-gray-900 px-4 py-1 rounded-lg"
                          onClick={handleLinkClickMobile} // Close the dropdown on link click
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
