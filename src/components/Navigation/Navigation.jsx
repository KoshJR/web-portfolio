import React from 'react'
import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={styles.navLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={styles.navLink}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={styles.navLink}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.navLink}>
            Work with Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation