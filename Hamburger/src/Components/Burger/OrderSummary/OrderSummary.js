import React, { Component } from 'react';

import Aux from '../../../Hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey, index) => (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
          : {this.props.ingredients[igKey]}
        </li>
      )
    );

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: ${this.props.totalPrice}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button
          buttonType={'Danger'}
          clicked={this.props.purchaseCancel}
        >
          Cancel
        </Button>
        <Button
          buttonType={'Success'}
          clicked={this.props.purchaseContinue}
        >
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
