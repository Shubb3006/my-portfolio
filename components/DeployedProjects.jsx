import styles from "./DeployedProjects.module.css";
import Link from "next/link";
export default function DeployedProjects() {
  const projects = [
    {
      id: "1",
      name: "todo-app",
      link: "https://todo-app-seven-sigma-83.vercel.app/",
    },
    {
      id: "2",
      name: "weather-app",
      link: "https://weather-app-zeta-red-40.vercel.app/",
    },
    {
      id: "3",
      name: "github-user-app",
      link: "https://github-user-coral.vercel.app/",
    },
  ];
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>My Deployed Projects</h1>
      {/* 
      {loading && <p className={styles.loading}>Loading projects...</p>}
      {error && <p className={styles.error}>{error}</p>} */}

      <ul className={styles["project-list"]}>
        {projects.map((project) => (
          <li key={project.id} className={styles["project-card"]}>
            <h2 className={styles["project-title"]}>
              {project.name.toUpperCase()}
            </h2>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Open Link
            </a>
          </li>
        ))}
      </ul>

      <Link href="projects">Show Github Projects</Link>
    </main>
  );
}
