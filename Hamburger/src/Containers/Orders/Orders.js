import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../Components/Order/Order';
import classes from './Orders.css';
import axios from '../../axios-orders';
import WithErrorHandler from '../../Hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../Store/Actions/index';
import Spinner from '../../Components/UI/Spinner/Spinner';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrder(this.props.token);
  }

  render() {
    let orders = (
      <div>
        <Spinner />
      </div>
    );

    if (!this.props.loading) {
      <div>
        {
          (orders = this.props.orders.map((order, index) => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.totalPrice}
              index={index}
            />
          )))
        }
      </div>;
    }

    return <div className={classes.Orders}>{orders}</div>;
  }
}

const mapStateToProps = (state) => ({
  orders: state.order.orders,
  loading: state.order.loading,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOrder: (token) => dispatch(actions.fetchOrders(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Orders, axios));
