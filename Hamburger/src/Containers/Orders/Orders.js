import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Order from '../../Components/Order/Order';
import classes from './Orders.css';
import axios from '../../axios-orders';
import WithErrorHandler from '../../Hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../Store/Actions/index';
import Spinner from '../../Components/UI/Spinner/Spinner';

const Orders = (props) => {
  const onFetchOrder = props.onFetchOrder;
  useEffect(() => {
    onFetchOrder(props.token, props.userId);
  }, [onFetchOrder, props.token, props.userId]);

  let orders = <Spinner />;

  if (!props.loading) {
    <div>
      {
        (orders = props.orders.map((order, index) => (
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
};

const mapStateToProps = (state) => ({
  orders: state.order.orders,
  loading: state.order.loading,
  token: state.auth.token,
  userId: state.auth.userId,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOrder: (token, userId) =>
    dispatch(actions.fetchOrders(token, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Orders, axios));
