import type { AppProps } from "next/app";
import Head from "next/head";
import { CartProvider } from "../contexts/CartContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (

      <CartProvider>
        <Head>
          <title>Teste Técnico Frontend - MKPLACE</title>
          <link rel="icon" href="/favicon-mkplace.ico" />
        </Head>
        <Component {...pageProps} />
      </CartProvider>

  );
}

export default MyApp;
