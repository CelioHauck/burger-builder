import React, { FunctionComponent } from "react";
import classes from "./style.module.css";

const Toolbar: FunctionComponent<{}> = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav>
        <ul>...</ul>
      </nav>
    </header>
  );
};

export default Toolbar;
