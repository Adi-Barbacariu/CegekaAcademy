import React, { useState } from "react";
import { Icon, Button, Confirm } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deletePhoto } from "../../features/photosSlice.js";
import { deleteAlbum } from "../../features/albumsSlice";

function DeleteButton(props) {
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const { index, objectName, itemType } = props;
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    if (itemType == "photo") {
      dispatch(deletePhoto(index));
    }

    if (itemType == "album") {
      dispatch(deleteAlbum(index));
    }

    setDeleteConfirmOpen(false);
  };

  const handleDelete = () => {
    setDeleteConfirmOpen(true);
  };

  const onCancelConfirm = () => {
    setDeleteConfirmOpen(false);
  };

  return (
    <Button basic color="red" onClick={() => handleDelete(index)}>
      <Icon name="trash" />
      Delete
      {deleteConfirmOpen && (
        <Confirm
          open={deleteConfirmOpen}
          content={`Are you sure you want to delete '${objectName}'?`}
          cancelButton="No"
          confirmButton="Yes, delete it!"
          onCancel={() => onCancelConfirm()}
          onConfirm={onDeleteItem}
        />
      )}
    </Button>
  );
}

export default DeleteButton;
