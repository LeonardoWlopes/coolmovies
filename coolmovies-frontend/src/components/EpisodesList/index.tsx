import React, { memo, MutableRefObject, useRef } from "react";
import * as S from "./styles";

//components
import Show from "../Show";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function EpisodesList() {
  const item = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

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
        <S.Title>title</S.Title>
      </S.TitleContainer>
      <S.ShowsContainer ref={slider}>
        <S.LeftIconContainer>
          <ChevronLeftIcon onClick={() => handleMoveSlider("left")} />
        </S.LeftIconContainer>
        {item.map((item) => (
          <Show />
        ))}
        <S.RightIconContainer>
          <ChevronRightIcon onClick={() => handleMoveSlider("right")} />
        </S.RightIconContainer>
      </S.ShowsContainer>
    </S.Container>
  );
}

export default memo(EpisodesList);
