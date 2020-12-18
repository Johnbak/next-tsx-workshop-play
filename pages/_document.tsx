import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core";
import React from "react";
export default class _document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/img/favicon.jpg"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

_document.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  const intitialProps = await Document.getInitialProps(ctx);
  return {
    ...intitialProps,
    styles: [
      <React.Fragment key="styles">
        {intitialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};
