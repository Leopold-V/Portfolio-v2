import React, { ReactNode } from 'react'
import styles from '../styles/ButtonPrimary.module.scss'

export const ButtonPrimary = (props: any) => {
    return (
        <button className={styles.btn} {...props}>
            { props.children }
        </button>
    )
}
