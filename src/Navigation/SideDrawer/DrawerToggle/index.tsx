import React, { FunctionComponent } from "react";

type DrawerToggle = {
  toggle: () => void;
};

const DrawerToggle: FunctionComponent<DrawerToggle> = props => {
  return <div onClick={props.toggle}>MENU</div>;
};

export default DrawerToggle;
