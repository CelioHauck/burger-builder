import React, { FunctionComponent } from "react";
import classes from "./style.module.css";
import { ButtonType } from "../../utils/Enum/button-type.enum";

type ButtonProps = {
  type: ButtonType;
  clicked: () => void;
};

const Button: FunctionComponent<ButtonProps> = props => {
  return (
    <button
      className={[classes.Button, classes[props.type]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
