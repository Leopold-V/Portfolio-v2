import React from 'react';
import styles from '../styles/buttonprimary.module.scss';

export const ButtonPrimary = (props: any) => {
  return (
    <a className={styles.btn} {...props}>
      {props.children}
    </a>
  );
};
