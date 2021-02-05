import React, { Component } from 'react';

import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../Components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name',
        },
        value: 'KevinTMtz',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: 'Mandalore street',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Postal Code',
        },
        value: '12345',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: 'Mandalore',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Email',
        },
        value: 'kevintmtz@hamburger.app',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: 'fastest',
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.price,
      orderData: formData,
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

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) =>
              this.inputChangedHandler(event, formElement.id)
            }
          />
        ))}
        <Button buttonType='Success'>Order</Button>
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
