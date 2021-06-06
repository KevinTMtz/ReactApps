import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../../Hoc/Aux/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import WithErrorHandler from '../../Hoc/WithErrorHandler/WithErrorHandler';
import axios from '../../axios-orders';
import * as actions from '../../Store/Actions/index';

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const onInitIngredients = props.onInitIngredients;
  useEffect(() => onInitIngredients(), [onInitIngredients]);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((newSum, element) => newSum + element, 0);
    return sum === 0;
  };

  const purchaseHandler = () => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    props.onInitPurchase();
    props.history.push('/checkout');
  };

  const disabledInfo = {
    ...props.ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;
  if (props.ingredients) {
    orderSummary = (
      <OrderSummary
        ingredients={props.ingredients}
        purchaseCancel={purchaseCancelHandler}
        purchaseContinue={purchaseContinueHandler}
        totalPrice={props.totalPrice}
      />
    );
  }

  let burger = props.error ? (
    <p style={{ textAlign: 'center' }}>Could not load ingredients!</p>
  ) : (
    <Spinner />
  );
  if (props.ingredients) {
    burger = (
      <Aux>
        <Burger ingredients={props.ingredients} />
        <BuildControls
          price={props.totalPrice}
          ingredientRemoved={props.onIngredientRemoved}
          ingredientAdded={props.onIngredientAdded}
          disabled={disabledInfo}
          unpurchaseable={updatePurchaseState(props.ingredients)}
          ordered={purchaseHandler}
          isAuth={props.isAuthenticated}
        />
      </Aux>
    );
  }

  return (
    <Aux>
      {burger}
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
    </Aux>
  );
};

const mapStateToProps = (state) => ({
  ingredients: state.burgerBuilder.ingredients,
  totalPrice: state.burgerBuilder.totalPrice,
  error: state.burgerBuilder.error,
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onIngredientAdded: (ingredientKey) =>
    dispatch(actions.addIngredient(ingredientKey)),
  onIngredientRemoved: (ingredientKey) =>
    dispatch(actions.removeIngredient(ingredientKey)),
  onInitIngredients: () => dispatch(actions.initIngredients()),
  onInitPurchase: () => dispatch(actions.purchaseInit()),
  onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithErrorHandler(BurgerBuilder, axios));
