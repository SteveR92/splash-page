import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";

import "../scss/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&family=Yeseva+One&family=Libre+Caslon+Display&family=Stardos+Stencil&display=swap&family=Yeseva+One&family=Dancing+Script&display=swap&family=Indie+Flower&display=swap?family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <Component {...pageProps} />
    </Container>
  );
}
