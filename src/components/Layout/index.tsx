import React, { FunctionComponent } from "react";

import classes from "./style.module.css";
import Toolbar from "../../Navigation/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer";

const Layout: FunctionComponent<{}> = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
