import Link from 'next/link';
import React from 'react';
import styles from '../styles/cardproject.module.scss';
import { projectType } from '../types';
import { useTheme } from './context/Theme';
import { Text } from './typography/Text';
import { TitleTertiary } from './typography/Title';

export const CardProject = ({ project }: { project: projectType }) => {
  //@ts-ignore
  const { value } = useTheme();

  return (
    <li>
      <Link href={project.link || project.github}>
        <a>
          <div className={`${styles.container} ${value === 'dark' ? styles.dark : ''}`}>
            <TitleTertiary>{project.title}</TitleTertiary>
            <Text>{project.description}</Text>
            <div className={styles.tech}>{project.tech}</div>
            <div className={styles.github}>
              <iframe
                src={`https://ghbtns.com/github-btn.html?user=leopold-v&repo=${project.repo_name}&type=star&count=true`}
                scrolling="0"
                frameBorder="0"
                width="80"
                height="20"
                title="GitHub"
              ></iframe>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};
