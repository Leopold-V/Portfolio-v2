import React, { ReactNode } from 'react';
import styles from '../styles/layout.module.scss';
import { useTheme } from './context/Theme';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }: { children: ReactNode }) => {
  //@ts-ignore
  const { value } = useTheme();

  return (
    <div className={`${value === 'dark' ? 'dark' : 'light'}`}>
      <div className={styles.container}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
