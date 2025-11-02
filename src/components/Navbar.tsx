"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import navbarItems from "@/data/navbar.json";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const router = useRouter();

  const handleClick = (link: string, type?: string) => {
    if (type === "external") {
      window.open(link, "_blank");
    } else if (link.startsWith("#")) {
      const el = document.querySelector(link);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(link);
    }
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="relative bg-black">
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
        className="md:hidden text-2xl text-white focus:outline-none z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      <ul
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[220px] bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 pt-[80px] transition-transform duration-300 md:hidden z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {navbarItems.navbarItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.link, item.type)}
            className="text-[1.2rem] font-medium cursor-pointer text-white hover:text-[#04c289] transition-colors"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
