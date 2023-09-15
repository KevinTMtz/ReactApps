import { FormEvent } from 'react';

import useInput from '../hooks/useInput';
import Input from './Input/Input';

const BasicForm = () => {
  const nameInput = useInput((value) => value.trim() !== '');
  const lastNameInput = useInput((value) => value.trim() !== '');
  const emailInput = useInput((value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
  );

  const formValid =
    nameInput.valueIsValid &&
    lastNameInput.valueIsValid &&
    emailInput.valueIsValid;

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !nameInput.valueIsValid &&
      !lastNameInput.valueIsValid &&
      !emailInput.valueIsValid
    )
      return;

    nameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <Input
          type='text'
          label='Name'
          id='name'
          inputHook={nameInput}
          errorMessage="Name can't be empty"
        />
        <Input
          type='text'
          label='Last Name'
          id='last-name'
          inputHook={lastNameInput}
          errorMessage="Last name can't be empty"
        />
        <Input
          type='email'
          label='Email'
          id='email'
          inputHook={emailInput}
          errorMessage='Email not valid'
        />
      </div>
      <div className='form-actions'>
        <button type='submit' disabled={!formValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
