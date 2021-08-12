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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
          <title>Portfolio v2</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
