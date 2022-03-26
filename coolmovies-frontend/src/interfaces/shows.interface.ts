export interface IShow {
  __typename: string;
  id: string;
  imgUrl: string;
  title: string;
  releaseDate: string;
  nodeId: string;
  userByUserCreatorId: UserByUserCreatorId;
}

interface UserByUserCreatorId {
  __typename: string;
  id: string;
  name: string;
  nodeId: string;
}
