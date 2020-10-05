import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import { IngredientModel } from "../../types/models/ingredient.model";
import { IngredientType } from "../../utils/Enum/ingredient-type.enum";

type IngredientsState = {
    ingredients: IngredientModel
    totalPrice: number;
}

//Ver isso em typescript
const PRICES = {
    [IngredientType.salad]: 0.5,
    [IngredientType.cheese]: 0.4,
    [IngredientType.meat]: 1.3,
    [IngredientType.bacon]: 0.7,
}


class BurgerBuilder extends Component<{}, IngredientsState> {

    state: IngredientsState =
        {
            ingredients: {
                [IngredientType.salad]: 1,
                [IngredientType.bacon]: 1,
                [IngredientType.cheese]: 2,
                [IngredientType.meat]: 2,
            },
            totalPrice: 4
        }

    addIngredientHandler = (type: IngredientType) => {
        const key = type as keyof IngredientModel
        const updateIngredients = { ...this.state };
        updateIngredients.ingredients[key] += 1;
        const newPrice = updateIngredients.totalPrice + PRICES[key];
        this.setState({ ingredients: updateIngredients.ingredients, totalPrice: newPrice });
    }

    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls add={this.addIngredientHandler} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;