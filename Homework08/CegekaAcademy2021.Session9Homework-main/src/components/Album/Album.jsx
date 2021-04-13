import React from "react";
import { Card, Button, Icon, Label, Divider } from "semantic-ui-react";
import "./Album.css";
import WithLightbox from "../Common/WithLightbox.js";
import { DeleteButton, EditAlbumButton } from "../../components/Common";

const SlideshowButton = ({ photos }) => (
  <Button
    attached="bottom"
    fluid
    basic
    color="blue"
    style={{ margin: "5px 0" }}
  >
    <WithLightbox photos={photos}>Slideshow</WithLightbox>
  </Button>
);

function Album({
  index,
  name,
  description,
  tags,
  photos,
  deleteAlbum,
  editAlbum,
}) {
  const renderTags = (tagsArray) =>
    tagsArray.map((t, idx) => <Label key={idx}>{t}</Label>);

  return (
    <Card>
      <Card.Content>
        <Card.Header className="header">{name}</Card.Header>
        <Divider />
        {renderTags(tags)}
        <Card.Description className="album-desc">
          {description}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <SlideshowButton photos={photos} />
        <div className="ui two buttons">
          {/* <Button basic color="green">
            <Icon name="edit" />
            Edit
          </Button> */}
          <EditAlbumButton
            index={index}
            name={name}
            description={description}
            tags={tags}
            photos={photos}
            editAlbum={editAlbum}
          />
          <DeleteButton
            objectName={name}
            index={index}
            deleteObject={(e) => {
              deleteAlbum(e, index);
            }}
          />
        </div>
      </Card.Content>
    </Card>
  );
}

export default Album;
