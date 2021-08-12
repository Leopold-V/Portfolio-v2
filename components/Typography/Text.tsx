import React, { ReactNode } from 'react';
import styles from '../../styles/typo.module.scss';

export const Text = ({ children }: { children: ReactNode }) => {
  return <p className={styles.text}>{children}</p>;
};
