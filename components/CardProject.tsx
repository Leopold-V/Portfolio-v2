import Link from 'next/link'
import React from 'react'
import styles from '../styles/cardproject.module.scss';
import { projectType } from '../types';
import { Text } from './Typography/Text';
import { TitleTertiary } from './Typography/Title';

export const CardProject = ({ project }: { project: projectType}) => {
    return (
        <li>
            <Link href={project.link || project.github}>
                <a>
                    <div className={styles.container}>
                        <TitleTertiary>{project.title}</TitleTertiary>
                        <Text>{project.description}</Text>
                        <div className={styles.tech}>{project.tech}</div>
                        <div className={styles.github}>
                            63
                        </div>
                    </div>
                </a>
            </Link>
        </li>
    )
}
