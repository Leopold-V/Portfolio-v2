import styles from '../styles/pages/index.module.scss';
import Link from 'next/link';
import projects from '../public/projects.json';
import { projectType } from '../types';
import { Text } from '../components/typography/Text';
import { TitlePrimary, TitleSecondary } from '../components/typography/Title';
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
      <div className={styles.heading}>
        <TitlePrimary>Hey, I'm Leopold. 👋</TitlePrimary>
        <Text>
          I am a <strong>fullstack developper.</strong> I love create and build web applications. My
          main expertises are in Javascript technologies : <strong>React, Node, electron...</strong>
        </Text>
        <ButtonPrimary href="CV_Leopold.pdf">Resume</ButtonPrimary>
        <ul className={styles.list_network}>
          <li>
            <a className="fa fa-github fa-2x" href="https://github.com/Leopold-V"></a>
          </li>
          <li>
            <a
              className="fa fa-linkedin fa-2x"
              href="https://www.linkedin.com/in/léopold-vertadier-953144162"
            ></a>
          </li>
        </ul>
      </div>
      <section>
        <div className={styles.content_section}>
          <div className={styles.article_title}>
            <TitleSecondary>Articles</TitleSecondary>
          </div>
          {articles.error === null && (
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

export async function getStaticProps(context: any) {
  const response = await fetch('http://localhost:3000/api/article');
  const json = await response.json();
  const articleSorted = {
    error: json.error,
    data: json.data.sort(
      (a: any, b: any) => b.positive_reactions_count - a.positive_reactions_count
    ),
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
