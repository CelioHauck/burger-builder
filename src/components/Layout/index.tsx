import React, { FunctionComponent, useState } from "react";

import classes from "./style.module.css";
import Toolbar from "../../Navigation/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer";

const Layout: FunctionComponent<{}> = props => {
  const [state, setShow] = useState({ show: false });

  const closeHandler = () => {
    setShow({ show: false });
  };

  const openHandler = () => {
    setShow(prevState => {
      return { show: !prevState.show };
    });
  };

  return (
    <React.Fragment>
      <Toolbar click={openHandler} />
      <SideDrawer show={state.show} close={closeHandler} />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
