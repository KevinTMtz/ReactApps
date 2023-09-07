import {
  ChangeEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

import AuthContext from '../../context/auth-context';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Login.module.css';

const Login = () => {
  const authContext = useContext(AuthContext);

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
    authContext.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label='Email'
          id='email'
          type='email'
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          label='Password'
          id='password'
          type='password'
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

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
