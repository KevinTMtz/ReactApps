import React, { Component } from 'react';

import Aux from '../../Hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = { ingredients: { bacon: 0, salad: 0, cheese: 0, meat: 0 } };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
