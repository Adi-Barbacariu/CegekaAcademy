import * as api from "../api";

export const loadPhotos = () => {
  const localPhotos = localStorage.getItem("photos");

  if (localPhotos) {
    return JSON.parse(localPhotos);
  }

  return api.getPhotos();
};

export const loadAlbums = () => {
  const localAlbums = localStorage.getItem("albums");

  if (localAlbums) {
    return JSON.parse(localAlbums);
  }

  return api.getAlbums();
};

export const saveState = (itemName, state) => {
  localStorage.setItem(itemName, JSON.stringify(state));
};
