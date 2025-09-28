import React from "react";
import Lottie from "lottie-react";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";
import animationData from "../assets/HiLogo.json"; // Make sure the JSON is in src/assets

export default function Home() {
  return (
    <section className="min-h-screen  flex flex-col md:flex-row items-center md:gap-30 justify-between px-8 md:px-40  ">
      {/* Left Side */}
      <div className="mt-20  flex-1 text-left space-y-6 md:space-y-8">
        <h1 className="text-5xl sm:text-6xl md:text-6xl font-extrabold text-white leading-tight">
          <span className="block">Hello, I'm</span>
          <span className="block">Sindhu Ramanadula</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 max-w-lg">
          I create responsive and interactive web applications using modern
          technologies like React, Node.js, and MongoDB. Passionate about clean
          code and innovative solutions.
        </p>

        <div className="flex flex-wrap space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-lg font-semibold transition-all"
          >
            Get in Touch
          </a>
          <a
            href="/sindhuResume.pdf"
            download
            className="px-6 py-3 border border-gray-400 hover:border-pink-500 text-gray-300 hover:text-white rounded-lg font-semibold transition-all"
          >
            Resume
          </a>
           
        </div>
        <div className="flex space-x-6 ">
          <a
            href="https://www.linkedin.com/in/sindhu-pallavi-ramanadula-0b630925a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/sindhupallavi14"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Github />
          </a>
          <a
            href="https://www.instagram.com/_ur_pallavi_/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Instagram />
          </a>
        </div>
        
      </div>

      {/* Right Side - Lottie Animation */}
      <div className="flex-1 mt-8 md:mt-10">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </section>
  );
}
