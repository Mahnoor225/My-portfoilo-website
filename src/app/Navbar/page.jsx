"use client";

import { useState, useEffect } from "react";
import { GoSun } from "react-icons/go";
import { LuSunMoon } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
const links = [
  { href: "#about", label: "About", active: true },
  { href: "#resume", label: "Resume" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#Education", label: "Education" },
  { href: "#connect", label: "Contact" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <>
      {/* Navbar */}
      <div className="pt-5">
        <nav className=" grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 items-center mx-3 md:mx-20  rounded-xl bg-[#272730] dark:bg-white border border-[#89898E]/30 text-gray-200 shadow-lg transition-colors">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger (always visible) */}
            <button
              aria-label="Open menu"
              className="p-5 rounded-l-lg bg-[#32323B] text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo + Name */}
            <a href="/" className="flex items-center gap-2 font-semibold px-2">
              <img
                className="w-7 h-7"
                src="https://zelio-nextjs.vercel.app/assets/imgs/home-page-2/template/favicon.svg"
                alt=""
              />
              <span className="px-1">
                <span className="text-[#E2E2E3]">Mahnoor</span>
                <span className="text-[#89898E]">.dev</span>
              </span>
            </a>
          </div>

          {/* Center: Links */}
          <ul className="hidden lg:flex  justify-center items-center gap-6 text-sm font-serif">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`transition-colors ${
                    l.active
                      ? "text-white"
                      : "text-[#8f8f92] hover:text-white dark:hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Socials + Theme */}
          <div className="flex hidden md:flex  justify-end  items-center gap-4">
            {/* Facebook */}
            <diV className="flex gap-4 md:mr-36 lg:mr-0">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mahnoor-mehboob-18120b2b2/"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-white hover:text-[#a8ff53]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.06C12.54 8.84 14.2 8 16.24 8 21.2 8 22 11.26 22 15.58V24h-4v-7.4c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.9-2.82 3.89V24H8z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Mahnoor225"
                aria-label="GitHub"
                title="GitHub"
                className="text-white hover:text-[#a8ff53]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.46-1.15-1.12-1.46-1.12-1.46-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.36 1.08 2.94.83.09-.66.35-1.1.63-1.36-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.76 1.02A9.6 9.6 0 0 1 12 7.07c.85 0 1.7.11 2.5.32 1.92-1.3 2.76-1.02 2.76-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              {/* {instagram } */}
             
           <a href="https://www.instagram.com/mahnoordeveloper3/"> <IoLogoInstagram className=" w-5
                  h-5 hover:text-[#a8ff53] "/></a>
              {/* { Facbook} */}
              <a
                href="https://www.facebook.com/profile.php?id=61562870824518"
                aria-label="Facebook"
                title="Facebook"
                className="text-white hover:text-[#a8ff53]"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </diV>
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-5 rounded-r-lg text-2xl bg-[#32323B]"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <LuSunMoon className="text-[#ffc107] font-extrabold rounded-full" />
              ) : (
                <GoSun className="text-[#ffc107] font-extrabold rounded-full" />
              )}
            </button>
          </div>
          {/* {small screen } */}
          <div className="flex justify-between items-center ">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="md:hidden ml-auto border-amber-500 rounded-r-lg text-2xl p-5 bg-[#32323B]"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <LuSunMoon className="text-[#ffc107] font-extrabold rounded-full" />
              ) : (
                <GoSun className="text-[#ffc107] font-extrabold rounded-full" />
              )}
            </button>
          </div>

          {/* {small screen } */}
          <diV className="hidden">
           {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mahnoor-mehboob-18120b2b2/"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-white hover:text-[#a8ff53]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.06C12.54 8.84 14.2 8 16.24 8 21.2 8 22 11.26 22 15.58V24h-4v-7.4c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.9-2.82 3.89V24H8z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Mahnoor225"
                aria-label="GitHub"
                title="GitHub"
                className="text-white hover:text-[#a8ff53]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.46-1.15-1.12-1.46-1.12-1.46-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.36 1.08 2.94.83.09-.66.35-1.1.63-1.36-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.76 1.02A9.6 9.6 0 0 1 12 7.07c.85 0 1.7.11 2.5.32 1.92-1.3 2.76-1.02 2.76-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              {/* {instagram } */}
             
           <a href="https://www.instagram.com/mahnoordeveloper3/"> <IoLogoInstagram className=" w-5
                  h-5 hover:text-[#a8ff53] "/></a>
              {/* { Facbook} */}
              <a
                href="https://www.facebook.com/profile.php?id=61562870824518"
                aria-label="Facebook"
                title="Facebook"
                className="text-white hover:text-[#a8ff53]"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
          </diV>
        </nav>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-80 bg-[#272730] text-gray-200 shadow-lg z-50">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-white">
                  Get in touch
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 font-bold text-md text-[#674DF2]"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-6">
                <p className="text-[#cccccf] text-sm">
                  I'm always excited to take on new projects and collaborate
                  with innovative minds.
                </p>
                <div>
                  <p className="text-sm text-[#c0c0c4]">Phone</p>
                  <p className="font-medium text-[#8f8f92]">+92-3074915368</p>
                </div>
                <div>
                  <p className="text-sm text-[#c0c0c4]">Email</p>
                  <p className="font-medium text-[#8f8f92]">
                    mahnoormehboob225@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#c0c0c4]">Address</p>
                  <p className="font-medium text-[#8f8f92]">
                    Shahbad Colony, Ferozepur Road, Lahore
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-md text-[#c0c0c4] mb-3">Social</p>
                  <div className="flex">
                    <a href="#" className="p-2  rounded-full">
                      <a
                        href="https://www.facebook.com/profile.php?id=61562870824518"
                        aria-label="Facebook"
                        title="Facebook"
                        className=" text-white  rounded-full hover:text-[#a8ff53]"
                      >
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                    </a>
                    <a href="#" className="p-2 rounded-full">
                      <a
                        href="https://www.linkedin.com/in/mahnoor-mehboob-18120b2b2/"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                        className=" text-white  hover:text-[#a8ff53]"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.06C12.54 8.84 14.2 8 16.24 8 21.2 8 22 11.26 22 15.58V24h-4v-7.4c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.9-2.82 3.89V24H8z" />
                        </svg>
                      </a>
                    </a>
                    <a href="#" className="p-2 rounded-full">
                      <a
                        href="https://github.com/Mahnoor225"
                        aria-label="GitHub"
                        title="GitHub"
                        className=" text-white  hover:text-[#a8ff53]"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.46-1.15-1.12-1.46-1.12-1.46-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.36 1.08 2.94.83.09-.66.35-1.1.63-1.36-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.76 1.02A9.6 9.6 0 0 1 12 7.07c.85 0 1.7.11 2.5.32 1.92-1.3 2.76-1.02 2.76-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                        </svg>
                      </a>
                    </a>
                    <a href="https://www.instagram.com/mahnoordeveloper3/"><IoLogoInstagram className=" w-5
                  h-5 hover:text-[#a8ff53] mt-2 mx-1 "/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}












