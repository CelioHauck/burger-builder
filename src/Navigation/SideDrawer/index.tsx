import React, { FunctionComponent } from "react";

import Logo from "../../components/Logo";
import Items from "../Items";
import classes from "./style.module.css";

const SideDrawer: FunctionComponent<{}> = props => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
        <nav>
          <Items></Items>
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
