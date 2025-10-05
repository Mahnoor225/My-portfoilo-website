"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
 {
  title: "Expert Construction Services for Homes & Businesses",
  description:
    "A professional construction website showcasing services, projects, and client testimonials with a modern, responsive design.",
  client: "Constructaion Co.",
  time: "3 months",
  tech: "Next.js, React, Tailwind CSS,javaScript, HTML, CSS",
  image: "/Screenshot (131).png",
  demo: "https://construction-jade-one.vercel.app/",   // Add your live demo link if available
  github: "https://github.com/Mahnoor225/construction", // Add your GitHub repo link if available
}
,
{
  title: "Salon & Spa Website",
  description:
    "Developed a modern website for a salon and spa, showcasing services, stylists, booking options, and customer testimonials.",
  client: "Freelance Project",
  time: "2 months",
  tech: "Next.js, React, Tailwind CSS, Firebase",
  image: "/Screenshot (120).png",
  demo: "https://beauty-saloon-one.vercel.app/",   // Add your live demo link if available
  github: "https://github.com/Mahnoor225/Beauty-Saloon", // Add your GitHub repo link if available
}
,
 {
  title: "Premium Car Rental Service",
  description:
    "Developed a responsive and modern car rental website, showcasing a fleet of premium vehicles, booking options, and service details.",
  client: "Self Project",
  time: "2 months",
  tech: "Next.js, React, Tailwind CSS, Vercel",
  image: "/Screenshot (133).png",
  demo: "https://motorx-car-rental.vercel.app/",
  github: "https://github.com/Mahnoor225/motorx-car-rental",
}
,
{
  title: "E-Commerce Website",
  description:
    "Built a modern and responsive e-commerce website with product listings and shopping cart functionality.",
  client: "Self Project",
  time: "2 months",
  tech: "Next.js, React, Tailwind CSS, javaScript, HTML, CSS",
  image: "/Screenshot (134).png",
  demo: "https://ecommerce-beta-coral.vercel.app/",
  github: "https://github.com/Mahnoor225/Ecommerce",
}

];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  // Prev / Next functions
  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds
//   useEffect(() => {
//   const interval = setInterval(() => {
//     nextProject();
//   }, 8000); // 8 sec mein slide hoga
//   return () => clearInterval(interval);
// }, []);


  const project = projects[current];

  return (
    <section className="bg-[#272730] border  border-[#89898E]/30 text-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 mx-4 md:mx-20 lg:mx-20 mt-7 rounded-lg">
      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="text-green-400 text-sm">• Projects</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">My Recent Works</h2>
      </div>

      {/* Project Card */}
      <div className="relative bg-[#000000] border border-white/30 rounded-xl 
                      p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 
                      gap-8 lg:gap-12 items-center">
        
        {/* Left - Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.image}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img
              src={project.image}
              alt="Project"
              className="rounded-lg shadow-lg w-full max-w-md md:max-w-full 
                         hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </AnimatePresence>

        {/* Right - Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-green-400 text-xl sm:text-2xl lg:text-3xl font-semibold mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              {project.description}
            </p>

            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <p>
                <span className="text-pink-400 font-semibold">Client:</span> {project.client}
              </p>
              <p>
                <span className="text-pink-400 font-semibold">Completion Time:</span> {project.time}
              </p>
              <p>
                <span className="text-pink-400 font-semibold">Technologies:</span> {project.tech}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-8">
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>

            {/* Navigation */}
            <div className="flex justify-center md:justify-start gap-4 mt-10">
              <button
                onClick={prevProject}
                className="w-10 h-10 rounded-full bg-green-200 text-black 
                           flex items-center justify-center hover:bg-green-400 transition"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={nextProject}
                className="w-10 h-10 rounded-full bg-green-200 text-black 
                           flex items-center justify-center hover:bg-green-400 transition"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center md:justify-start gap-2 mt-6">
              {projects.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === current ? "bg-green-400" : "bg-gray-500"
                  }`}
                ></span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
