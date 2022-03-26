import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/graphql",
});

export const fetchAllMovies = async () => {
  const allMovies = await client.query({
    query: gql`
      query AllMovies {
        allMovies {
          nodes {
            id
            imgUrl
            title
            releaseDate
            nodeId
            userByUserCreatorId {
              id
              name
              nodeId
            }
          }
        }
      }
    `,
  });

  return allMovies;
};

export const movieById = async (id: string) => {
  const movie = await client.query({
    query: gql`
    query movieById {
      movieById(id: "${id}") {
        id
        imgUrl
        title
        releaseDate
          nodeId
          movieReviewsByMovieId {
            edges {
              node {
                id
                nodeId
                userByUserReviewerId {
                  id
                  name
                }
                body
                title
                rating
              }
            }
          }
        }
      }
      `,
  });

  return movie;
};

export const userLogin = async () => {
  const userInfo = await client.query({
    query: gql`
      query currentUser {
        currentUser {
          id
          name
          nodeId
        }
      }
    `,
  });

  return userInfo;
};

export const DeleteComment = async (id: string) => {
  const deleteComment = await client.mutate({
    mutation: gql`
      mutation {
        deleteMovieReviewById(input: { id: "${id}", clientMutationId: "${id}" }) {
          clientMutationId
          deletedMovieReviewId
        }
      }
    `,
  });

  return deleteComment;
};

export const UpdateComment = async (id: string, comment: string) => {
  const updateComment = await client.mutate({
    mutation: gql`
      mutation {
        updateMovieReview(
          input: {
            nodeId: "${id}"
            movieReviewPatch: { body: "${comment}" }
            clientMutationId: "${id}"
          }
        ) {
          clientMutationId
        }
      }
    `,
  });

  return updateComment;
};

export const CreateMovieReview = async (
  title: string,
  body: string,
  rating: number,
  movieId: string,
  userId: string
) => {
  const createMovieReview = await client.mutate({
    mutation: gql`
      mutation {
        createMovieReview(
          input: {
            movieReview: {
              title: "${title}"
              body: "${body}"
              rating: ${rating}
              movieId: "${movieId}"
              userReviewerId: "${userId}"
            }
          }
        ) {
          movieReview {
            id
            title
            body
            rating
            movieByMovieId {
              title
            }
            userByUserReviewerId {
              name
            }
          }
        }
      }
    `,
  });

  return createMovieReview;
};
