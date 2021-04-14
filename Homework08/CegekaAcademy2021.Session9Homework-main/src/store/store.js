import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../features/photosSlice";
import albumsReducer from "../features/albumsSlice";

export default configureStore({
  reducer: {
    photos: photosReducer,
    albums: albumsReducer,
  },
});
