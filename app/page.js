"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.info}>
        <p>Hello, It's Me</p>
        <h1>Shubham Bansal</h1>
        <p>I'm a Full Stack Developer</p>
        <p>flana dhimkana</p>
        {/* <button
          className={styles.btn}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Shubham_Resume.pdf"; // path inside public folder
            link.download = "Shubham_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download CV
        </button> */}
        <a
          href="/Shubham_Resume.pdf"
          download="Shubham_Bansal_CV.pdf"
          className={styles.btn}
        >
          Download CV
        </a>
        
      </div>
      <div>
        <img
          className={styles.image}
          src="/DP.jpg"
          alt="Shubham"
        />
      </div>
    </div>
  );
}
