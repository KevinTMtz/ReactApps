import { ChangeEvent, useState } from 'react';

import { useInputReturn } from '../models/useInputReturn';

const useInput = (
  validateValue: (value: string) => boolean,
): useInputReturn => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChangeHandler,
    blurHandler: blurHandler,
    reset: reset,
  };
};

export default useInput;
