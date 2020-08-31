import Head from "next/head";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Zon</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
