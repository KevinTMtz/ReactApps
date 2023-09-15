import { useState } from 'react';

export const useFormInput = () => {
  const [value, setValue] = useState('');
  const [validity, setValidity] = useState(false);

  const inputChangeHandler = (event) => {
    setValue(event.target.value);

    if (event.target.value.trim() !== '') {
      setValidity(true);
    } else {
      setValidity(false);
    }
  };

  const clearValueHandler = () => {
    setValue('');
    setValidity(false);
  };

  return {
    value,
    onChange: inputChangeHandler,
    clearValue: clearValueHandler,
    validity,
  };
};

export default useFormInput;
