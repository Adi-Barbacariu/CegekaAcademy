import React from "react";
import { Button, Header, Modal, Icon, Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { editAlbum } from "../../features/albumsSlice.js";

function EditAlbumButton({ index, name, description, tags, photos }) {
  const [open, setOpen] = React.useState(false);
  const [albumData, setAlbumData] = React.useState({
    name,
    description,
    tags,
    photos,
  });

  const dispatch = useDispatch();

  const onEditAlbum = () => {
    dispatch(editAlbum({ index, album: { ...albumData } }));
    setOpen(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setAlbumData({ ...albumData, [e.target.name]: value });
  };

  const handleCancel = (e) => {
    setAlbumData({ name, description });
    setOpen(false);
  };

  return (
    <Button basic color="green" onClick={() => setOpen(true)}>
      <Icon name="edit" />
      Edit
      {open && (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <Modal.Header>Edit Album</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header as="h3">Name</Header>
              <Input
                fluid
                defaultValue={albumData.name}
                name="name"
                onChange={handleChange}
              />
              <Header as="h3">Description</Header>
              <Input
                fluid
                defaultValue={albumData.description}
                name="description"
                onChange={handleChange}
              />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              content="Done"
              labelPosition="right"
              icon="checkmark"
              onClick={onEditAlbum}
              positive
            />
          </Modal.Actions>
        </Modal>
      )}
    </Button>
  );
}

export default EditAlbumButton;
