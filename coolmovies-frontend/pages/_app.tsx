import "../src/styles/globals.css";
import React, { FC } from "react";

//redux
import store from "../src/redux/store";
import { Provider } from "react-redux";

//components
import { Layout } from "../src/components/Layout";
import Head from "next/head";

//types
import type { AppProps } from "next/app";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{"Coolmovies Frontend"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default App;
