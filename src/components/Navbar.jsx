import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-blue-900 rounded-[25%] hover:scale-105 transition-transform"
            >
              <span className="text-white font-bold text-xl">S</span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["about", "skills", "projects", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth
                className="hover:text-indigo-400 cursor-pointer transition-colors capitalize"
              >
                {section}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {/* Hamburger Icon */}
              <div className="space-y-1">
                <span
                  className={`block h-1 w-6 bg-gradient-to-r from-blue-700 to-white transition-transform ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-1 w-6 bg-gradient-to-r from-white to-blue-900 transition-opacity ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-1 w-6 bg-gradient-to-r from-blue-900 to-white transition-transform ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 px-2 pb-4 space-y-2 bg-gray-900 rounded-lg">
            {["about", "skills", "projects", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-white hover:text-indigo-400 transition-colors capitalize"
              >
                {section}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
