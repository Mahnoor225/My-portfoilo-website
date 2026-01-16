import { GraduationCap, FlaskConical, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="py-16 bg-[#272730] border  border-[#89898E]/30 rounded-xl mx-4 md:mx-20 mt-7">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Education card */}
        <div
          tabIndex={0}
          className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30
                     border border-green-500/30 transform-gpu
                     hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]
                     transition-shadow duration-300 group focus:outline-none focus:ring-0"
        >
          <h2 className="flex items-center text-2xl font-bold mb-2 text-white">
            <GraduationCap
              className="text-green-500 mr-2 transform transition-transform duration-300
                         group-hover:scale-110 group-focus-within:scale-110"
              aria-hidden
            />
            Education
          </h2>

          {/* Divider — animate scaleX (smoother than width) */}
          <div
            className="h-1 w-20 bg-green-500/50 rounded-full mb-6 origin-left transform
                       scale-x-75 transition-transform duration-300
                       group-hover:scale-x-100 group-focus-within:scale-x-100"
          />

          <ul className="space-y-5 text-gray-300">
            <li>
              <span className="text-sm text-gray-400">2025–2029:</span>{" "}
              <span className="text-green-400 font-semibold">
                Virtual University of Pakistan
              </span>
              <p className="text-gray-400 ml-6">
                Bachelor’s in Business & Information Technology (BBIT)
              </p>
            </li>

            <li>
              <span className="text-sm text-gray-400">2024–2025:</span>{" "}
              <span className="text-pink-400 font-semibold">PNY Technologies</span>
              <p className="text-gray-400 ml-6">
                1 Year Diploma in Full Stack Web Development
              </p>
            </li>

            <li>
              <span className="text-sm text-gray-400">2023–2025:</span>{" "}
              <span className="text-blue-400 font-semibold">Intermediate</span>
              <p className="text-gray-400 ml-6">Higher Secondary Education</p>
            </li>

            <li>
              <span className="text-sm text-gray-400">2018–2020:</span>{" "}
              <span className="text-yellow-400 font-semibold">Government School</span>
              <p className="text-gray-400 ml-6">Matriculation in Science</p>
            </li>
          </ul>
        </div>

        {/* Researched card */}
        <div
          tabIndex={0}
          className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30
                     border border-green-500/30 transform-gpu
                     hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]
                     transition-shadow duration-300 group focus:outline-none focus:ring-0"
        >
          <h2 className="flex items-center text-2xl font-bold mb-2 text-white">
            <FlaskConical
              className="text-green-500 mr-2 transform transition-transform duration-300
                         group-hover:rotate-12 group-hover:scale-110 group-focus-within:rotate-12 group-focus-within:scale-110"
              aria-hidden
            />
            Researched
          </h2>

          <div
            className="h-1 w-20 bg-green-500/50 rounded-full mb-6 origin-left transform
                       scale-x-75 transition-transform duration-300
                       group-hover:scale-x-100 group-focus-within:scale-x-100"
          />

          <ul className="space-y-5 text-gray-300">
            <li>
              <span className="text-sm text-gray-400">2024–2025:</span>{" "}
              <span className="text-green-400 font-semibold">Modern Web Development</span>
              <p className="text-gray-400 ml-6">
                Practiced React, Next.js, TailwindCSS, and Node.js to build
                responsive and dynamic applications.
              </p>
            </li>

            <li>
              <span className="text-sm text-gray-400">2024–2025:</span>{" "}
              <span className="text-green-400 font-semibold">Database Management</span>
              <p className="text-gray-400 ml-6">
                Researched relational (MySQL) and non-relational (MongoDB) DBs for scalable apps.
              </p>
            </li>

            <li>
              <span className="text-sm text-gray-400">2023–2024:</span>{" "}
              <span className="text-green-400 font-semibold">AI & Web Integration</span>
              <p className="text-gray-400 ml-6">Explored AI APIs for automation & improved UX.</p>
            </li>

            <li>
              <span className="text-sm text-gray-400">2023–2024:</span>{" "}
              <span className="text-green-400 font-semibold">Performance Optimization</span>
              <p className="text-gray-400 ml-6">
                Learned frontend & backend optimization (caching, API tuning).
              </p>
            </li>
          </ul>
        </div>

        {/* Certifications card */}
        <div
          tabIndex={0}
          className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30
                     border border-green-500/30 transform-gpu
                     hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]
                     transition-shadow duration-300 group focus:outline-none focus:ring-0"
        >
          <h2 className="flex items-center text-2xl font-bold mb-2 text-white">
            <Award
              className="text-green-500 mr-2 transform transition-transform duration-300
                         group-hover:scale-110 group-focus-within:scale-110 group-hover:-rotate-12 group-focus-within:-rotate-12"
              aria-hidden
            />
            Certifications
          </h2>

          <div
            className="h-1 w-20 bg-green-500/50 rounded-full mb-6 origin-left transform
                       scale-x-75 transition-transform duration-300
                       group-hover:scale-x-100 group-focus-within:scale-x-100"
          />

          <ul className="space-y-5 text-gray-300">
            <li>
              <span className="text-sm text-gray-400">2024:</span>{" "}
              <span className="text-green-400 font-semibold">freeCodeCamp</span>
              <p className="text-gray-400 ml-6">Responsive Web Design Certification</p>
              <div className="flex flex-wrap ml-6 gap-2 mt-1">
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 transition-all duration-300">HTML</span>
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 transition-all duration-300">CSS</span>
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 transition-all duration-300">Flexbox</span>
              </div>
            </li>

            <li>
              <span className="text-sm text-gray-400">2024–2025:</span>{" "}
              <span className="text-green-400 font-semibold">PNY Technologies</span>
              <p className="text-gray-400 ml-6">Full Stack Web Development Diploma</p>
              <div className="flex flex-wrap ml-6 gap-2 mt-1">
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 transition-all duration-300">React</span>
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 transition-all duration-300">Next.js</span>
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 transition-all duration-300">Node.js</span>
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 transition-all duration-300">MongoDB</span>
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 transition-all duration-300">MySQL</span>
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 transition-all duration-300">MERN</span>
              </div>
            </li>
          </ul>

          <a
            href="/Resume_Frontend Developer'Mahnoor.pdf.pdf"
            download
            className="inline-block mt-6 px-4 py-2 text-sm font-semibold text-green-400
                       border border-green-500/50 rounded-xl hover:bg-green-500/10 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
