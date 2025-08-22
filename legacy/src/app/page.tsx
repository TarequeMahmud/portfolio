import Skills from "@/components/Skills";
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
      <div className={styles.featured}>
        <div className={styles.whoami}>
          <h1>Who am I</h1>
          <hr />
          <em>
            From Figma Mockups to ER Diagrams — and much of what&#39;s in
            between, satisfactorily.
          </em>

          <p>
            I am a Full Stack Developer with a passion for turning ideas into
            scalable, secure, and user-friendly web applications. I specialize
            in crafting full solutions — from designing sleek interfaces in
            Figma and building interactive frontends with React and Next.js, to
            developing robust backends using Node.js, Express, and various SQL
            and NoSQL databases. My expertise covers authentication, real-time
            communication, API development, and web security, ensuring reliable
            and high-performing applications. I am comfortable managing data
            through ER diagrams and modern ORMs/ODMs like Prisma and Mongoose.
            With a background in Electrical and Electronics Engineering, I
            approach problems with analytical thinking and a fast-learning
            mindset, adapting quickly to new technologies and challenges.
          </p>
        </div>
        <h1>Skills:</h1>
        <hr className="seperator" />
        <Skills />
      </div>
    </div>
  );
}
