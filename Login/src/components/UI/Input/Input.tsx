import { ChangeEvent } from 'react';

import classes from './Input.module.css';

const Input = ({
  label,
  id,
  type,
  value,
  isValid,
  onChange,
  onBlur,
}: {
  label: string;
  id: string;
  type: string;
  value: string;
  isValid: boolean | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
