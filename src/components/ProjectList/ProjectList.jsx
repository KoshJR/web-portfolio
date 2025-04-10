import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectList.module.css'

const ProjectList = () => {
  return (
      <ul className={styles.projectList}>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
    </ul>
  )
}

export default ProjectList