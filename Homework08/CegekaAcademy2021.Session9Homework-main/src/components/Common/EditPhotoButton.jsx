import React from "react";
import { Button, Header, Modal, Icon, Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { editPhoto } from "../../features/photosSlice.js";

function EditPhotoButton({ index, title, description, url }) {
  const [open, setOpen] = React.useState(false);
  const [photoData, setPhotoData] = React.useState({ title, description, url });

  const handleChange = (e) => {
    const value = e.target.value;

    setPhotoData({ ...photoData, [e.target.name]: value });
  };

  const handleCancel = (e) => {
    setPhotoData({ title, description, url });
    setOpen(false);
  };

  const dispatch = useDispatch();

  const onEditPhoto = () => {
    dispatch(editPhoto({ index, photo: { ...photoData } }));
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
          <Modal.Header>Edit Photo</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header as="h3">Title</Header>
              <Input
                fluid
                defaultValue={photoData.title}
                name="title"
                onChange={handleChange}
              />
              <Header as="h3">Description</Header>
              <Input
                fluid
                defaultValue={photoData.description}
                name="description"
                onChange={handleChange}
              />
              <Header as="h3">URL</Header>
              <Input
                fluid
                defaultValue={photoData.url}
                name="url"
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
              onClick={onEditPhoto}
              positive
            />
          </Modal.Actions>
        </Modal>
      )}
    </Button>
  );
}

export default EditPhotoButton;
