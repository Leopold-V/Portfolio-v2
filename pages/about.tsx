import React from 'react';
import styles from '../styles/pages/about.module.scss';
import { Techs } from '../components/Techs';
import { TitleSecondary } from '../components/Typography/Title';


const About = () => {

  return (
    <>
      <div className={styles.container}>
        <TitleSecondary>The technologies I work with :</TitleSecondary>
      </div>
      <Techs />
    </>
  );
};

export default About;
