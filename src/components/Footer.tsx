"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0b3c52] to-[#092735] text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - About */}
        <div className="text-center md:text-left">
          <p className="text-lg font-medium text-gray-200">
            Built with <span className="font-semibold text-white">Next.js</span>{" "}
            & <span className="font-semibold text-white">TailwindCSS</span>
          </p>
          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} Tareque Mahmud. All rights reserved.
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex space-x-8 text-3xl">
          <a
            href="https://github.com/TarequeMahmud"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tarequemahmud"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:tarequemahmud313@gmail.com"
            className="hover:text-red-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
