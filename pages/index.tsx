import styles from '../styles/pages/index.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '../public/projects.json';
import { projectType } from '../types';
import { Text } from '../components/Typography/Text';
import { TitlePrimary, TitleSecondary } from '../components/Typography/Title';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { CardArticle } from '../components/CardArticle';
import { CardProject } from '../components/CardProject';

export default function Home({
  articles,
  projectsList,
}: {
  articles: any;
  projectsList: projectType[];
}) {
  return (
    <div className={styles.container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8, type: 'spring' }}
        className={styles.heading}
      >
        <TitlePrimary>Hi, I'm Leopold</TitlePrimary>
        <Text>
          I am a <strong>fullstack developper.</strong> I love create and build web applications. My
          main expertises are in Javascript technologies : <strong>React, Node, electron...</strong>
        </Text>
        <ButtonPrimary href="CV_Leopold.pdf">Resume</ButtonPrimary>
        <ul className={styles.list_network}>
          <li>
            <motion.a
              whileHover={{ rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'linear' }}
              className="fa fa-github fa-2x"
              href="https://github.com/Leopold-V"
            ></motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{ rotateZ: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'linear' }}
              className="fa fa-linkedin fa-2x"
              href="https://www.linkedin.com/in/léopold-vertadier-953144162"
            ></motion.a>
          </li>
        </ul>
      </motion.div>
      <section>
        <div className={styles.content_section}>
          <div className={styles.article_title}>
            <TitleSecondary>Articles</TitleSecondary>
          </div>
          {articles && (
            <ul className={styles.list_wrapper}>
              {articles.data.map((art: any) => (
                <CardArticle key={art.id} article={art} />
              ))}
            </ul>
          )}
          <Link href="/articles">
            <a className={styles.btn_more}>More articles...</a>
          </Link>
        </div>
        <div className={styles.content_section}>
          <div className={styles.projects_title}>
            <TitleSecondary>Projects</TitleSecondary>
          </div>
          {
            <ul className={styles.list_wrapper}>
              {projectsList.map((project: projectType) => (
                <CardProject key={project.title} project={project} />
              ))}
            </ul>
          }
          <Link href="/projects">
            <a className={styles.btn_more}>More projects...</a>
          </Link>
        </div>
      </section>
    </div>
  );
}

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -200 },
};

export async function getStaticProps(context: any) {
  const BASE_URL = 'https://dev.to/api/articles?username=leopold';

  const response = await fetch(BASE_URL);
  const json = await response.json();

  const articleSorted = {
    data: json.sort((a: any, b: any) => b.positive_reactions_count - a.positive_reactions_count),
  };

  articleSorted.data.length = 2;
  projects.length = 2;

  return {
    props: {
      articles: articleSorted,
      projectsList: projects,
    },
  };
}
