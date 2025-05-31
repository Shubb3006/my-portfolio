"use client";
import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className={style.navbar}>
      <span className={style.title}>Portfolio</span>

      <ul className={style.pages}>
        <li>
          <Link className={pathName == "/" ? style.active : ""} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={pathName == "/about" ? style.active : ""}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={(pathName == "/projects") || (pathName=="/deployed")  ? style.active : ""}
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={pathName == "/contact" ? style.active : ""}
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}
