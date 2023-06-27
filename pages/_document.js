import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='title' content='Lakeside Web Development' />
        <meta
          name='description'
          content='Lakeside Web Development: Crafting exceptional websites tailored to your needs. Expertise in design, development, and optimization.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
