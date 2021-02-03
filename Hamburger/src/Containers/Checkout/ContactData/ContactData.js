import React, { Component } from 'react';

import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../Components/UI/Input/Input';

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
        <Input type='input' name='name' placeholder='Name' />
        <Input type='input' name='email' placeholder='Email' />
        <Input type='input' name='street' placeholder='Street' />
        <Input type='input' name='postal' placeholder='Postal Code' />
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
