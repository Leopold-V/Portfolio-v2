import styles from '../styles/index.module.scss'
import Link from 'next/link'
import { Text } from '../components/Typography/Text'
import { TitlePrimary, TitleSecondary } from '../components/Typography/Title'
import { ButtonPrimary } from '../components/ButtonPrimary'
import { CardArticle } from '../components/CardArticle'

export default function Home({ articles }: { articles: any}) {

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <TitlePrimary>Hey, I'm Leopold.</TitlePrimary>
        <Text>I love create and build web applications. I am a javascript specialist and I am open to work.</Text>
        <ButtonPrimary>Resume</ButtonPrimary>
      </div>
      <section>
        <div className={styles.articles_section}>
          <div className={styles.article_title}>
            <TitleSecondary>Articles</TitleSecondary>
          </div>
          {articles.error === null && 
            <ul>{articles.data.map((art: any) => <CardArticle key={art.id} article={art} />)}</ul>
          }
          <Link href='/Articles'><a className={styles.btn_more}>More articles...</a></Link>
        </div>
        <div className={styles.projects_section}>
          <TitleSecondary>Projects</TitleSecondary>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps(context: any) {

  const response = await fetch('http://localhost:3000/api/article');
  const json = await response.json();
  const articleSorted = {error: json.error, data: json.data.sort((a: any, b: any) => b.positive_reactions_count - a.positive_reactions_count)};
  articleSorted.data.length = 3;

  return {
      props: {
          articles: articleSorted
      }
  }
}