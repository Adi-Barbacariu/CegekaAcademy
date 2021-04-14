import React, { useState } from "react";
import { Icon, Menu, Button, Label } from "semantic-ui-react";
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

function StatusBar({ itemType, itemCount, photos }) {
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
        <PhotoForm open={open} handleOpen={handleOpen} setOpen={setOpen} />
      )}
      {itemType == "album" && (
        <AlbumForm
          open={open}
          handleOpen={handleOpen}
          photos={photos}
          setOpen={setOpen}
        />
      )}
    </Menu>
  );
}

export default StatusBar;
