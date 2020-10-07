import React, { FunctionComponent } from "react";
import classes from "./style.module.css";
import Logo from "../../components/Logo";
import Items from "../Items";

const Toolbar: FunctionComponent<{}> = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
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
