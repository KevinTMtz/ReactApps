import React, { useEffect, Suspense } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './Hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Logout from './Containers/Auth/Logout/Logout';
import * as actions from './Store/Actions/index';

const Checkout = React.lazy(() =>
  import('./Containers/Checkout/Checkout')
);
const Orders = React.lazy(() => import('./Containers/Orders/Orders'));
const Auth = React.lazy(() => import('./Containers/Auth/Auth'));

const App = (props) => {
  useEffect(() => props.onTryAutoSignup());

  let routes = (
    <Switch>
      <Route path='/auth' exact render={() => <Auth />} />
      <Route path='/' exact component={BurgerBuilder} />
      <Redirect to='/' />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/checkout' render={() => <Checkout />} />
        <Route path='/orders' exact render={() => <Orders />} />
        <Route path='/auth' exact render={() => <Auth />} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
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
