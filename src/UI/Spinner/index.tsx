import React, { FunctionComponent } from "react";
import classes from "./style.module.css";

const Spinner: FunctionComponent = () => {
  return <div className={classes.loader}>Loading...</div>;
};

export default Spinner;
