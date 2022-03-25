import React, { useEffect, useState } from "react";
import * as S from "../../styles/reviews";

import { movieById } from "../../src/services/api";
import { IReviews } from "../../interfaces/reviews.interface";
import { Review } from "../../src/components/Review";
import { useRouter } from "next/router";

//icons
import AddIcon from "@mui/icons-material/Add";
import { AddReviewModal } from "../../src/components/modals/AddReview";

export default function Reviews() {
  const [movieData, setMovieData] = useState<IReviews | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    movieById(window.location.pathname.split("/")[2])
      .then((res) => setMovieData(res.data.movieById))
      .catch((err) => {
        router.push("/");
      });
  }, [router]);

  if (!movieData) {
    return <S.Container></S.Container>;
  }

  function handleOpenModal() {
    setModalOpen(true);
  }

  return (
    <>
      {modalOpen && (
        <AddReviewModal movieId={movieData.id} setModalOpen={setModalOpen} />
      )}
      <S.Container>
        <S.ImgContainer>
          <S.Img src={movieData.imgUrl} />
        </S.ImgContainer>
        <S.ReviewsContainer>
          <S.AddContainer onClick={handleOpenModal}>
            <AddIcon />
            <span>Add new review</span>
          </S.AddContainer>
          <S.Reviews>
            {movieData.movieReviewsByMovieId.edges.map((review) => (
              <Review key={review.node.id} data={review.node} />
            ))}
          </S.Reviews>
        </S.ReviewsContainer>
      </S.Container>
    </>
  );
}
