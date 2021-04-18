import React from "react";
import AlbumList from "./AlbumList.jsx";
import Album from "./Album.jsx";

const setup = () => {
  const props = {
    albums: {
      album1: {
        name: "Gembucket",
        description: "Duis consequat dui nec nisi volutpat eleifend.",
        tags: ["Warrior", "Kingsford", "Jackson"],
        photosIds: ["photo4", "photo13", "photo9", "photo11"],
      },
      album2: {
        name: "Wrapsafe",
        description: "Praesent blandit lacinia erat.",
        tags: ["Dryden", "Weeping Birch", "International"],
        photosIds: ["photo13", "photo19", "photo3", "photo9", "photo15"],
      },
      album3: {
        name: "Andalax",
        description: "In hac habitasse platea dictumst.",
        tags: ["Merchant", "Lyons", "Merchant", "Meadow Ridge"],
        photosIds: ["photo15", "photo1"],
      },
    },
    photos: {
      photo1: {
        title: "Fright Night Part II",
        description: "Nunc rhoncus dui vel sem.",
        url: "https://source.unsplash.com/1600x900/?happy",
      },
      photo2: {
        title: "The Detective 2",
        description:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        url: "https://source.unsplash.com/1600x900/?friends",
      },
      photo3: {
        title: "Interpreter, The",
        description: "Morbi ut odio.",
        url: "https://source.unsplash.com/1600x900/?nature",
      },
      photo4: {
        title: "Hot Rod",
        description: "In hac habitasse platea dictumst.",
        url: "https://source.unsplash.com/1600x900/?landscape",
      },
      photo5: {
        title: "Grand Day Out with Wallace and Gromit, A",
        description: "Etiam justo.",
        url: "https://source.unsplash.com/1600x900/?vacations",
      },
    },
  };

  const component = shallow(
    <AlbumList albums={props.albums} photos={props.photos} />
  );

  return {
    component,
    props,
  };
};

describe("AlbumList", () => {
  const { component, props } = setup();

  it("should render all albums", () => {
    expect(component.find(Album).length).toEqual(
      Object.keys(props.albums).length
    );
  });
});
