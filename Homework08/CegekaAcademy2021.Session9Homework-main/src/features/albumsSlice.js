import { createSlice } from "@reduxjs/toolkit";
import { loadAlbums } from "../store/localStorage";

const initialState = loadAlbums();

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    addAlbum(state, action) {
      action.payload.tags = action.payload.tags.split(" ");
      const timestamp = Date.now();
      state[`album-${timestamp}`] = action.payload;
    },
    deleteAlbum(state, action) {
      delete state[action.payload];
    },
    editAlbum(state, action) {
      const idx = action.payload.index;
      const newAlbum = { ...state[idx] };
      newAlbum.name = action.payload.album.name;
      newAlbum.description = action.payload.album.description;
      state[idx] = newAlbum;
    },
  },
});

export const { addAlbum, deleteAlbum, editAlbum } = albumsSlice.actions;

export default albumsSlice.reducer;
