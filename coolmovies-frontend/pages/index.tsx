import React from "react";
import * as S from "../styles/home";

import type { NextPage } from "next";

//redux
import { useSelector } from "react-redux";

//components
import EpisodesList from "../src/components/EpisodesList";

const Home: NextPage = () => {
  const movieList = useSelector((state: any) => state.mainReducer.movieList);

  return (
    <S.Container>
      <S.RecomendedShow src="https://conexaopanvel.faccat.br/wp-content/uploads/2020/06/1_vHHBwcUFUaHWXntSnqKdCA.png" />
      <S.ListsContainer>
        <EpisodesList shows={movieList} title="All movies" />
      </S.ListsContainer>
    </S.Container>
  );
};

export default Home;
