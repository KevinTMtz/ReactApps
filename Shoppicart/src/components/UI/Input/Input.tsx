import { ForwardedRef, forwardRef } from 'react';

import classes from './Input.module.css';

const Input = forwardRef(
  (
    {
      label,
      input,
    }: {
      label: string;
      input: {
        id: string;
        type: string;
        min: string;
        max: string;
        step: string;
        defaultValue: string;
      };
    },
    ref: ForwardedRef<any>,
  ) => (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  ),
);

export default Input;
