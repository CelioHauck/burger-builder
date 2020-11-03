import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary";
import { IngredientModel } from "../../types/models/ingredient.model";
import Customer from "../../types/models/customer.model";
import Modal from "../../UI/Modal";
import { IngredientType } from "../../utils/Enum/ingredient-type.enum";
import axios from "../../infra/axios/order";
import Spinner from "../../UI/Spinner";
import ErrorHandler from "../../hoc/ErrorHandler";

type IngredientsState = {
  ingredients?: IngredientModel;
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
  loading: boolean;
};

interface Order {
  ingredients: IngredientModel;
  price: number;
  custormer: Customer;
  deliveryMethod: string;
}

//Ver isso em typescript
const PRICES = {
  [IngredientType.salad]: 0.5,
  [IngredientType.cheese]: 0.4,
  [IngredientType.meat]: 1.3,
  [IngredientType.bacon]: 0.7,
};

class BurgerBuilder extends Component<{}, IngredientsState> {
  state: IngredientsState = {
    ingredients: undefined,
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
  };

  componentDidMount() {
    axios.get("/ingredients.json").then((e) => {
      this.setState({ ingredients: e.data });
    });
  }

  updatePurchaseState = (ingredientsModel: IngredientModel) => {
    const sum = Object.keys(ingredientsModel)
      .map((igKey) => {
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
    if (updateIngredients.ingredients) {
      updateIngredients.ingredients[key] += 1;
      const newPrice = updateIngredients.totalPrice + PRICES[key];
      this.setState({
        ingredients: updateIngredients.ingredients,
        totalPrice: newPrice,
      });
      this.updatePurchaseState(updateIngredients.ingredients);
    }
  };

  removeIngredientHandler = (type: IngredientType) => {
    const key = type as keyof IngredientModel;
    if (this.state.ingredients && this.state.ingredients[key] <= 0) return;
    const updateIngredients = { ...this.state };
    if (updateIngredients.ingredients) {
      updateIngredients.ingredients[key] -= 1;
      const newPrice = updateIngredients.totalPrice - PRICES[key];
      this.setState({
        ingredients: updateIngredients.ingredients,
        totalPrice: newPrice,
      });
      this.updatePurchaseState(updateIngredients.ingredients);
    }
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  closeHandler = () => {
    this.setState({ purchasing: false });
  };

  continueHandler = () => {
    this.setState({ loading: true });
    if (this.state.ingredients) {
      const order: Order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        custormer: {
          name: "Célio",
          address: {
            street: "Rua testinho de noronha",
            zipCode: "33335554",
            country: "Brasil",
          },
          email: "email@email.com",
        },
        deliveryMethod: "IFood",
      };

      axios
        .post("/orders.json", order)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        .finally(() => {
          this.setState({ loading: false, purchasing: false });
        });
    }
  };

  render() {
    const disabledInfo: any = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients!} />
          <BuildControls
            price={this.state.totalPrice}
            purchaseble={this.state.purchasable}
            add={this.addIngredientHandler}
            remove={this.removeIngredientHandler}
            ordered={this.purchasingHandler}
            disabled={disabledInfo}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          totalPrice={this.state.totalPrice}
          cancel={this.closeHandler}
          continue={this.continueHandler}
          ingredients={this.state.ingredients!}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} close={this.closeHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

export default ErrorHandler(BurgerBuilder, axios);
