import React from 'react'
import styles from '../styles/projects.module.scss';
import projectsList from '../public/projects.json';
import { TitleSecondary } from '../components/Typography/Title';
import { CardProject } from '../components/CardProject';

const projects = () => {
    return (
        <div className={styles.container}>
            <TitleSecondary>Projects</TitleSecondary>
            {<ul className={styles.list_wrapper}>
            {projectsList.map((project: any) => <CardProject key={project.title} project={project} />)}
          </ul>}
        </div>
    )
}

export default projects;