import React, { FunctionComponent } from "react";
import burgerLogo from "../../assets/images/burger-logo.png";

import classes from "./style.module.css";

const Logo: FunctionComponent<{}> = props => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
