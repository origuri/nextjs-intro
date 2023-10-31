import NavBar from "@/components/Navbar";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log("Comp0-> ", Component);
  console.log("pp-> ", pageProps);

  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>오리조아</span>
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </div>
  );
}
