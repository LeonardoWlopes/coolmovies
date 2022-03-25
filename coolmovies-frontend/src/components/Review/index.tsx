import React, { useRef, useState } from "react";
import * as S from "./styles";

//interface
import { IReview } from "../../../interfaces/reviews.interface";

//redux
import { useSelector } from "react-redux";

//component
import { ToastContainer, toast } from "react-toastify";
//icons
import StarIcon from "@mui/icons-material/Star";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UpdateComment, DeleteComment } from "../../services/api";

interface props {
  data: IReview;
}

function Review({ data }: props) {
  const [comment, setComment] = useState(data.body);
  const [oldComment, setOldComment] = useState(data.body);
  const [showComment, setShowComment] = useState("flex");

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const user = useSelector((state: any) => state.mainReducer.user);

  function handleFocusComment() {
    inputRef.current?.focus();
  }

  function handleEditReview() {
    UpdateComment(data.nodeId, comment);
    setOldComment(comment);
  }

  function handleDeleteComment() {
    DeleteComment(data.id)
      .then(() => {
        setShowComment("none");
      })
      .catch((err) => console.log(err));
  }

  const userMadeThisReview = user?.id === data.userByUserReviewerId.id;

  return (
    <S.Container style={{ display: showComment }}>
      <S.Header>
        <span>{data.userByUserReviewerId.name}</span>
        <div>
          <span>{data.rating}</span>
          <StarIcon />
        </div>
      </S.Header>
      <S.Body>
        <S.TextArea
          ref={inputRef}
          value={comment}
          disabled={!userMadeThisReview}
          onChange={(e) => setComment(e.target.value)}
        />
      </S.Body>
      {userMadeThisReview && (
        <S.IconContainer>
          <DeleteIcon onClick={handleDeleteComment} />
          {comment !== oldComment ? (
            <SendIcon onClick={handleEditReview} />
          ) : (
            <EditIcon onClick={handleFocusComment} />
          )}
        </S.IconContainer>
      )}
    </S.Container>
  );
}

export { Review };
