import React from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';
import { useTheme } from './context/Theme';

export const Navbar = () => {
  //@ts-ignore
  const { value, setValue } = useTheme();

  const handleTheme = () => {
    if (value === 'light') {
      localStorage.setItem('theme', 'dark');
      setValue('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setValue('light');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navblock}>
        <div className={styles.logo}>
          <h1>
            <Link href="/">LV</Link>
          </h1>
        </div>
        <ul className={styles.navlist}>
          <li>
            <Link href="/">
              <a className={styles.navitem}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a className={styles.navitem}>Articles</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className={styles.navitem}>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
      <button className={styles.btn} onClick={handleTheme}>
        <svg
          aria-label="moon"
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="fill-current text-gray-700"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </button>
    </div>
  );
};
