import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-40  text-white py-20"
    >
      {/* Left Side - Heading + Description */}
      <div className="flex-1 space-y-6 md:space-y-8 mb-12 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Stuff I’m Good At ...
        </h2>

        <p className="italic text-gray-300 text-lg md:text-xl max-w-lg">
          I specialize in building full-stack web applications using modern
          technologies. From crafting interactive front-end interfaces to
          designing scalable back-end systems, I leverage my skills to create
          seamless and efficient solutions. Continuous learning and
          problem-solving are my driving forces in tech.
        </p>
      </div>

      {/* Right Side - Skill Icons */}
      <div className="flex-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center items-center">
        {/* HTML */}
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transform transition-transform duration-300">
          <FaHtml5 className="text-orange-600 text-6xl sm:text-7xl" />
          <span className="text-gray-300 text-sm sm:text-base">HTML</span>
        </div>
        {/* CSS */}
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transform transition-transform duration-300">
          <FaCss3Alt className="text-blue-600 text-6xl sm:text-7xl" />
          <span className="text-gray-300 text-sm sm:text-base">CSS</span>
        </div>
        {/* JS */}
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transform transition-transform duration-300">
          <FaJs className="text-yellow-500 text-6xl sm:text-7xl" />
          <span className="text-gray-300 text-sm sm:text-base">JavaScript</span>
        </div>
        {/* React */}
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transform transition-transform duration-300">
          <FaReact className="text-blue-400 text-6xl sm:text-7xl" />
          <span className="text-gray-300 text-sm sm:text-base">ReactJS</span>
        </div>
        {/* Node */}
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transform transition-transform duration-300">
          <FaNodeJs className="text-green-600 text-6xl sm:text-7xl" />
          <span className="text-gray-300 text-sm sm:text-base">NodeJS</span>
        </div>
        {/* Express */}
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transform transition-transform duration-300">
          <SiExpress className="text-gray-400 text-6xl sm:text-7xl" />
          <span className="text-gray-300 text-sm sm:text-base">Express</span>
        </div>
        {/* MongoDB */}
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transform transition-transform duration-300">
          <SiMongodb className="text-green-500 text-6xl sm:text-7xl" />
          <span className="text-gray-300 text-sm sm:text-base">MongoDB</span>
        </div>
        {/* Java */}
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transform transition-transform duration-300">
          <FaJava className="text-blue-700 text-6xl sm:text-7xl" />
          <span className="text-gray-300 text-sm sm:text-base">Java</span>
        </div>
      </div>
    </section>
  );
}
