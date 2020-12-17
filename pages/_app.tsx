import React, { ReactElement } from "react";
import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
interface Props {}

function PeakyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PeakyBlinder</title>
        <meta name="viewport" content=" initial-scale=1.0,width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default PeakyApp;
