import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log("여기는 앱");
  console.log("이게 pageProps-> ", pageProps);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
