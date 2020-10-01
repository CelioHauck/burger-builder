import React, { Component } from "react";
import Burger from "../../components/Burger";
import { IngredientModel } from "../../types/ingredient.model";
import { IngredientType } from "../../utils/Enum/ingredient-type.enum";

type IngredientsState = {
    ingredients: IngredientModel
}

class BurgerBuilder extends Component<{}, IngredientsState> {

    state: IngredientsState =
        {
            ingredients: {
                [IngredientType.salad]: 1,
                [IngredientType.bacon]: 1,
                [IngredientType.cheese]: 2,
                [IngredientType.meat]: 2,
            }
        }

    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Builder</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;