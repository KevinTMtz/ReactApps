import { FormEvent } from 'react';

import useInput from '../hooks/useInput';

const SimpleInput = () => {
  const nameInput = useInput((value) => value.trim() !== '');
  const emailInput = useInput((value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
  );

  const formValid = nameInput.valueIsValid && emailInput.valueIsValid;

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!nameInput.valueIsValid && !emailInput.valueIsValid) return;

    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${nameInput.hasError && 'invalid'}`}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInput.valueChangeHandler}
          onBlur={nameInput.blurHandler}
          value={nameInput.value}
        />
        {nameInput.hasError && (
          <p className='error-text'>Name can't be empty</p>
        )}
      </div>
      <div className={`form-control ${emailInput.hasError && 'invalid'}`}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailInput.valueChangeHandler}
          onBlur={emailInput.blurHandler}
          value={emailInput.value}
        />
        {emailInput.hasError && (
          <p className='error-text'>Email is not valid</p>
        )}
      </div>
      <div className='form-actions'>
        <button type='submit' disabled={!formValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
