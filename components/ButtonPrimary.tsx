import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/buttonprimary.module.scss';

export const ButtonPrimary = (props: any) => {
  return (
    <motion.a
      whileHover={{
        translateY: -5,
        boxShadow: 'var(--primary-shadow-hover)',
        backgroundColor: 'var(--primary-color-hover)',
      }}
      whileTap={{ translateY: 0 }}
      transition={{ duration: 0.2 }}
      className={styles.btn}
      {...props}
    >
      {props.children}
    </motion.a>
  );
};
