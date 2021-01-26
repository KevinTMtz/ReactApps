import React, { Component } from 'react';

import Order from '../../Components/Order/Order';
import classes from './Orders.css';
import axios from '../../axios-orders';
import WithErrorHandler from '../../Hoc/WithErrorHandler/WithErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });

        console.log(fetchedOrders);
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className={classes.Orders}>
        {this.state.orders.map((order, index) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.totalPrice}
            index={index}
          />
        ))}
      </div>
    );
  }
}

export default WithErrorHandler(Orders, axios);
