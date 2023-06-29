import '@/styles/globals.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

library.add(fab, fas);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lakeside Web Development - Coming Soon</title>
      </Head>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}
