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
