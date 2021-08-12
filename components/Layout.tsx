import React, { ReactNode } from 'react';
import styles from '../styles/layout.module.scss';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
