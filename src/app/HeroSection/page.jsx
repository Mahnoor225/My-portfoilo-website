"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-80 bg-[#272730] border  border-[#89898E]/30 text-white px-4 sm:px-8 md:px-12  py-12 mx-4 sm:mx-8 md:mx-20 lg:mx-20 rounded-lg mt-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* Left Side - Profile Image */}
        <div className="flex w-full justify-center">
          <div
            className="relative 
               w-full max-w-[220px] sm:max-w-[300px] 
               md:max-w-[360px] lg:max-w-[370px] 
               xl:max-w-[460px] mx-auto"
          >
            {/* Hexagon Frame */}
            <div className="hexagon 
    w-[220px] sm:w-[300px] md:w-[360px] lg:w-[370px] xl:w-[400px] 
    aspect-square overflow-hidden relative mx-auto">
              <img
                src="/4.png"
                alt="profile"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Icon at bottom */}
            <div className="absolute -bottom-4 right-1/2 translate-x-1/2">
              <img
                src="https://zelio-nextjs.vercel.app/assets/imgs/home-page-2/hero-1/icon.svg"
                alt="icon"
                className="w-12 sm:w-14 md:w-16 lg:w-18"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="mt-6 lg:mt-0 text-center lg:text-left">
          {/* Code-style span */}
          <p className="text-[#F7739F] text-sm sm:text-base mb-2">
            &lt;span&gt; <span className="text-white">Hey, I’m Mahnoor</span>{" "}
            &lt;/span&gt;
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl leading-normal lg:leading-none">
            Junior <span className="text-[#74B039]">{"{Mern Stack}"}</span> Web
            Developer
          </h1>

          {/* Description */}
          <p className=" text-gray-300 mt-3 text-sm sm:text-base md:text-lg max-w-xl lg:max-w-2xl">
            &lt;p&gt; With expertise in cutting-edge technologies such as{" "}
            <span className="text-[#F7739B]">NodeJS</span>,{" "}
            <span className="text-[#F7739B]">React</span>,{" "}
            <span className="text-[#F7739B]">Next.js</span>,{" "}
            <span className="text-[#F7739B]">Express.js</span>, and{" "}
            <span className="text-[#F7739B]">MongoDB</span>... I deliver web
            solutions that are both innovative and robust. &lt;/p&gt;
          </p>

          {/* Moving Icons */}
          <div className="flex items-center mt-5">
            <div className="overflow-hidden mr-3 sm:mr-6 flex-1">
              <div className="flex animate-marquee gap-3 sm:gap-5 md:gap-6">
                {/* First List */}
                <div className="flex shrink-0 items-center">
                  {[
                    "/Next js icon.png",
                    "/tailwaind css icon.png",
                    "/mmmm-removebg-preview.png",
                    "/node_js-removebg-preview.png",
                    "/React-icon.svg.png",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="p-1 border border-[#8f8f92] rounded mx-2 sm:mx-4"
                    >
                      <img
                        src={src}
                        className="h-6 sm:h-8 md:h-8 w-auto"
                        alt="Tech Icon"
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicate List */}
                <div className="flex shrink-0 items-center">
                  {[
                    "/Next js icon.png",
                    "/tailwaind css icon.png",
                    "/node_js-removebg-preview.png",
                    "/React-icon.svg.png",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="p-1 border border-[#8f8f92] rounded mx-2 sm:mx-4"
                    >
                      <img
                        src={src}
                        className="h-6 sm:h-8 md:h-8 w-auto"
                        alt="Tech Icon"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm md:text-base italic">
              … and more
            </span>
          </div>

          {/* Download CV Button */}
          <a href="/Mahnoor CV.. (2).pdf" download className="mt-12 inline-block">
            <button className="cursor-pointer group relative flex gap-1.5 px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl bg-opacity-80   transition ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="text-[#A8FF53]"
                viewBox="0 0 24 24"
                height="22px"
                width="22px"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                />
              </svg>
              <span className="text-[#8f8f92]">[ Download my CV ]</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}





// ----------------



// "use client";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="min-h-80 bg-[#ffffff] dark:bg-[#272730] border border-[#89898E]/30 text-black dark:text-white px-4 sm:px-8 md:px-12 py-12 mx-4 sm:mx-8 md:mx-20 lg:mx-20 rounded-lg mt-7">
//       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
//         {/* Left Side - Profile Image */}
//         <div className="flex w-full justify-center">
//           <div
//             className="relative 
//                w-full max-w-[220px] sm:max-w-[300px] 
//                md:max-w-[360px] lg:max-w-[370px] 
//                xl:max-w-[460px] mx-auto"
//           >
//             {/* Hexagon Frame */}
//             <div className="hexagon 
//     w-[220px] sm:w-[300px] md:w-[360px] lg:w-[370px] xl:w-[400px] 
//     aspect-square overflow-hidden relative mx-auto bg-gradient-to-br from-[#002C45] to-[#053D56]">
//               <img
//                 src="/mahnoor-removebg-preview.png"
//                 alt="profile"
//                 className="w-full h-full object-cover object-center"
//               />
//             </div>

//             {/* Icon at bottom */}
//             <div className="absolute -bottom-4 right-1/2 translate-x-1/2">
//               <img
//                 src="https://zelio-nextjs.vercel.app/assets/imgs/home-page-2/hero-1/icon.svg"
//                 alt="icon"
//                 className="w-12 sm:w-14 md:w-16 lg:w-18"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Text */}
//         <div className="mt-6 lg:mt-0 text-center lg:text-left">
//           {/* Code-style span */}
//           <p className="text-[#F7739F] text-sm sm:text-base mb-2">
//             &lt;span&gt;{" "}
//             <span className="text-black dark:text-white">Hey, I’m Mahnoor</span>{" "}
//             &lt;/span&gt;
//           </p>

//           {/* Heading */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl leading-normal lg:leading-none">
//             Junior <span className="text-[#70AA38]">{"{Mern Stack}"}</span> Web
//             Developer
//           </h1>

//           {/* Description */}
//           <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm sm:text-base md:text-lg max-w-xl lg:max-w-2xl">
//             &lt;p&gt; With expertise in cutting-edge technologies such as{" "}
//             <span className="text-[#F7739B]">NodeJS</span>,{" "}
//             <span className="text-[#F7739B]">React</span>,{" "}
//             <span className="text-[#F7739B]">Next.js</span>,{" "}
//             <span className="text-[#F7739B]">Express.js</span>, and{" "}
//             <span className="text-[#F7739B]">MongoDB</span>... I deliver web
//             solutions that are both innovative and robust. &lt;/p&gt;
//           </p>

//           {/* Moving Icons */}
//           <div className="flex items-center mt-5">
//             <div className="overflow-hidden mr-3 sm:mr-6 flex-1">
//               <div className="flex animate-marquee gap-3 sm:gap-5 md:gap-6">
//                 {/* First List */}
//                 <div className="flex shrink-0 items-center">
//                   {[
//                     "/Next js icon.png",
//                     "/tailwaind css icon.png",
//                     "/mmmm-removebg-preview.png",
//                     "/node_js-removebg-preview.png",
//                     "/React-icon.svg.png",
//                   ].map((src, i) => (
//                     <div
//                       key={i}
//                       className="p-1 border border-[#8f8f92] rounded mx-2 sm:mx-4"
//                     >
//                       <img
//                         src={src}
//                         className="h-6 sm:h-8 md:h-8 w-auto"
//                         alt="Tech Icon"
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 {/* Duplicate List */}
//                 <div className="flex shrink-0 items-center">
//                   {[
//                     "/Next js icon.png",
//                     "/tailwaind css icon.png",
//                     "/node_js-removebg-preview.png",
//                     "/React-icon.svg.png",
//                   ].map((src, i) => (
//                     <div
//                       key={i}
//                       className="p-1 border border-[#8f8f92] rounded mx-2 sm:mx-4"
//                     >
//                       <img
//                         src={src}
//                         className="h-6 sm:h-8 md:h-8 w-auto"
//                         alt="Tech Icon"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base italic">
//               … and more
//             </span>
//           </div>

//           {/* Download CV Button */}
//           <a href="/cv.pdf" download className="mt-12 inline-block">
//             <button className="cursor-pointer group relative flex gap-1.5 px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl bg-opacity-80 rounded-3xl transition shadow-md">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 className="text-[#A8FF53]"
//                 viewBox="0 0 24 24"
//                 height="22px"
//                 width="22px"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
//                 />
//               </svg>
//               <span className="text-gray-700 dark:text-[#8f8f92]">
//                 [ Download my CV ]
//               </span>
//             </button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
