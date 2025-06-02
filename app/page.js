import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.page}>
        <div className={styles.info}>
          <h2>Hello, It's Me</h2>
          <h1>Shubham Bansal</h1>
          <h3>I'm a Full Stack Developer</h3>
          <p>
            I specialize in building scalable and user-friendly web
            applications. From responsive frontends using React and Next.js to
            efficient backends with Node.js and PostgreSQL, I bring ideas to
            life through clean, modern code.
          </p>
          <div className={styles.heroButtons}>
            <Link href="projects" className={`${styles.btn} ${styles.primary}`}>
              View Projects
            </Link>
            <Link
              href="contact"
              className={`${styles.btn} ${styles.secondary}`}
            >
              Contact Me
            </Link>
            <a
              href="/Shubham_Resume.pdf"
              download="Shubham_Bansal_CV.pdf"
              className={styles.btn}
            >
              Download CV
            </a>
          </div>
        </div>
        <div>
          <img className={styles.image} src="/DP.jpg" alt="Shubham" />
        </div>
      </div>
    </div>
  );
}
