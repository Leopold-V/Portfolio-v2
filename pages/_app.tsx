import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { ThemeProvider } from '../components/context/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Head>
          <title>Portfolio v2</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
