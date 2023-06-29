import '@/styles/globals.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Head from 'next/head';

import { Analytics } from '@vercel/analytics/react';

library.add(fab, fas);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lakeside Web Development</title>
      </Head>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}
