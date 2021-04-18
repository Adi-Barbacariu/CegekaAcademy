import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import Album from "../Album/Album.jsx";

describe("Album", () => {
  it("Album snapshot test", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Album
            index="key"
            name="album name"
            description="album description"
            tags={["tag1", "tag2"]}
            photos={["photo1", "photo2"]}
            deleteAlbum="delete album"
            editAlbum="edit album"
          />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
