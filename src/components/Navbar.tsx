"use client";
import { redirect } from "next/navigation";
import navbarItems from "@/data/navbar.json";

const Navbar = () => {
  const handleClick = (link: string) => {
    redirect(link);
  };

  return (
    <div className="w-[45%] p-0">
      <ul className="mx-auto px-5 py-2 w-full h-full flex flex-row flex-wrap justify-evenly items-center">
        {navbarItems.navbarItems.map((items, index) => (
          <li
            key={index}
            onClick={() => handleClick(items.link)}
            className="m-0 text-[1.3rem] font-medium list-none text-white cursor-pointer hover:text-[#04c289]"
          >
            {items.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
