import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/mainSlice";

export default configureStore({
  reducer: {
    mainReducer: reducer,
  },
});
