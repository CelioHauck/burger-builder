import React, { FunctionComponent } from "react";
import classes from "./style.module.css";
import Logo from "../../components/Logo";
import Items from "../Items";
import DrawerToggle from "../SideDrawer/DrawerToggle";

type ToolbarProps = {
  click: () => void;
};

const Toolbar: FunctionComponent<ToolbarProps> = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle toggle={props.click} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <Items></Items>
      </nav>
    </header>
  );
};

export default Toolbar;
