"use client";
import { useState, useEffect } from "react";
import styles from "./DeployedProjects.module.css";
import Link from "next/link";
export default function DeployedProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("https://api.vercel.com/v6/deployments", {
          headers: {
            Authorization: "Bearer HxNy8k1Bk3PsZXAfah56NnQA",
          },
        });
        if (!res.ok) throw new Error("could not load Projects");
        const data = await res.json();

        const latestDeploymentsMap = new Map();

        data.deployments.forEach((deployment) => {
          const existing = latestDeploymentsMap.get(deployment.name);
          if (
            !existing ||
            new Date(deployment.createdAt) > new Date(existing.createdAt)
          ) {
            latestDeploymentsMap.set(deployment.name, deployment);
          }
        });
        setLoading(false);
        setError("");
        setProjects(Array.from(latestDeploymentsMap.values()));
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }

    fetchProjects();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>My Deployed Projects</h1>

      {loading && <p className={styles.loading}>Loading projects...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <ul className={styles["project-list"]} style={{ minHeight: "450px" }}>
        {projects.map((project) => (
          <a
            key={project.uid}
            href={`https://${project.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["project-card"]}
          >
            <h2 className={styles["project-title"]}>
              {project.name.toUpperCase()}
            </h2>
            <p className={styles["project-link"]}>Open Link</p>
          </a>
        ))}
      </ul>

      <Link href="projects" className={styles["back-link"]}>
        🚀 Show Github Projects
      </Link>
    </main>
  );
}
