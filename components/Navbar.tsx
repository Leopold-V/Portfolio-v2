import React from 'react'
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link'
import { TitlePrimary } from './Typography/Title';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navblock}>
                <div className={styles.logo}><h1><Link href='/'>LV</Link></h1></div>
                <ul className={styles.navlist}>
                    <li className={styles.navitem}><Link href='/'>Home</Link></li>
                    <li className={styles.navitem}><Link href='/Articles'>Articles</Link></li>
                    <li className={styles.navitem}><Link href='/Projects'>Projects</Link></li>
                </ul>
            </div>
            <button className={styles.btn}>
                <svg aria-label="moon" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
                    className="fill-current text-gray-700">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
            </button>
        </div>
    )
}
