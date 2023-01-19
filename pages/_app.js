import GlobalStyle from "@/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>EasyRev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
