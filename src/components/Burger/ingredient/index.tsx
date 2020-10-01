import React, { FunctionComponent } from "react";
import { IngredientType } from "../../../utils/Enum/ingredient-type.enum";
import classes from './styled.module.css';


type IngredientProps = {
    type: IngredientType
}

const ingredientSwitch: any = (type:string ) => {
    return ({
        [IngredientType.breadBottom]:<div className={classes.BreadBottom}></div>,
        [IngredientType.breadTop]: (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}/>
                <div className={classes.Seeds2}/>
            </div>
        ),
        [IngredientType.meat]: <div className={classes.Meat}/>,
        [IngredientType.cheese]: <div className={classes.Cheese}/>,
        [IngredientType.salad]: <div className={classes.Salad}/>,
        [IngredientType.bacon]: <div className={classes.Bacon}/>,
    } as any)[type] || [];
};

const Ingredient: FunctionComponent<IngredientProps> = (props) => ingredientSwitch(props.type);

export default Ingredient;