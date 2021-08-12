import Link from 'next/link';
import React from 'react';
import styles from '../styles/cardarticle.module.scss';
import { useTheme } from './context/Theme';
import { Text } from './typography/Text';
import { TitleTertiary } from './typography/Title';

export const CardArticle = ({ article }: { article: any }) => {
  //@ts-ignore
  const { value } = useTheme();

  return (
    <li className={styles.wrapper}>
      <Link href={article.url}>
        <a>
          <div className={`${styles.container} ${value === 'dark' ? styles.dark : ''}`}>
            <TitleTertiary>{article.title}</TitleTertiary>
            <p className={styles.date}>{article.readable_publish_date}</p>
            <Text>{article.description}</Text>
            <div className={styles.reactions}>
              <span>{article.positive_reactions_count}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-heart"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff312d"
                fill="#ff312d"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};
