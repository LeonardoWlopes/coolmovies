import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { FC, useState } from "react";
import Head from "next/head";
import { EnhancedStore } from "@reduxjs/toolkit";


import { Provider } from "react-redux";

//components
import { Layout } from "../src/components/Layout";
import store from "../redux/store";

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
