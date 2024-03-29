import React from "react";
import Head from "next/head";

export const Seo = () => {
  const pageTitle = "Kelvin Brito";
  const pageDesc =
    "Kelvin Brito is a frontend engineer specializing in building & designing exceptional, high-quality websites and applications. This is Kelvin Brito's engineering portfolio, which details all of his personal front-end projects, GitHub, and contact information.";
  const canonicalUrl = "https://kelvinbrito.dev/";
  const twitterHandle = "@britoszn";

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
      <meta content="Kelvin Brito" name="author" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={pageDesc} key="desc" />
      <meta
        name="keywords"
        content="kelvin brito, britojs, personal website, front-end, frontend engineer, portfolio, software, react, typescript, javascript, js, web development, html, css"
      />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} key="ogdesc" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kelvinbrito.dev/" key="ogurl" />
      <meta property="og:image" content="https://kelvinbrito.dev/britojs.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta
        name="twitter:image"
        content="https://kelvinbrito.dev/britojs.png"
      />
      <link rel="canonical" key="canonical" href={canonicalUrl} />
    </Head>
  );
};
