import React from 'react';
import styles from '../styles/projectpresentation.module.scss';
import Image from 'next/image'
import { projectType } from '../types'
import { TitleTertiary } from './Typography/Title';
import { Text } from './Typography/Text';

export const ProjectPresentation = ({ project }: { project: projectType}) => {
    return (
        <div className={styles.container}>
            {/* @ts-ignore */}
            <Image
                layout="fixed"
                width={530}
                height={247} 
                src={project.screen} 
                alt="Project screen" 
            />
            <div className={styles.content}>
                <TitleTertiary>{project.title}</TitleTertiary>
                <Text>{project.description}</Text>
            </div>
        </div>
    )
}
