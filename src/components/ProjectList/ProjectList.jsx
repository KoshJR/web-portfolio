import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectList.module.css'

const ProjectList = () => {
  return (
    <section>
      <ul className={styles.projectList}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </section>
  );
}

export default ProjectList