import React from "react";
import * as S from "../src/styles/home";

import type { NextPage } from "next";

//redux
import { useSelector } from "react-redux";

//components
import EpisodesList from "../src/components/EpisodesList";
import Head from "next/head";

const Home: NextPage = () => {
  const movieList = useSelector((state: any) => state.mainReducer.movieList);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <S.Container>
        <S.RecomendedShow src="https://conexaopanvel.faccat.br/wp-content/uploads/2020/06/1_vHHBwcUFUaHWXntSnqKdCA.png" />
        <S.ListsContainer>
          {!!movieList && (
            <EpisodesList shows={movieList} title="All reviews" />
          )}
        </S.ListsContainer>
      </S.Container>
    </>
  );
};

export default Home;
