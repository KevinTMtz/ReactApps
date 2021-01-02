import React, { Component } from 'react';

import Aux from '../../Hoc/Aux/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
  bacon: 0.5,
  salad: 0.5,
  cheese: 0.7,
  meat: 1.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: { bacon: 0, salad: 0, cheese: 0, meat: 0 },
    totalPrice: 3.99,
    unpurchaseable: true,
    purchasing: false,
    loading: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((newSum, element) => newSum + element, 0);
    this.setState({ unpurchaseable: sum === 0 });
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    const newCount = updatedIngredients[type] + 1;
    updatedIngredients[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] === 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    const newCount = updatedIngredients[type] - 1;
    updatedIngredients[type] = newCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice.toFixed(2),
      customer: {
        name: 'Kevin',
        address: { planet: 'Mandalore', zipCode: '12345' },
        email: 'kevin@hamburger.app',
      },
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false, purchasing: false });

        alert('Your order has been taken!');
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });

        alert('Could not take your order!');
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancel={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}
        totalPrice={this.state.totalPrice}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <BuildControls
          price={this.state.totalPrice.toFixed(2)}
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          unpurchaseable={this.state.unpurchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
