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
    <div className="w-[70%] flex flex-wrap justify-around gap-6 mt-20">
      {sections.map((section, idx) => (
        <Link key={idx} href={section.href} passHref>
          <div
            className={`group relative flex items-center px-8 py-4 text-xl font-bold text-white rounded-2xl bg-gradient-to-r ${section.color} shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer`}
          >
            {section.name}
            <span className="ml-4 inline-block transition-transform duration-300 group-hover:translate-x-2">
              <FaArrowRight />
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GotoSection;
