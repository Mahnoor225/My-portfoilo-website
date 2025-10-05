"use client";
import { FaReact, FaNodeJs, FaAngular, FaLaravel } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="bg-[#272730] text-white px-6 py-16 md:px-12 lg:px-20 mx-4 sm:mx-20 lg:mx-20 mt-7 rounded-lg">
      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="text-green-400 text-sm">• Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
      </div>

      {/* Skills Card */}
      <div className="relative bg-[#000000] border border-gray-700 rounded-xl p-6 md:p-10 grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center shadow-xl">
        {/* Left - Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            SiFirebase,
            SiMongodb,
            FaReact,
            FaNodeJs,
            SiNextdotjs,
            SiVuedotjs,
            FaAngular,
            FaLaravel,
            SiTailwindcss,
          ].map((Icon, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-[#272730] border border-gray-600 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-500 animate-float"
            >
              <Icon className="text-3xl sm:text-4xl text-green-400" />
            </div>
          ))}
        </div>

        {/* Right - Skills List */}
       <div className="space-y-4 text-gray-300">
  <p className="flex flex-col md:flex-row gap-1 md:gap-2">
    <span className="font-sm text-white">Front-End:</span>
    <span className="text-[#8E8E91] font-normal text-sm">
      HTML,JavaScript, React,Next.js, Tailwind CSS
    </span>
  </p>

  <p className="flex flex-col md:flex-row gap-1 md:gap-2">
    <span className="font-sm text-white">Back-End:</span>
    <span className="text-[#8E8E91] font-normal text-sm">
      Node.js, Express, Python, Django
    </span>
  </p>

  <p className="flex flex-col md:flex-row gap-1 md:gap-2">
    <span className="font-sm text-white">Databases:</span>
    <span className="text-[#8E8E91] font-normal text-sm">
      MySQL, PostgreSQL, MongoDB
    </span>
  </p>

  <p className="flex flex-col md:flex-row gap-1 md:gap-2">
    <span className="font-sm text-white">Tools & Platforms:</span>
    <span className="text-[#8E8E91] font-normal text-sm">
      Git, Github,vercel, Netlify
    </span>
  </p>

  <p className="flex flex-col md:flex-row gap-1 md:gap-2">
    <span className="font-sm text-white">Others:</span>
    <span className="text-[#8E8E91] font-normal text-sm">
      RESTful APIs, GraphQL, Agile Methodologies
    </span>
  </p>
</div>

      </div>

      {/* Floating Animation CSS */}
      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
