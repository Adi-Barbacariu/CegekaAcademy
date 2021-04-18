/* global describe, it, expect, renderer */
import React from "react";
import { DeleteButton } from "../Common";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Common", () => {
  it("Delete button snapshot test", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DeleteButton
            index="index"
            objectName="My object name"
            itemType="photo"
          />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
