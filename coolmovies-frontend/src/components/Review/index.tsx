import React from "react";
import * as S from "./styles";

import { IReview } from "../../../interfaces/reviews.interface";

import StarIcon from "@mui/icons-material/Star";

interface props {
  data: IReview;
}

function Review({ data }: props) {
  console.log(data);

  return (
    <S.Container>
      <S.Header>
        <span>{data.userByUserReviewerId.name}</span>
        <div>
          <span>{data.rating}</span>
          <StarIcon />
        </div>
      </S.Header>
      <S.Body>{data.body}</S.Body>
    </S.Container>
  );
}

export { Review };
