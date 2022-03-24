import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: null,
  },

  reducers: {
    fetchAllMoviesSuccess: (state, action) => {
      console.log(action.payload);

      state.movieList = action.payload;
    },
  },
});

export const { fetchAllMoviesSuccess } = movieSlice.actions;

export default movieSlice.reducer;
