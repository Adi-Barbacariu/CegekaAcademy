import React from "react";
import { Card, Image } from "semantic-ui-react";
import { DeleteButton, EditPhotoButton } from "../Common";

function Photo({ index, title, description, url }) {
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
          />
          <DeleteButton itemType="photo" objectName={title} index={index} />
        </div>
      </Card.Content>
    </Card>
  );
}

export default Photo;
