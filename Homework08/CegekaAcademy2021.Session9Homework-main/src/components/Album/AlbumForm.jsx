import React, { useState } from "react";
import { Header, Button, Modal, Input, Dropdown } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addAlbum } from "../../features/albumsSlice.js";

const InputSelectPhotos = ({ photos, handleChange }) => {
  const options = [];
  for (let [key, value] of Object.entries(photos)) {
    const option = {
      key: key,
      text: value.title,
      value: key,
      image: { avatar: false, src: value.url },
    };
    options.push(option);
  }

  return (
    <Dropdown
      placeholder="Select photos"
      name="photos"
      fluid
      multiple
      search
      selection
      options={options}
      onChange={handleChange}
    />
  );
};

function AlbumForm({ open, handleOpen, photos, setOpen }) {
  const [itemData, setItemData] = useState({});

  const dispatch = useDispatch();

  const onSaveAddAlbum = () => {
    dispatch(addAlbum(itemData));
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

  const handleDropdownChange = (e, data) => {
    setItemData({ ...itemData, photosIds: data.value });
  };

  return (
    <Modal onClose={handleClose} onOpen={handleOpen} open={open}>
      <Modal.Header>Add a new album</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header as="h3">Name</Header>
          <Input
            fluid
            name="name"
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
          <Header as="h3">Tags</Header>
          <Input
            fluid
            name="tags"
            placeholder="Enter tags separated by a space"
            onChange={handleChange}
          />
          <Header as="h3">Photos</Header>
          <InputSelectPhotos
            photos={photos}
            handleChange={handleDropdownChange}
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
          onClick={onSaveAddAlbum}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default AlbumForm;
