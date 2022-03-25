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

  console.log(allMovies);

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
