import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <link href='https://fonts.googleapis.com' rel='preconnect' />
          <link href='https://fonts.gstatic.com' rel='preconnect' />
          <link
            href='https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='font-outfit'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
