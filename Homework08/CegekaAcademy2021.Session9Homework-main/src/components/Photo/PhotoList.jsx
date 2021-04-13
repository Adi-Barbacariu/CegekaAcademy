import React from "react";
import Photo from "./Photo";
import { Card } from "semantic-ui-react";
import StatusBar from "../StatusBar/StatusBar";

function PhotoList({ photos, deletePhoto, editPhoto, createPhoto }) {
  const photoCount = Object.keys(photos).length;

  return (
    <React.Fragment>
      <StatusBar
        itemType="photo"
        itemCount={photoCount}
        createItem={createPhoto}
      />
      <Card.Group>
        {Object.keys(photos).map((key) => {
          const currentPhoto = photos[key];
          return (
            <Photo
              index={key}
              {...currentPhoto}
              key={key}
              deletePhoto={deletePhoto}
              editPhoto={editPhoto}
            />
          );
        })}
      </Card.Group>
    </React.Fragment>
  );
}

export default PhotoList;
