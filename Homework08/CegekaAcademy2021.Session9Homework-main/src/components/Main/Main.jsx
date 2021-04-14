import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AlbumList from "../Album/AlbumList";
import Login from "../Login/Login";
import PhotoList from "../Photo/PhotoList";
import { useSelector } from "react-redux";

function Main() {
  const photos = useSelector((state) => state.photos);
  const albums = useSelector((state) => state.albums);

  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photos));
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [photos, albums]);

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/albums">
        <AlbumList albums={albums} photos={photos} />
      </Route>

      <Route path="/photos">
        <PhotoList photos={photos} />
      </Route>
    </Switch>
  );
}

export default Main;
