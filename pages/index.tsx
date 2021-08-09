import styles from '../styles/index.module.scss'
import { Text } from '../components/Typography/Text'
import { TitlePrimary, TitleSecondary } from '../components/Typography/Title'
import { ButtonPrimary } from '../components/ButtonPrimary'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <TitlePrimary>Hey, I'm Leopold.</TitlePrimary>
        <Text>I love create and build web applications. I am a javascript specialist and I am open to work.</Text>
        <ButtonPrimary>Resume</ButtonPrimary>
      </div>
      <section>
        <div className={styles.articles_section}>
          <TitleSecondary>Articles</TitleSecondary>
        </div>
        <div className={styles.projects_section}>
          <TitleSecondary>Projects</TitleSecondary>
        </div>
      </section>
    </div>
  )
}