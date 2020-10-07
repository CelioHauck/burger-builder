import React, { FunctionComponent } from "react";
import classes from "./style.module.css";
import Item from "./Item";

const Items: FunctionComponent<{}> = () => {
  return (
    <ul className={classes.Items}>
      <Item active link="">
        Burger Builder
      </Item>
      <Item link="">Checkout</Item>
    </ul>
  );
};

export default Items;
