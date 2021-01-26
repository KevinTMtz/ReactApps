import React, { Component } from 'react';

import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.price,
      customer: {
        name: 'Kevin',
        address: { planet: 'Mandalore', zipCode: '12345' },
        email: 'kevin@hamburger.app',
      },
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        if (response.statusText === 'OK') {
          alert('Your order has been taken!');
          this.props.history.push('/');
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Name'
        />
        <input
          className={classes.Input}
          type='text'
          name='email'
          placeholder='Email'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Street'
        />
        <input
          className={classes.Input}
          type='text'
          name='postal'
          placeholder='Postal Code'
        />
        <Button buttonType='Success' clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your personal information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
