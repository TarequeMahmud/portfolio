"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import navbarItems from "@/data/navbar.json";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (link: string, type?: string) => {
    if (type === "external") {
      window.open(link, "_blank");
    } else {
      redirect(link);
    }
    setIsOpen(false);
  };

  return (
    <nav className="relative w-auto">
      {/* Desktop Navbar */}
      <ul className="hidden md:flex flex-row gap-8 pr-5">
        {navbarItems.navbarItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.link, item.type)}
            className="text-[1.1rem] font-medium cursor-pointer text-white hover:text-[#04c289] transition-colors"
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-2xl text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 top-[60px] flex flex-col items-center gap-4 w-[200px] bg-black/80 py-5 rounded-2xl backdrop-blur-md border border-white/10 md:hidden">
          {navbarItems.navbarItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item.link, item.type)}
              className="text-[1.1rem] font-medium cursor-pointer text-white hover:text-[#04c289] transition-colors"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
