import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/graphql",
});

export const fetchAllMovies = async () => {
  const allMovies = await client.query({
    query: getAllMoviesQuery,
  });

  return allMovies;
};

const getAllMoviesQuery = gql`
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
`;
