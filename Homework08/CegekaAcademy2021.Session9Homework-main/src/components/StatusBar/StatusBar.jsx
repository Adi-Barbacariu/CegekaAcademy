import React, { useState } from "react";
import {
  Icon,
  Menu,
  Header,
  Button,
  Modal,
  Label,
  Input,
  Dropdown,
} from "semantic-ui-react";

const AddItemButton = ({ itemType, handleClick }) => (
  <Button onClick={handleClick}>
    <Icon name="add" />
    Add {itemType}
  </Button>
);

const ItemNumberLabel = ({ itemType, itemCount }) => (
  <Label size="large">
    {itemType}s<Label.Detail>{itemCount}</Label.Detail>
  </Label>
);

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

function StatusBar({ itemType, itemCount, createItem, photos }) {
  const [open, setOpen] = useState(false);
  const [itemData, setItemData] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setItemData({});
    setOpen(false);
  };

  const handleDropdownChange = (e, data) => {
    setItemData({ ...itemData, photosIds: data.value });
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
    <Menu secondary>
      <Menu.Item>
        <ItemNumberLabel itemType={itemType} itemCount={itemCount} />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <AddItemButton itemType={itemType} handleClick={handleOpen} />
        </Menu.Item>
      </Menu.Menu>
      {open && (
        <Modal onClose={handleClose} onOpen={handleOpen} open={open}>
          <Modal.Header>Add a new {itemType}</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header as="h3">{itemType == "photo" ? "Title" : "Name"}</Header>
              <Input
                fluid
                name={itemType == "photo" ? "title" : "name"}
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
              {itemType == "photo" && (
                <React.Fragment>
                  <Header as="h3">URL</Header>
                  <Input
                    fluid
                    name="url"
                    placeholder="Enter the URL here"
                    onChange={handleChange}
                  />
                </React.Fragment>
              )}
              {itemType == "album" && (
                <React.Fragment>
                  <Header as="h3">Tags</Header>
                  <Input
                    fluid
                    name="tags"
                    placeholder="Enter tags separated by a space"
                    onChange={handleChange}
                  />
                  <Header as="h3">Photos</Header>
                  {/* <Input
                    fluid
                    name="photos"
                    placeholder="Select photos which shoul exist in the album"
                    onChange={handleChange}
                  /> */}
                  <InputSelectPhotos
                    photos={photos}
                    handleChange={handleDropdownChange}
                  />
                </React.Fragment>
              )}
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
      )}
    </Menu>
  );
}

export default StatusBar;
