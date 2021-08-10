import Link from 'next/link';
import React from 'react'
import styles from '../styles/cardarticle.module.scss';
import { Text } from './Typography/Text';
import { TitleTertiary } from './Typography/Title';

export const CardArticle = ({ article }: { article: any}) => {
    return (
        <li className={styles.li}>
            <Link href={article.url}>
                <a>
                    <div className={styles.container}>
                        <TitleTertiary>{article.title}</TitleTertiary>
                        <p className={styles.date}>{article.readable_publish_date}</p>
                        <Text>{article.description}</Text>
                        <div className={styles.reactions}>
                            <span>{article.positive_reactions_count}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff5755" fill="#ff5755" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </div>
                    </div>
                </a>
            </Link>
        </li>
    )
}