import React, { useEffect } from "react";
import * as S from "../styles/home";

import type { NextPage } from "next";

//redux
import { useSelector, useDispatch } from "react-redux";

//api
import { fetchAllMovies } from "../src/services/api";

//components
import EpisodesList from "../src/components/EpisodesList";

//actions
import { fetchAllMoviesSuccess } from "../redux/slices/movieSlice";

const Home: NextPage = () => {
  const movieList = useSelector((state: any) => state.movies.movieList);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllMovies().then((res) => {
      dispatch(fetchAllMoviesSuccess(res.data.allMovies.nodes));
    });
  }, [dispatch]);

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
