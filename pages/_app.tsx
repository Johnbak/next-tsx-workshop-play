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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default PeakyApp;
