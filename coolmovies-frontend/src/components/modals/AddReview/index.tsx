import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "./styles";

//icons
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";

//api
import { CreateMovieReview } from "../../../services/api";

//redux
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

//types
type props = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  movieId: string;
};

function AddReviewModal({ setModalOpen, movieId }: props) {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const router = useRouter();

  const user = useSelector((state: any) => state.mainReducer.user);

  function handleCloseModal() {
    setModalOpen(false);
  }

  function handleCreateReview() {
    CreateMovieReview(title, comment, rating, movieId, user.id)
      .then((res) => {
        setComment("");
        setTitle("");
        setRating(0);
        setModalOpen(false);
        router.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <S.Modal>
      <S.Container>
        <S.RatingContainer>
          <div>
            <CloseIcon onClick={handleCloseModal} />
            <span>Create Review</span>
          </div>
          <div>
            <S.InputRating
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={(e: any) => setRating(e.target.value)}
            />
            <StarIcon />
          </div>
        </S.RatingContainer>
        <S.Body>
          <S.Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <S.TextArea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <S.Button onClick={handleCreateReview}>Submit</S.Button>
        </S.Body>
      </S.Container>
    </S.Modal>
  );
}

export { AddReviewModal };
