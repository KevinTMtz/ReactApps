import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch></Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' exact component={Orders} />
          <Route path='/' exact component={BurgerBuilder} />
        </Layout>
      </div>
    );
  }
}

export default App;
