import React, { FunctionComponent, useEffect } from "react";
import { IngredientModel } from "../../../types/models/ingredient.model";
import { IngredientType } from "../../../utils/Enum/ingredient-type.enum";
import Button from "../../../UI/Button";
import { ButtonType } from "../../../utils/Enum/button-type.enum";

type OrderSummaryProps = {
  ingredients: IngredientModel;
  totalPrice: number;
  cancel: () => void;
  continue: () => void;
};

const OrderSummary: FunctionComponent<OrderSummaryProps> = (props) => {
  useEffect(() => {
    console.log("[Order Summary] Will Update");
  });

  const ingredientSummary = Object.keys(props.ingredients).map((ig) => {
    const key = ig as keyof IngredientModel;
    return (
      <li key={IngredientType[key] + props.ingredients[key]}>
        <span style={{ textTransform: "capitalize" }}>
          {IngredientType[key]}
        </span>
        : {props.ingredients[key]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={props.cancel} type={ButtonType.danger}>
        Cancel
      </Button>
      <Button clicked={props.continue} type={ButtonType.success}>
        Confirm
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
