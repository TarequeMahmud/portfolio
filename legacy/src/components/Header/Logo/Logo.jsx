import logo from "@/app/favicon.ico";
import styles from "./Logo.module.scss";
import Image from "next/image";

function Logo() {
  return (
    <div className={styles["logo-container"]}>
      <Image
        src={logo}
        height={50}
        width={50}
        alt="Logo for my portfolio"
        unoptimized
      />
      <h1>Tareque Mahmud</h1>
    </div>
  );
}

export default Logo;
