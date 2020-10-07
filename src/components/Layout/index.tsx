import React, { FunctionComponent } from "react";

import classes from "./style.module.css";
import Toolbar from "../../Navigation/Toolbar";

const Layout: FunctionComponent<{}> = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
