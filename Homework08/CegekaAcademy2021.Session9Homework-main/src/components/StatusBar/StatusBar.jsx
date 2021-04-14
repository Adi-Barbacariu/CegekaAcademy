import React, { useState } from "react";
import { Icon, Menu, Button, Label, Dropdown } from "semantic-ui-react";
import PhotoForm from "../Photo/PhotoForm";
import AlbumForm from "../Album/AlbumForm";

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

function StatusBar({ itemType, itemCount, createItem, photos }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
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
      {itemType == "photo" && (
        <PhotoForm
          open={open}
          handleOpen={handleOpen}
          createItem={createItem}
          setOpen={setOpen}
        />
      )}
      {itemType == "album" && (
        <AlbumForm
          open={open}
          handleOpe={handleOpen}
          createItem={createItem}
          photos={photos}
          setOpen={setOpen}
        />
      )}
    </Menu>
  );
}

export default StatusBar;
