import Image from "next/image";
import styles from "./Skills.module.scss";
import skillsdata from "@/datas/skills.json";
const Skills = () => {
  return (
    <div className={styles.container}>
      {skillsdata.skills.map((item, index) => (
        <div key={index} className={styles.card}>
          <div>
            <Image
              key={item.name}
              src={item.icon}
              alt={item.name}
              width={item.name === "CI/CD" ? 100 : 50}
              height={50}
            />
            <h2>{item.name}</h2>
          </div>
          <hr />
          <div>
            <p>{item.description}</p>
          </div>
          <hr />

          <div>
            <div
              style={{ width: `${item.experience_level}%` }}
              className={styles.marker}
            ></div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
