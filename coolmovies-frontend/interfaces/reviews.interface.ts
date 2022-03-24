interface UserByUserReviewerId {
  id: string;
  name: string;
}

export interface IReview {
  id: string;
  userByUserReviewerId: UserByUserReviewerId;
  body: string;
  title: string;
  rating: string;
}

interface Edge {
  node: IReview;
}

interface MovieReviewsByMovieId {
  edges: Edge[];
}

export interface IReviews {
  id: string;
  imgUrl: string;
  title: string;
  releaseDate: string;
  nodeId: string;
  movieReviewsByMovieId: MovieReviewsByMovieId;
}
