import React, { FunctionComponent } from "react";

import classes from './style.module.css';

const Modal: FunctionComponent<{}> = (props) => {
    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    )
}

export default Modal;