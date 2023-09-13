import { FormEvent, useRef, useState } from 'react';

import Input from '../../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({
  id,
  onAddToCart,
}: {
  id: string;
  onAddToCart: (amount: number) => void;
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  const amountInputRef = useRef<HTMLInputElement>();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current?.value || '0';
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 0 ||
      enteredAmountNum > 5
    ) {
      setIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: `amount-${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
      {!isValid && <p>Please enter a valid amount</p>}
    </form>
  );
};
export default MealItemForm;
