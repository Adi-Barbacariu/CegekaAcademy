import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AlbumList from "../Album/AlbumList";
import Login from "../Login/Login";
import PhotoList from "../Photo/PhotoList";
import * as api from "../../api";

function Main() {
  const [albums, setAlbums] = useState({});
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    const localPhotos = localStorage.getItem("photos");
    const localAlbums = localStorage.getItem("albums");

    if (localPhotos && localAlbums) {
      setPhotos(JSON.parse(localPhotos));
      setAlbums(JSON.parse(localAlbums));
    } else {
      const samplePhotos = api.getPhotos();
      const sampleAlbums = api.getAlbums();

      localStorage.setItem("photos", JSON.stringify(samplePhotos));
      localStorage.setItem("albums", JSON.stringify(sampleAlbums));

      setPhotos(api.getPhotos());
      setAlbums(api.getAlbums());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photos));
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [photos, albums]);

  const deletePhoto = (e, idx) => {
    let newPhotos = { ...photos };

    delete newPhotos[idx];

    setPhotos(newPhotos);
  };

  const deleteAlbum = (e, idx) => {
    let newAlbums = { ...albums };

    delete newAlbums[idx];

    setAlbums(newAlbums);
  };

  const editPhoto = (idx, updatedPhoto) => {
    let newPhotos = { ...photos };

    newPhotos[idx] = updatedPhoto;

    setPhotos(newPhotos);
  };

  const editAlbum = (idx, updatedAlbum) => {
    let newAlbums = { ...albums };

    newAlbums[idx].name = updatedAlbum.name;
    newAlbums[idx].description = updatedAlbum.description;

    setAlbums(newAlbums);
  };

  const createPhoto = (photo) => {
    let newPhotos = { ...photos };

    const timestamp = Date.now();

    newPhotos[`photo-${timestamp}`] = photo;

    setPhotos(newPhotos);
  };

  const createAlbum = (album) => {
    let newAlbums = { ...albums };

    album.tags = album.tags.split(" ");

    const timestamp = Date.now();

    newAlbums[`album-${timestamp}`] = album;

    setAlbums(newAlbums);
  };

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/albums">
        <AlbumList
          albums={albums}
          photos={photos}
          deleteAlbum={deleteAlbum}
          editAlbum={editAlbum}
          createAlbum={createAlbum}
        />
      </Route>
      <Route path="/photos">
        <PhotoList
          photos={photos}
          deletePhoto={deletePhoto}
          editPhoto={editPhoto}
          createPhoto={createPhoto}
        />
      </Route>
    </Switch>
  );
}

export default Main;
