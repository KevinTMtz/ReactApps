import React, { Component } from 'react';

import classes from './Auth.css';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';

class Auth extends Component {
  state = {
    authForm: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLenght: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = isValid && value.trim() !== '';
    }

    if (rules.minLenght) {
      isValid = isValid && value.length >= rules.minLenght;
    }

    if (rules.maxLength) {
      isValid = isValid && value.length <= rules.maxLength;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedAuthForm = {
      ...this.state.authForm,
      [inputIdentifier]: {
        ...this.state.authForm[inputIdentifier],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.authForm[inputIdentifier].validation
        ),
        touched: true,
      },
    };

    this.setState({ authForm: updatedAuthForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.authForm) {
      formElementsArray.push({
        id: key,
        config: this.state.authForm[key],
      });
    }

    const form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) =>
          this.inputChangedHandler(event, formElement.id)
        }
      />
    ));

    return (
      <div className={classes.Auth}>
        <form>
          {form}
          <Button buttonType='Success'>Submit</Button>
        </form>
      </div>
    );
  }
}

export default Auth;
