import React from "react";
import Album from "./Album";
import { Card } from "semantic-ui-react";
import StatusBar from "../StatusBar/StatusBar";

const getAlbumPhotos = (photos, photosIds) => {
  const albumPhotos = [];

  photosIds.forEach((id) => {
    for (let [key, value] of Object.entries(photos)) {
      if (key == id) albumPhotos.push(value);
    }
  });

  return albumPhotos;
};

function AlbumList({ albums, photos }) {
  const albumCount = Object.keys(albums).length;

  return (
    <React.Fragment>
      <StatusBar itemType="album" itemCount={albumCount} photos={photos} />
      <Card.Group>
        {Object.keys(albums).map((key) => {
          const currentAlbum = albums[key];

          const albumPhotos = getAlbumPhotos(photos, currentAlbum.photosIds);

          return (
            <Album
              index={key}
              {...currentAlbum}
              photos={albumPhotos}
              key={key}
            />
          );
        })}
      </Card.Group>
    </React.Fragment>
  );
}

export default AlbumList;
