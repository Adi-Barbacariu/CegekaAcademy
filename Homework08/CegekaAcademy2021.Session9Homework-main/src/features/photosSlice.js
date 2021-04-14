import { createSlice } from "@reduxjs/toolkit";
import { loadPhotos } from "../store/localStorage";

const initialState = loadPhotos();

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addPhoto(state, action) {
      const timestamp = Date.now();
      state[`photo-${timestamp}`] = action.payload;
    },
    deletePhoto(state, action) {
      delete state[action.payload];
    },
    editPhoto(state, action) {
      state[action.payload.index] = action.payload.photo;
    },
  },
});

export const { addPhoto, deletePhoto, editPhoto } = photosSlice.actions;

export default photosSlice.reducer;
