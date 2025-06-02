"use client";
import { useEffect, useState } from "react";
import styles from "./ProjectPage.module.css";
// import Link from "next/navigation";
import Link from "next/link";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("https://api.github.com/users/shubb3006/repos");
        if (!res.ok) throw new Error("Could not fetch projects");
        const data = await res.json();

        setProjects(data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>My GitHub Projects</h1>

      {loading && <p className={styles.loading}>Loading projects...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <ul className={styles["project-list"]}>
        {projects.map((project) => (
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className={styles["project-card"]}
          >
            <h2 className={styles["project-title"]}>
              {project.name.toUpperCase()}
            </h2>
            <p className={styles["project-description"]}>
              {project.created_at.split("T")[0]}
            </p>
            <p className={styles["project-link"]}>Visit Repository →</p>
          </a>
        ))}
      </ul>

      <Link href="/deployed" className={styles["back-link"]}>
        🚀 Show Deployed Projects
      </Link>
    </main>
  );
}
