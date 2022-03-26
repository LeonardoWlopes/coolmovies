import React, { memo, useRef } from "react";
import * as S from "./styles";

//components
import Show from "../Show";

//icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//types
import { IShow } from "../../../interfaces/shows.interface";

type props = {
  shows: IShow[];
  title: string;
};

function EpisodesList({ shows, title }: props) {
  const slider = useRef<HTMLDivElement>(null);

  function handleMoveSlider(direction: string) {
    if (!!slider.current) {
      if (direction === "left") {
        slider.current.scrollLeft -= 200;
      } else {
        slider.current.scrollLeft += 200;
      }
    }
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
      <S.ShowsContainer ref={slider}>
        <S.LeftIconContainer>
          <ChevronLeftIcon onClick={() => handleMoveSlider("left")} />
        </S.LeftIconContainer>
        {!!shows &&
          shows.map((show) => <Show key={show.nodeId} showData={show} />)}
        <S.RightIconContainer>
          <ChevronRightIcon onClick={() => handleMoveSlider("right")} />
        </S.RightIconContainer>
      </S.ShowsContainer>
    </S.Container>
  );
}

export default memo(EpisodesList);
