import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Head>
          <title>EasyRev</title>
        </Head>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
