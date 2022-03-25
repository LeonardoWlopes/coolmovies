import React, { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllMoviesSuccess,
  userLoginSuccess,
} from "../../../redux/slices/mainSlice";

//API
import { fetchAllMovies, userLogin } from "../../services/api";

//components
import { Header } from "../Header";

//types
type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  const dispatch = useDispatch();

  const store = useSelector((state: any) => state.mainReducer);

  useEffect(() => {
    !store.movieList &&
      fetchAllMovies().then((res) => {
        dispatch(fetchAllMoviesSuccess(res.data.allMovies.nodes));
      });

    !store.user &&
      userLogin().then((res) => {
        dispatch(userLoginSuccess(res.data.currentUser));
      });
  }, [dispatch, store.movieList, store.user]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export { Layout };
