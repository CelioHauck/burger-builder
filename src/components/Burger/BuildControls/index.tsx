import React, { FunctionComponent } from 'react';
import classes from './style.module.css';
import BuildControl from './BuildControl';
import { IngredientType } from '../../../utils/Enum/ingredient-type.enum';

const controls = [
    { label: 'Salad', type: IngredientType.salad },
    { label: 'Bacon', type: IngredientType.bacon },
    { label: 'Cheese', type: IngredientType.cheese },
    { label: 'Meat', type: IngredientType.meat },
]

type BuildControlsProps = {
    add: (type: IngredientType) => void;
}

const BuildControls: FunctionComponent<BuildControlsProps> = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label} added={() => { props.add(ctrl.type) }} />
            ))}
        </div>
    )
}

export default BuildControls;