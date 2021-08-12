import Link from 'next/link';
import React from 'react';
import styles from '../styles/cardproject.module.scss';
import { projectType } from '../types';
import { useTheme } from './context/Theme';
import { Text } from './Typography/Text';
import { TitleTertiary } from './Typography/Title';

export const CardProject = ({ project }: { project: projectType }) => {
  const theme = useTheme();

  return (
    <li>
      <Link href={project.link || project.github}>
        <a>
          <div className={`${styles.container} ${theme?.value === 'dark' ? styles.dark : ''}`}>
            <TitleTertiary>{project.title}</TitleTertiary>
            <Text>{project.description}</Text>
            <div className={styles.tech}>{project.tech}</div>
            <div className={styles.github}>
              <iframe
                src={`https://ghbtns.com/github-btn.html?user=leopold-v&repo=${project.repo_name}&type=star&count=true`}
                width="80"
                height="20"
                title="GitHub"
                style={{ border: 'none', overflow: 'hidden' }}
              ></iframe>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};
