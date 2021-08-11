import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Head>
          <title>Portfolio v2</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
