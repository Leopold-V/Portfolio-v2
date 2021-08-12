import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="Description" content="This is my portfolio website" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://portfolio-v2-ashy.vercel.app/" />
          <meta property="og:title" content="Leopold Portfolio" />
          <meta
            property="og:image"
            content="https://i.gyazo.com/62cb16bcd8fd4932844b745215aa35ec.png"
          ></meta>
          <meta property="og:description" content="This is my portfolio website" />
          <script src="https://kit.fontawesome.com/a52257a244.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
