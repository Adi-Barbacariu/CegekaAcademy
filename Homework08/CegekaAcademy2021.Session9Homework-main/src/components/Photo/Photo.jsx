import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { DeleteButton, EditPhotoButton } from "../Common";

function Photo({ index, title, description, url, deletePhoto, editPhoto }) {
  return (
    <Card>
      <Image src={url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <div className="ui two buttons">
          <EditPhotoButton
            index={index}
            title={title}
            description={description}
            url={url}
            editPhoto={editPhoto}
          />
          <DeleteButton
            objectName={title}
            index={index}
            deleteObject={(e) => {
              deletePhoto(e, index);
            }}
          />
        </div>
      </Card.Content>
    </Card>
  );
}

export default Photo;
