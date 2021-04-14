import React, { useState } from "react";
import { Header, Button, Modal, Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../../features/photosSlice.js";

function PhotoForm({ open, handleOpen, setOpen }) {
  const [itemData, setItemData] = useState({});

  const dispatch = useDispatch();

  const onSaveAddPhoto = () => {
    dispatch(addPhoto(itemData));
    handleClose();
  };

  const handleClose = () => {
    setItemData({});
    setOpen(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setItemData({ ...itemData, [e.target.name]: value });
  };

  return (
    <Modal onClose={handleClose} onOpen={handleOpen} open={open}>
      <Modal.Header>Add a new photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header as="h3">Title</Header>
          <Input
            fluid
            name="title"
            placeholder="Enter a meaningful title here"
            onChange={handleChange}
          />
          <Header as="h3">Description</Header>
          <Input
            fluid
            name="description"
            placeholder="Enter a good description here"
            onChange={handleChange}
          />
          <Header as="h3">URL</Header>
          <Input
            fluid
            name="url"
            placeholder="Enter the URL here"
            onChange={handleChange}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          content="Add"
          labelPosition="right"
          icon="checkmark"
          onClick={onSaveAddPhoto}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default PhotoForm;
