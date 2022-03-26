import React, { memo } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";

//types
import { IShow } from "../../interfaces/shows.interface";

type props = {
  showData: IShow;
};

function Show({ showData }: props) {
  const router = useRouter();

  function moveToShowDetails() {
    router.push(`/reviews/${showData.id}`);
  }

  return (
    <S.Container onClick={moveToShowDetails}>
      <S.ShowImage
        src={showData.imgUrl}
        alt={showData.title}
        width="100%"
        height="100%"
      />
    </S.Container>
  );
}

export default memo(Show);
