import Image from "next/image";
import styles from "./projects.module.scss";
const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Assigned Tasks</h1>
      <hr className={styles.seperator} />

      <div className={styles["card-container"]}>
        <div className={styles.card}>
          <div className={styles["img-holder"]}>
            <img src="/projects/vox.png" />
          </div>
          <div className={styles["title-desc-holder"]}>
            <div className={styles.property}>
              <h3>First</h3>
            </div>
            <div>
              <h2>Okk</h2>
              <p>entially unchanged.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
