import React, { FunctionComponent } from 'react';
import classes from './style.module.css';
import BuildControl from './BuildControl';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
]

const BuildControls: FunctionComponent<{}> = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label}/>
            ))}
        </div>
    )
}

export default BuildControls;