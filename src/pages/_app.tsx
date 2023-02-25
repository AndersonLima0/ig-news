import React from "react";
import { AppProps } from "next/app";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

import "../styles/global.scss";
import { Header } from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </>
  );
}
