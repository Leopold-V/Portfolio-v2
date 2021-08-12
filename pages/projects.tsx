import React from 'react';
import styles from '../styles/pages/projects.module.scss';
import projectsList from '../public/projects.json';
import { projectType } from '../types';
import { TitleSecondary } from '../components/Typography/Title';
import { ProjectPresentation } from '../components/ProjectPresentation';

const projects = ({ projectsList }: { projectsList: projectType[] }) => {
  return (
    <div className={styles.container}>
      <TitleSecondary>Projects</TitleSecondary>
      {
        <ul className={styles.list_wrapper}>
          {projectsList.map((project: projectType, i) => {
            if (i % 2 !== 0) {
              return <ProjectPresentation key={project.title} project={project} />;
            } else {
              return <ProjectPresentation key={project.title} project={project} reverse />;
            }
          })}
        </ul>
      }
    </div>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: {
      projectsList: projectsList,
    },
  };
}

export default projects;
