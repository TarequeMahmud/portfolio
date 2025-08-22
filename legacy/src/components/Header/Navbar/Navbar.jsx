"use client";
import { redirect } from "next/navigation";
import styles from "./Navbar.module.scss";
import navbarItems from "@/datas/navbar.json";

const Navbar = () => {
  const handleClick = (link) => {
    redirect(link);
  };

  return (
    <div className={styles.container}>
      <ul>
        {navbarItems.navbarItems.map((items, index) => (
          <li onClick={() => handleClick(items.link)} key={index}>
            {items.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
