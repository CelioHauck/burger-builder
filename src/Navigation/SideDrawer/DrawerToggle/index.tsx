import React, { FunctionComponent } from "react";
import classes from "./style.module.css";
type DrawerToggle = {
  toggle: () => void;
};

const DrawerToggle: FunctionComponent<DrawerToggle> = props => {
  return (
    <div className={classes.DrawerToggle} onClick={props.toggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
