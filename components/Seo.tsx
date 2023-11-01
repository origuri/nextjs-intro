import Head from "next/head";
import * as React from "react";

interface SeoProps {
  title: string;
}

function Seo({ title }: SeoProps) {
  console.log("여기는 seo");

  return (
    <Head>
      <title>{title} | Next movies</title>
    </Head>
  );
}

export default React.memo(Seo);
