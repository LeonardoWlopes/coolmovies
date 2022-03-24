import React, { useEffect } from "react";

//Redux
import { useDispatch } from "react-redux";
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

  useEffect(() => {
    fetchAllMovies().then((res) => {
      dispatch(fetchAllMoviesSuccess(res.data.allMovies.nodes));
    });

    userLogin().then((res) => {
      dispatch(userLoginSuccess(res.data.currentUser));
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export { Layout };
