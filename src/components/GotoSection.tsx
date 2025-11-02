"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const sections = [
  {
    name: "Projects",
    href: "/projects",
    color: "from-[#5e2266] to-[#290020]",
  },
  {
    name: "Resources",
    href: "/resources",
    color: "from-[#176c94] to-[#092735]",
  },
  {
    name: "About",
    href: "/about",
    color: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
  },
];

const GotoSection = () => {
  return (
    <section className="w-[90%] sm:w-[85%] md:w-[70%] flex flex-wrap justify-center md:justify-around gap-4 sm:gap-6 mt-10 sm:mt-16">
      {sections.map((section, idx) => (
        <Link key={idx} href={section.href} passHref>
          <div
            className={`
              group relative flex items-center justify-center
              w-full sm:w-[80%] md:w-auto 
              px-6 sm:px-8 py-3 sm:py-4 
              text-lg sm:text-xl font-semibold sm:font-bold text-white 
              rounded-2xl 
              bg-linear-to-r ${section.color}
              shadow-lg overflow-hidden
              transition-transform duration-300 
              hover:scale-105 active:scale-95 cursor-pointer
            `}
          >
            {section.name}
            <span className="ml-3 sm:ml-4 inline-block transition-transform duration-300 group-hover:translate-x-2">
              <FaArrowRight />
            </span>

            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white rounded-full transition-all duration-300 group-hover:w-full" />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default GotoSection;
