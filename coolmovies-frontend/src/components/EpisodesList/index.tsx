import React, { memo } from "react";
import * as S from "./styles";

//components
import Show from "../Show";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function EpisodesList() {
  const item = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>title</S.Title>
      </S.TitleContainer>
      <S.ShowsContainer >
        <S.LeftIconContainer>
        <ChevronLeftIcon />
        </S.LeftIconContainer>
        {item.map((item) => (
          <Show />
        ))}
        <S.RightIconContainer>
        <ChevronRightIcon  />

        </S.RightIconContainer>
      </S.ShowsContainer>
    </S.Container>
  );
}

export default memo(EpisodesList);
