import React from 'react';

import Aux from '../../../Hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
      {props.ingredients[igKey]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: ${props.totalPrice}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType={'Danger'} clicked={props.purchaseCancel}>
        Cancel
      </Button>
      <Button buttonType={'Success'} clicked={props.purchaseContinue}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
