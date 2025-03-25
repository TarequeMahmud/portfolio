import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["nav-logo-container"]}></div>
      <div className={styles["bg-img-container"]}></div>
    </header>
  );
};
export default Header;
