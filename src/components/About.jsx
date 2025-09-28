import React from "react";
import myPhoto from "../assets/myPhoto.jpg"; // Replace with your image

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center md:gap-20 justify-between px-8 md:px-40 text-white"
    >
      {/* Left Side - Image with Animated Shape */}
      <div className="flex-1 flex justify-center md:justify-start relative mb-10 md:mb-0">
        {/* Main Image Container */}
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-[25%] overflow-hidden bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center shadow-2xl relative">
          <img
            src={myPhoto}
            alt="Sindhu"
            className="w-full h-full object-cover rounded-[25%] border-4 border-gray-600"
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="flex-1 text-left space-y-6 md:space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          Meet Sindhu ...
        </h1>

        <div className="italic space-y-4 text-gray-300 text-base leading-relaxed max-w-lg">
          <p>
            I am Sindhu Pallavi Ramanadula, a B.Tech Graduate of 2025 and a
            passionate Full Stack Developer. I specialize in both frontend and
            backend development, with experience in React.js, Node.js,
            Express.js, and MongoDB, creating responsive and dynamic web
            applications.
          </p>
          <p>
            Beyond coding, I explore my creative side through artwork and
            design. This mindset helps me approach problems from fresh
            perspectives and innovate in technical projects.
          </p>
          <p>
            I thrive on learning new technologies, solving challenges, and
            combining logic with creativity to deliver meaningful solutions. My
            goal is to craft web applications that are both functional and
            visually engaging.
          </p>
        </div>
      </div>
    </section>
  );
}
