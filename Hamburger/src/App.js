import React, { useEffect } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from '../src/Hoc/AsyncComponent/AsyncComponent';

import Layout from './Hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Logout from './Containers/Auth/Logout/Logout';
import * as actions from './Store/Actions/index';

const asyncCheckout = asyncComponent(() =>
  import('./Containers/Checkout/Checkout')
);
const asyncOrders = asyncComponent(() =>
  import('./Containers/Orders/Orders')
);
const asyncAuth = asyncComponent(() =>
  import('./Containers/Auth/Auth')
);

const App = (props) => {
  useEffect(() => props.onTryAutoSignup());

  let routes = (
    <Switch>
      <Route path='/auth' exact component={asyncAuth} />
      <Route path='/' exact component={BurgerBuilder} />
      <Redirect to='/' />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/checkout' component={asyncCheckout} />
        <Route path='/orders' exact component={asyncOrders} />
        <Route path='/auth' exact component={asyncAuth} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onTryAutoSignup: () => dispatch(actions.authCheckState()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
