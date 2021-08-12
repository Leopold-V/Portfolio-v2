import React, { useRef, FormEvent } from 'react';
import styles from '../styles/searchbar.module.scss';

export const Searchbar = ({ search }: { search: any }) => {
  const ref_input = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //@ts-ignore
    search(ref_input.current.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} ref={ref_input} type="text" placeholder="Search" />
      <button className={styles.btn}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};
