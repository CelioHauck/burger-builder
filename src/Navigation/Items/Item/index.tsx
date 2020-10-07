import React, { FunctionComponent } from "react";

import classes from "./style.module.css";

type ItemProps = {
  link: string;
  active?: boolean;
};

const Item: FunctionComponent<ItemProps> = props => {
  return (
    <li className={classes.Item}>
      <a href={props.link} className={props.active ? classes.active : ""}>
        {props.children}
      </a>
    </li>
  );
};

export default Item;
