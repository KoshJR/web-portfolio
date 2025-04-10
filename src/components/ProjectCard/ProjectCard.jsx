import React from 'react'
import styles from './ProjectCard.module.css'

const ProjectCard = () => {
  return (
    <li className={styles.projectCard}>
      <img src="" alt="Water tracker App" />
      <h3>Water Tracker App</h3>
      <p>Soome text </p>
    </li>
  );
}

export default ProjectCard