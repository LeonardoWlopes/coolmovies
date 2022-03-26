import React, { useEffect, useState } from "react";
import * as S from "../../styles/reviews";
import { useRouter } from "next/router";

//api
import { movieById } from "../../src/services/api";

//types
import { IReviews } from "../../interfaces/reviews.interface";

//components
import { Review } from "../../src/components/Review";
import Head from "next/head";

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
      .catch(() => {
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
      <Head>
        <link rel="shortcut icon" href="/edit.ico" />
      </Head>
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
