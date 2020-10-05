import React, { FunctionComponent } from 'react';
import { BuildControlProps } from '../../../../types/props/Burger/build-control.props';

import classes from './style.module.css';



const BuildControl:FunctionComponent<BuildControlProps> = (props) =>{
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} disabled={props.disabled} onClick={props.remove}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    );
}

export default BuildControl;