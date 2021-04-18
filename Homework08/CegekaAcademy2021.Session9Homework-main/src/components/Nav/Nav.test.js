import React from "react";
import Nav from "./Nav.jsx";

describe("Nav", () => {
  it("renders without crash", () => {
    shallow(<Nav />);
  });
});
