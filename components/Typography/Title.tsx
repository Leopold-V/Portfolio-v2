import React, { ReactNode } from 'react';
import styles from '../../styles/typo.module.scss';

export const TitlePrimary = ({children}: {children: ReactNode}) => {
    return (
        <h1 className={styles.title_primary}>{children}</h1>
    )
}

export const TitleSecondary = ({children}: {children: ReactNode}) => {
    return (
        <h2 className={styles.title_secondary}>{children}</h2>
    )
}

export const TitleTertiary = ({children}: {children: ReactNode}) => {
    return (
        <h3 className={styles.title_tertiary}>{children}</h3>
    )
}