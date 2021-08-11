import React from 'react';
import styles from '../styles/projectpresentation.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import { projectType } from '../types'
import { TitleTertiary } from './Typography/Title';
import { Text } from './Typography/Text';

export const ProjectPresentation = ({ project, reverse = false }: { project: projectType, reverse?: boolean}) => {
    return (
        <div className={styles.container}>
            {!reverse && <Image
                className={styles.image}
                layout="fixed"
                width={642}
                height={300} 
                src={project.screen} 
                alt="Project screen" 
            />}
            <div className={styles.content}>
                <TitleTertiary>{project.title}</TitleTertiary>
                <Text>{project.description}</Text>
                <div className={styles.tech}>{project.tech}</div>
                <div className={styles.group_button}>
                    <iframe 
                        src={`https://ghbtns.com/github-btn.html?user=leopold-v&repo=${project.repo_name}&type=star&count=true`}
                        scrolling="0" frameBorder="0" width="80" height="20" title="GitHub">
                    </iframe>
                    {project.link && 
                    <Link href={project.link}>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"></path><path fillRule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"></path></svg>
                        </a>
                    </Link>}
                </div>
            </div>
            {reverse && <Image
                className={styles.image}
                layout="fixed"
                width={642}
                height={300} 
                src={project.screen} 
                alt="Project screen" 
            />}
        </div>
    )
}
