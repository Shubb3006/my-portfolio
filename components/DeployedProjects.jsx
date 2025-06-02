"use client";
import { useState, useEffect } from "react";
import styles from "./DeployedProjects.module.css";
import Link from "next/link";
export default function DeployedProjects() {
  const [projects, setProjects] = useState([]);
  // const projects = [
  //   {
  //     id: "1",
  //     name: "todo-app",
  //     link: "https://todo-app-seven-sigma-83.vercel.app/",
  //   },
  //   {
  //     id: "2",
  //     name: "weather-app",
  //     link: "https://weather-app-zeta-red-40.vercel.app/",
  //   },
  //   {
  //     id: "3",
  //     name: "github-user-app",
  //     link: "https://github-user-coral.vercel.app/",
  //   },
  //   {
  //     id: "4",
  //     name: "My-portfolio",
  //     link: "https://my-portfolio-one-psi-42.vercel.app/",
  //   },
  // ];
  useEffect(() => {
    async function fetchProjects() {
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

      setProjects(Array.from(latestDeploymentsMap.values()));
    }

    fetchProjects();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>My Deployed Projects</h1>
      {/* 
      {loading && <p className={styles.loading}>Loading projects...</p>}
      {error && <p className={styles.error}>{error}</p>} */}

      <ul className={styles["project-list"]}>
        {projects.map((project) => (
          <li key={project.uid} className={styles["project-card"]}>
            <h2 className={styles["project-title"]}>
              {project.name.toUpperCase()}
            </h2>
            <a
              href={`https://${project.url}`}
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
