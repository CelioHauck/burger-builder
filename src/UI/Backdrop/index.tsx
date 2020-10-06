import React, { FunctionComponent } from "react";
import classes from "./style.module.css";
type BackdropProps = {
  show: boolean;
  close: () => void;
};

const Backdrop: FunctionComponent<BackdropProps> = props => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.close} />
  ) : null;
};

export default Backdrop;
