import { analytics } from '@/scripts/analytics';
import '@/styles/globals.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Head from 'next/head';
import { useEffect } from 'react';

library.add(fab, fas);

export default function App({ Component, pageProps }) {
  useEffect(() => {
    analytics(window, document, 'script', 'dataLayer', process.env.GTAG);
  });
  return (
    <>
      <Head>
        <title>Lakeside Web Development</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
