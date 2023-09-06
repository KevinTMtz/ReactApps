import { ChangeEvent, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Login.module.css';

const Login = ({
  onLogin,
}: {
  onLogin: (enteredEmail: string, enteredPassword: string) => void;
}) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    (
      state: { value: string; isValid: boolean | undefined },
      action: { type: string; newVal?: string },
    ): { value: string; isValid: boolean | undefined } => {
      if (action.type === 'USER_INPUT' && action.newVal) {
        return { value: action.newVal, isValid: action.newVal.includes('@') };
      } else if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
      }

      return { value: '', isValid: false };
    },
    {
      value: '',
      isValid: undefined,
    },
  );

  const [passwordState, dispatchPassword] = useReducer(
    (
      state: { value: string; isValid: boolean | undefined },
      action: { type: string; newVal?: string },
    ): { value: string; isValid: boolean | undefined } => {
      if (action.type === 'USER_INPUT' && action.newVal) {
        return {
          value: action.newVal,
          isValid: action.newVal.trim().length > 6,
        };
      } else if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
      }

      return { value: '', isValid: false };
    },
    {
      value: '',
      isValid: undefined,
    },
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(!!emailState.isValid && !!passwordState.isValid);
    }, 250);

    return () => clearTimeout(timer);
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: 'USER_INPUT', newVal: event.target.value });
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: 'USER_INPUT', newVal: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
