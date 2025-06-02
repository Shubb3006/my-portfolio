// components/Footer.js or directly in your page
import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <p>&copy; {new Date().getFullYear()} Shubham Bansal. All rights reserved.</p>
        <div className={styles["footer-links"]}>
          <a href="https://github.com/shubb3006" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/shubham-bansal-537ab2216/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:sm325642@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
