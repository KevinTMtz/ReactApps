import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../Hoc/Aux/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import WithErrorHandler from '../../Hoc/WithErrorHandler/WithErrorHandler';
import axios from '../../axios-orders';
import * as burgerBuilderActions from '../../Store/Actions/index';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get(
    //     'https://hamburger-app-d3a32-default-rtdb.firebaseio.com/ingredients.json'
    //   )
    //   .then((response) => {
    //     this.setState({
    //       ingredients: {
    //         bacon: response.data.bacon,
    //         salad: response.data.salad,
    //         cheese: response.data.cheese,
    //         meat: response.data.meat,
    //       },
    //     });
    //   })
    //   .catch((error) => this.setState({ error: true }));
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((newSum, element) => newSum + element, 0);
    return sum === 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    if (this.props.ingredients) {
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          totalPrice={this.props.totalPrice}
        />
      );
    } else if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    let burger = this.state.error ? (
      <p style={{ textAlign: 'center' }}>
        Could not load ingredients!
      </p>
    ) : (
      <Spinner />
    );
    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            price={this.props.totalPrice}
            ingredientRemoved={this.props.onIngredientRemoved}
            ingredientAdded={this.props.onIngredientAdded}
            disabled={disabledInfo}
            unpurchaseable={this.updatePurchaseState(
              this.props.ingredients
            )}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
    }

    return (
      <Aux>
        {burger}
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingredientKey) =>
      dispatch(burgerBuilderActions.addIngredient(ingredientKey)),
    onIngredientRemoved: (ingredientKey) =>
      dispatch(burgerBuilderActions.removeIngredient(ingredientKey)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
