import React, { FunctionComponent } from "react";
import classes from "./style.module.css";
import BuildControl from "./BuildControl";
import { IngredientType } from "../../../utils/Enum/ingredient-type.enum";

const controls = [
  { label: "Salad", type: IngredientType.salad },
  { label: "Bacon", type: IngredientType.bacon },
  { label: "Cheese", type: IngredientType.cheese },
  { label: "Meat", type: IngredientType.meat },
];

type BuildControlsProps = {
  add: (type: IngredientType) => void;
  remove: (type: IngredientType) => void;
  ordered: () => void;
  disabled: { [k: string]: boolean };
  purchaseble: boolean;
  price: number;
};

const BuildControls: FunctionComponent<BuildControlsProps> = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => {
            props.add(ctrl.type);
          }}
          remove={() => {
            props.remove(ctrl.type);
          }}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        onClick={props.ordered}
        disabled={!props.purchaseble}
        className={classes.OrderButton}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
