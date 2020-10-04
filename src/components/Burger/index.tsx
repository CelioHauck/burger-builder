import React, { FunctionComponent } from "react";
import { IngredientModel } from "../../types/models/ingredient.model";
import { IngredientType } from "../../utils/Enum/ingredient-type.enum";
import Ingredient from "./ingredient";
import classes from './style.module.css';


type Ingredients = {
    ingredients: IngredientModel
}


const burger: FunctionComponent<Ingredients> = (props) => {

    let tranformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            const ig = igKey as keyof IngredientModel;
            return [...Array(props.ingredients[ig])].map((_, i) => {
                return <Ingredient key={ig + i} type={ig} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (tranformedIngredients.length > 0) {
        tranformedIngredients = [<p>Please start adding ingredients</p>]
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type={IngredientType.breadTop} />
            {tranformedIngredients}
            <Ingredient type={IngredientType.breadBottom} />
        </div>
    );

}

export default burger;