import styles from "./page.module.css";
export const metadata = {
  title: "About - Shubham Bansal",
  description: "About Page of Shubham Bansal",
};

export default function AboutMe() {
  return (
    <main
      // style={{
      //   padding: "2rem",
      //   fontFamily: "Arial, sans-serif",
      //   maxWidth: "600px",
      //   margin: "auto",
      // }}
      className={styles.container}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Me</h1>
      <p
        style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "1rem" }}
      >
        Hello! I'm a passionate <strong>Frontend Developer</strong> specializing
        in building modern, responsive, and user-friendly web applications. I
        love turning creative designs into pixel-perfect websites that offer
        great user experiences.
      </p>
      <p
        style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "1rem" }}
      >
        My expertise includes React, Next.js, JavaScript, HTML5, CSS3, and
        modern tools like Tailwind CSS and TypeScript. I’m always eager to learn
        new technologies and improve my skills to deliver high-quality projects.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        When I’m not coding, I enjoy exploring UI/UX trends, experimenting with
        new design tools, and contributing to open-source projects. Feel free to
        connect with me to discuss web development, collaboration, or exciting
        projects!
      </p>
    </main>
  );
}
