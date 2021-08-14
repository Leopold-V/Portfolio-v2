import React, { MouseEvent, useEffect, useRef } from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';
import { useTheme } from './context/Theme';
import gsap from 'gsap';

export const Navbar = () => {
  const theme = useTheme();

  const handleTheme = () => {
    if (theme?.value === 'light') {
      localStorage.setItem('theme', 'dark');
      theme?.setValue('dark');
    } else {
      localStorage.setItem('theme', 'light');
      theme?.setValue('light');
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
          <li className={styles.navitem_wrapper}>
            <Link href="/">
                <a className={styles.navitem}>
                  Home
                <svg
                  className={styles.nav_circle}
                  width="78"
                  height="65"
                  viewBox="0 0 178 105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M123.639 4C95.3269 4.30774 64.996 3.81357 38.2359 14.1307C22.6388 20.1441 7.15939 30.238 4.46685 48.0087C0.703955 72.8438 20.2746 89.2452 42.0486 95.8301C67.1789 103.43 95.299 100.847 119.608 91.4728C137.86 84.4348 160.094 71.937 170.044 54.2179C190.341 18.0727 104.137 7.65064 84.4233 4"
                    stroke="#5CEBDF"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
              </svg>
                </a>
            </Link>
          </li>
          <li className={styles.navitem_wrapper}>
            <Link href="/articles">
                <a className={styles.navitem}>Articles
                <svg
                  className={styles.nav_circle}
                  width="78"
                  height="65"
                  viewBox="0 0 178 105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M123.639 4C95.3269 4.30774 64.996 3.81357 38.2359 14.1307C22.6388 20.1441 7.15939 30.238 4.46685 48.0087C0.703955 72.8438 20.2746 89.2452 42.0486 95.8301C67.1789 103.43 95.299 100.847 119.608 91.4728C137.86 84.4348 160.094 71.937 170.044 54.2179C190.341 18.0727 104.137 7.65064 84.4233 4"
                    stroke="#5CEBDF"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
                </a>
            </Link>
          </li>
          <li className={styles.navitem_wrapper}>
            <Link href="/projects">
              <a className={styles.navitem}>Projects
              <svg
              className={styles.nav_circle}
              width="78"
              height="65"
              viewBox="0 0 178 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M123.639 4C95.3269 4.30774 64.996 3.81357 38.2359 14.1307C22.6388 20.1441 7.15939 30.238 4.46685 48.0087C0.703955 72.8438 20.2746 89.2452 42.0486 95.8301C67.1789 103.43 95.299 100.847 119.608 91.4728C137.86 84.4348 160.094 71.937 170.044 54.2179C190.341 18.0727 104.137 7.65064 84.4233 4"
                stroke="#5CEBDF"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
              </a>
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
