import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 px-80 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left  */}
        <div className="text-sm md:text-base">
          © {new Date().getFullYear()} Sindhu Ramanadula • Made with{" "}
          <span className="text-pink-400">❤️</span>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4 text-lg md:text-xl">
          <a
            href="mailto:sindhu@example.com"
            className="hover:text-pink-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
