import classes from './Input.module.css';

const Input = ({
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
}) => (
  <div className={classes.input}>
    <label htmlFor={input.id}>{label}</label>
    <input {...input} />
  </div>
);

export default Input;
