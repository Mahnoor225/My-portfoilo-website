import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";
import { Brain, Rocket } from "lucide-react";

export default function Learning() {
  return (
    <section className="py-16 bg-[#272730] border  border-[#89898E]/30 rounded-xl mx-4 md:mx-20 mt-7">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          <span className="text-white">What I’m</span> <span className="text-green-500">Learning</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          
          {/* 1. Web & App Development */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-500/10 border border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition group">
            <FaReact className="text-blue-400 text-4xl mb-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-lg mb-2 text-white">Web & App Development</h3>
            <p className="text-gray-300 text-sm">
              Learning to build user-friendly websites using HTML, CSS, and JavaScript, 
              and exploring frameworks like <span className="text-blue-400">React</span> and <span className="text-white">Next.js</span>.
            </p>
          </div>

          {/* 2. Database Management */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/40 to-pink-500/10 border border-pink-500/30 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition group">
            <FaDatabase className="text-pink-400 text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            <h3 className="font-semibold text-lg mb-2 text-white">Database Management</h3>
            <p className="text-gray-300 text-sm">
              Practicing how to design and manage databases with{" "}
              <span className="text-yellow-400">MySQL</span> and{" "}
              <span className="text-green-400">MongoDB</span>.
            </p>
            <div className="flex gap-3 mt-3 text-xl text-gray-400">
              <SiMysql title="MySQL" className="hover:text-yellow-400 transition" />
              <SiMongodb title="MongoDB" className="hover:text-green-400 transition" />
            </div>
          </div>

          {/* 3. Performance Optimization */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/40 to-green-500/10 border border-green-500/30 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition group">
            <FaNodeJs className="text-green-400 text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
            <h3 className="font-semibold text-lg mb-2 text-white">Performance Optimization</h3>
            <p className="text-gray-300 text-sm">
              Exploring how to improve the speed and performance of applications 
              using <span className="text-green-400">Node.js</span> and Express basics.
            </p>
          </div>

          {/* 4. E-commerce Basics */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-indigo-500/10 border border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition group">
            <SiNextdotjs className="text-white text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            <h3 className="font-semibold text-lg mb-2 text-white">E-commerce Basics</h3>
            <p className="text-gray-300 text-sm">
              Understanding how product listings, carts, and payments work 
              in e-commerce platforms.
            </p>
          </div>

          {/* 5. AI Integration */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-purple-500/10 border border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition group">
            <Brain className="text-purple-400 text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
            <h3 className="font-semibold text-lg mb-2 text-white">Exploring AI Integration</h3>
            <p className="text-gray-300 text-sm">
              Curious about using AI tools and APIs to enhance efficiency, automation 
              and create better user experiences.
            </p>
          </div>

          {/* 6. Project Deployment */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/40 to-red-500/10 border border-red-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition group">
            <Rocket className="text-red-400 text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
            <h3 className="font-semibold text-lg mb-2 text-white">Project Deployment</h3>
            <p className="text-gray-300 text-sm">
              Learning to deploy projects on platforms like Vercel and Netlify, 
              and understanding hosting basics for full-stack apps.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}






// {light version}

// import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
// import { SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";
// import { Brain, Rocket } from "lucide-react";

// export default function EducationLight() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-12">
//           <span className="text-gray-900">What I’m</span>{" "}
//           <span className="text-green-600">Learning</span>
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          
//           {/* 1. Web & App Development */}
//           <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition group">
//             <FaReact className="text-blue-500 text-4xl mb-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
//             <h3 className="font-semibold text-lg mb-2 text-gray-900">Web & App Development</h3>
//             <p className="text-gray-600 text-sm">
//               Learning to build user-friendly websites using HTML, CSS, and JavaScript, 
//               and exploring frameworks like <span className="text-blue-500">React</span> and{" "}
//               <span className="text-gray-900">Next.js</span>.
//             </p>
//           </div>

//           {/* 2. Database Management */}
//           <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 border border-pink-200 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] transition group">
//             <FaDatabase className="text-pink-500 text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
//             <h3 className="font-semibold text-lg mb-2 text-gray-900">Database Management</h3>
//             <p className="text-gray-600 text-sm">
//               Practicing how to design and manage databases with{" "}
//               <span className="text-yellow-500">MySQL</span> and{" "}
//               <span className="text-green-600">MongoDB</span>.
//             </p>
//             <div className="flex gap-3 mt-3 text-xl text-gray-500">
//               <SiMysql title="MySQL" className="hover:text-yellow-500 transition" />
//               <SiMongodb title="MongoDB" className="hover:text-green-600 transition" />
//             </div>
//           </div>

//           {/* 3. Performance Optimization */}
//           <div className="p-6 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 border border-green-200 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition group">
//             <FaNodeJs className="text-green-600 text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
//             <h3 className="font-semibold text-lg mb-2 text-gray-900">Performance Optimization</h3>
//             <p className="text-gray-600 text-sm">
//               Exploring how to improve the speed and performance of applications 
//               using <span className="text-green-600">Node.js</span> and Express basics.
//             </p>
//           </div>

//           {/* 4. E-commerce Basics */}
//           <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 border border-indigo-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition group">
//             <SiNextdotjs className="text-gray-900 text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
//             <h3 className="font-semibold text-lg mb-2 text-gray-900">E-commerce Basics</h3>
//             <p className="text-gray-600 text-sm">
//               Understanding how product listings, carts, and payments work 
//               in e-commerce platforms.
//             </p>
//           </div>

//           {/* 5. AI Integration */}
//           <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition group">
//             <Brain className="text-purple-500 text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
//             <h3 className="font-semibold text-lg mb-2 text-gray-900">Exploring AI Integration</h3>
//             <p className="text-gray-600 text-sm">
//               Curious about using AI tools and APIs to enhance efficiency, automation 
//               and create better user experiences.
//             </p>
//           </div>

//           {/* 6. Project Deployment */}
//           <div className="p-6 rounded-2xl bg-gradient-to-br from-red-100 to-red-50 border border-red-200 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] transition group">
//             <Rocket className="text-red-500 text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
//             <h3 className="font-semibold text-lg mb-2 text-gray-900">Project Deployment</h3>
//             <p className="text-gray-600 text-sm">
//               Learning to deploy projects on platforms like Vercel and Netlify, 
//               and understanding hosting basics for full-stack apps.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
