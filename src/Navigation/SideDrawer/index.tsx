import React, { FunctionComponent } from "react";

import Logo from "../../components/Logo";
import Items from "../Items";
import classes from "./style.module.css";
import Backdrop from "../../UI/Backdrop";

type SideDrawer = {
  show: boolean;
  close: () => void;
};

const SideDrawer: FunctionComponent<SideDrawer> = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.show) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.show} close={props.close}></Backdrop>
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
          <nav>
            <Items></Items>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
