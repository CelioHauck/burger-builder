import React, { FunctionComponent } from "react";
import { IngredientModel } from "../../../types/models/ingredient.model";
import { IngredientType } from "../../../utils/Enum/ingredient-type.enum";

type OrderSummaryProps = {
    ingredients: IngredientModel
}

const OrderSummary: FunctionComponent<OrderSummaryProps> = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ig => {
            const key = ig as keyof IngredientModel;
            return (
                <li key={IngredientType[key] + props.ingredients[key]}>
                    <span style={{ textTransform: 'capitalize' }}>{IngredientType[key]}</span>: {props.ingredients[key]}
                </li>);
        })

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </React.Fragment>
    );
}

export default OrderSummary;