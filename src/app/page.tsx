import styles from "./home.module.scss";
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.welcome}>
        {" "}
        <div className={styles.bouncer}>
          {" "}
          <h1>Hey I am Tareque Mahmud</h1>
          <p>a Full Stack Web Developer.</p>
        </div>
      </div>
    </div>
  );
}
