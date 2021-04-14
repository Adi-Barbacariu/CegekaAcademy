import React, { useState } from "react";
import { Header, Button, Modal, Input } from "semantic-ui-react";

function PhotoForm({ open, handleOpen, setOpen, createItem }) {
  const [itemData, setItemData] = useState({});

  const handleClose = () => {
    setItemData({});
    setOpen(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setItemData({ ...itemData, [e.target.name]: value });
  };

  const handleAdd = () => {
    createItem(itemData);
    handleClose();
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
          onClick={handleAdd}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default PhotoForm;
