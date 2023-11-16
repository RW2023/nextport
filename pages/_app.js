import React from 'react';
import Head from 'next/head';
import '@/styles/globals.css';
import Layout from './_layout';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Head>
        <title>Ryan Wilson</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/img/favicon_io/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
