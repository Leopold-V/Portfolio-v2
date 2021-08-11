import React from 'react'
import styles from '../styles/pages/projects.module.scss';
import projectsList from '../public/projects.json';
import { projectType } from '../types';
import { TitleSecondary } from '../components/Typography/Title';
import { ProjectPresentation } from '../components/ProjectPresentation';

const projects = () => {
    return (
        <div className={styles.container}>
            <TitleSecondary>Projects</TitleSecondary>
            {<ul className={styles.list_wrapper}>
            {projectsList.map((project: projectType) => <ProjectPresentation key={project.title} project={project} />)}
          </ul>}
        </div>
    )
}

export default projects;