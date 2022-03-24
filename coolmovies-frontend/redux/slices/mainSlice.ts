import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: null,
    user: null,
  },

  reducers: {
    fetchAllMoviesSuccess: (state, action) => {
      console.log(action.payload);

      state.movieList = action.payload;
    },

    userLoginSuccess: (state, action) => {
      console.log(action.payload);

      state.user = action.payload;
    },
  },
});

export const { fetchAllMoviesSuccess, userLoginSuccess } = mainSlice.actions;

export default mainSlice.reducer;
