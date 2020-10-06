import React, { FunctionComponent } from "react";

import classes from "./style.module.css";
import Backdrop from "../Backdrop";

type ModalProps = {
  show: boolean;
  close: () => void;
};

const Modal: FunctionComponent<ModalProps> = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} close={props.close} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
