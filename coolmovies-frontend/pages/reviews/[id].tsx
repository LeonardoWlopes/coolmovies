import { useEffect, useState } from "react";
import * as S from "../../styles/reviews";

import { movieById } from "../../src/services/api";
import { IReviews } from "../../interfaces/reviews.interface";
import { Review } from "../../src/components/Review";

export default function Reviews() {
  const [movieData, setMovieData] = useState<IReviews | null>(null);

  useEffect(() => {
    movieById(window.location.pathname.split("/")[2]).then((res) =>
      setMovieData(res.data.movieById)
    );
  }, []);

  if (!movieData) {
    return <S.Container></S.Container>;
  }

  return (
    <S.Container>
      <S.ImgContainer>
        <S.Img src={movieData.imgUrl} />
      </S.ImgContainer>
      <S.ReviewsContainer>
        <S.Reviews>
          {movieData.movieReviewsByMovieId.edges.map((review) => (
            <Review key={review.node.id} data={review.node} />
          ))}
        </S.Reviews>
      </S.ReviewsContainer>
    </S.Container>
  );
}
