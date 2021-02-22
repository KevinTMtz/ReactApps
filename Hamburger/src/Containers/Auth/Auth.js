import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './Auth.css';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';
import * as actions from '../../Store/Actions/index';
import { updateObject, checkValidity } from '../../Shared/utility';

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
    isSignUp: true,
  };

  componentDidMount() {
    if (
      !this.props.buildingBurger &&
      this.props.authRedirectPath !== '/'
    ) {
      this.props.onSetAuthRedirectPath();
    }
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedAuthForm = updateObject(this.state.authForm, {
      [inputIdentifier]: updateObject(
        this.state.authForm[inputIdentifier],
        {
          value: event.target.value,
          valid: checkValidity(
            event.target.value,
            this.state.authForm[inputIdentifier].validation
          ),
          touched: true,
        }
      ),
    });

    this.setState({ authForm: updatedAuthForm });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.authForm.email.value,
      this.state.authForm.password.value,
      this.state.isSignUp
    );
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => ({
      isSignUp: !prevState.isSignUp,
    }));
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.authForm) {
      formElementsArray.push({
        id: key,
        config: this.state.authForm[key],
      });
    }

    let form = formElementsArray.map((formElement) => (
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

    if (this.props.loading) {
      form = <Spinner />;
    } else if (this.props.isAuthenticated) {
      form = <Redirect to={this.props.authRedirectPath} />;
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    return (
      <div className={classes.Auth}>
        <h2 className={classes.Title}>
          {this.state.isSignUp ? 'Sign up' : 'Log in'}
        </h2>
        {errorMessage}
        <form onSubmit={this.onSubmitHandler}>
          {form}
          <Button buttonType='Success'>Submit</Button>
        </form>
        <Button
          buttonType='Danger'
          clicked={this.switchAuthModeHandler}
        >
          Switch to {this.state.isSignUp ? 'Log in' : 'Sign up'}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuthenticated: state.auth.token !== null,
  buildingBurger: state.burgerBuilder.building,
  authRedirectPath: state.auth.authRedirectPath,
});

const mapDispatchToProps = (dispatch) => ({
  onAuth: (email, password, isSignUp) =>
    dispatch(actions.auth(email, password, isSignUp)),
  onSetAuthRedirectPath: () =>
    dispatch(actions.setAuthRedirectPath('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);