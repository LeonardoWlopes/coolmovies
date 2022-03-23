import { css } from "@emotion/react";
import {
  Button,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import type { NextPage } from "next";
import { exampleActions, useAppDispatch, useAppSelector } from "../redux";

//components
import EpisodesList from "../src/components/EpisodesList";

import * as S from "../styles/home";

const Home: NextPage = () => {
  return (
    <S.Container>
      <S.RecomendedShow src="https://conexaopanvel.faccat.br/wp-content/uploads/2020/06/1_vHHBwcUFUaHWXntSnqKdCA.png" />
      <S.ListsContainer>
        <EpisodesList />
        <EpisodesList />
      </S.ListsContainer>
    </S.Container>
  );
};

export default Home;
