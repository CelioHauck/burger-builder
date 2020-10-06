import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary";
import { IngredientModel } from "../../types/models/ingredient.model";
import Modal from "../../UI/Modal";
import { IngredientType } from "../../utils/Enum/ingredient-type.enum";

type IngredientsState = {
  ingredients: IngredientModel;
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
};

//Ver isso em typescript
const PRICES = {
  [IngredientType.salad]: 0.5,
  [IngredientType.cheese]: 0.4,
  [IngredientType.meat]: 1.3,
  [IngredientType.bacon]: 0.7
};

class BurgerBuilder extends Component<{}, IngredientsState> {
  state: IngredientsState = {
    ingredients: {
      [IngredientType.salad]: 0,
      [IngredientType.bacon]: 0,
      [IngredientType.cheese]: 0,
      [IngredientType.meat]: 0
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState = (ingredientsModel: IngredientModel) => {
    const sum = Object.keys(ingredientsModel)
      .map(igKey => {
        const key = igKey as keyof IngredientModel;
        return ingredientsModel[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type: IngredientType) => {
    const key = type as keyof IngredientModel;
    const updateIngredients = { ...this.state };
    updateIngredients.ingredients[key] += 1;
    const newPrice = updateIngredients.totalPrice + PRICES[key];
    this.setState({
      ingredients: updateIngredients.ingredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updateIngredients.ingredients);
  };

  removeIngredientHandler = (type: IngredientType) => {
    const key = type as keyof IngredientModel;
    if (this.state.ingredients[key] <= 0) return;
    const updateIngredients = { ...this.state };
    updateIngredients.ingredients[key] -= 1;
    const newPrice = updateIngredients.totalPrice - PRICES[key];
    this.setState({
      ingredients: updateIngredients.ingredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updateIngredients.ingredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  closeHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo: any = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} close={this.closeHandler}>
          <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          purchaseble={this.state.purchasable}
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          ordered={this.purchasingHandler}
          disabled={disabledInfo}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
