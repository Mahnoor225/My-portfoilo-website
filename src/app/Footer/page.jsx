"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F24] text-gray-400 border-t border-gray-700 md:mx-8 lg:mx-18 py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          {/* <span className="text-lime-400 text-2xl">&lt;/&gt;</span> */}
          <img className="text-lime-400 w-7 h-7" src="https://zelio-nextjs.vercel.app/assets/imgs/home-page-2/template/favicon.svg" alt="" />
          <h1 className="text-xl font-semibold text-white">
            Mahnoor<span className="text-gray-400">.dev</span>
          </h1>
        </div>

        {/* Social Icons */}
        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="https://www.facebook.com/profile.php?id=61562870824518" className="hover:text-lime-400 transition">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/mahnoordeveloper3/" className="hover:text-lime-400 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/mahnoor-mehboob-18120b2b2/" className="hover:text-lime-400 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Mahnoor225" className="hover:text-lime-400 transition">
            <FaGithub />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <a href="#about" className="hover:text-white transition">
              About me
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-white transition">
              Resume
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-white transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-white transition">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
