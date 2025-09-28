import React from "react";
import Ipod from "../assets/Ipod.jpg";
import foodReceipe from "../assets/FoodRecipe.jpg";
import Kswellness from "../assets/Kswellness.jpg";
import Busybuy from "../assets/Busybuy.jpg";

const projects = [
  
  {
    title: "KS Wellness",
    description:
      "Full-stack medical platform for booking doctor appointments with JWT authentication.",
    image: Kswellness,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Cloudinary"],
    features: ["Booking", "JWT Auth", "Dashboards", "Cloudinary"],
    githubUrl: "https://github.com/kethankoushik09/Health-bridge",
    liveUrl: "https://wellness-rust-gamma.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "Busy-Buy",
    description:
      "E-commerce app with dynamic products, cart functionality, and smooth page transitions.",
    image: Busybuy,
    technologies: ["React", "Routing", "CSS"],
    features: ["Add-to-Cart", "Dynamic Navigation", "State Management"],
    githubUrl: "https://github.com/sindhupallavi14/Busybuy",
    liveUrl: "https://sindhupallavi14.github.io/Busybuy/",
    category: "Frontend",
  },
  {
    title: "iPod",
    description:
      "Interactive iPod application using React with gesture-based navigation and music playback controls.",
    image: Ipod,
    technologies: ["React", "CSS", "ZingTouch"],
    features: ["Music Library", "Play/Pause", "Volume Control", "Gestures"],
    githubUrl: "https://github.com/sindhupallavi14/ipod",
    liveUrl: "https://sindhupallavi14.github.io/Ipod/",
    category: "Frontend",
  },
  {
    title: "Food Recipe",
    description:
      "Recipe tracking app with search, favorites, and detailed recipe views.",
    image: foodReceipe,
    technologies: ["React", "CSS", "Routing", "Redux"],
    features: ["Recipe Search", "Favorites", "Details View", "Router Nav"],
    githubUrl: "https://github.com/sindhupallavi14/Food---Recipe",
    liveUrl: "https://sindhupallavi14.github.io/Food---Recipe/",
    category: "Frontend",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen  px-8 md:px-40 py-16 text-white"
    >
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Check Out My Creations . . .
      </h2>

      {/* Grid Layout */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-semibold hover:opacity-90"
                  >
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 space-y-3">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
