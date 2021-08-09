import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Portfolio v2</title>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>
      <p className={styles.fonttest}>PacaeimbuVari</p>
    </div>
    </>
  )
}
