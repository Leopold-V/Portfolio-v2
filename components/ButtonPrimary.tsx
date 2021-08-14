import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/buttonprimary.module.scss';

export const ButtonPrimary = (props: any) => {
  return (
    <motion.a
      whileHover={{
        translateY: -5,
        boxShadow: 'var(--primary-shadow-hover)',
        opacity: 0.8
      }}
      whileTap={{ translateY: 0, boxShadow: 'var(--primary-shadow)', opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={styles.btn}
      {...props}
    >
      {props.children}
    </motion.a>
  );
};
