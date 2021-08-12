import Link from 'next/link';
import React from 'react';
import styles from '../styles/cardproject.module.scss';
import { projectType } from '../types';
import { Text } from './Typography/Text';
import { TitleTertiary } from './Typography/Title';

export const CardProject = ({ project }: { project: projectType }) => {
  //const [stars, setStars] = useState();

  // const getstars = async () => {
  //     const response = await fetch(`https://api.github.com/repos/leopold-v/${project.title}`);
  //     const json = await response.json();
  //     setStars(json.stargazers_count);
  // }

  return (
    <li>
      <Link href={project.link || project.github}>
        <a>
          <div className={styles.container}>
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
