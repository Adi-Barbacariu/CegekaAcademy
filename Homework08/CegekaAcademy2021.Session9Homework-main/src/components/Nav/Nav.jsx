import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Nav() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary>
      <Menu.Item
        as={Link}
        to="/albums"
        name="albums"
        active={activeItem === "albums"}
        onClick={handleItemClick}
      >
        Albums
      </Menu.Item>

      <Menu.Item
        as={Link}
        to="/photos"
        name="photos"
        active={activeItem === "photos"}
        onClick={handleItemClick}
      >
        Photos
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          as={Link}
          to="/login"
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
        >
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Nav;
