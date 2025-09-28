import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope,FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6  text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left  */}
        <div className="text-sm md:text-base">
          © {new Date().getFullYear()} Sindhu Ramanadula • Made with{" "}
          <span className="text-pink-400">❤️</span>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4 text-lg md:text-xl">
          <a
            href="mailto:sindhuramanadula14@example.com"
            className="hover:text-pink-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/sindhupallavi14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sindhu-pallavi-ramanadula-0b630925a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_ur_pallavi_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
