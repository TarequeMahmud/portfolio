import styles from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["nav-logo-container"]}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
