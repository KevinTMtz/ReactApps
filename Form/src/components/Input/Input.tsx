import { useInputReturn } from '../../models/useInputReturn';

const Input = ({
  type,
  label,
  id,
  inputHook,
  errorMessage,
}: {
  type: string;
  label: string;
  id: string;
  inputHook: useInputReturn;
  errorMessage: string;
}) => (
  <div className={`form-control ${inputHook.hasError && 'invalid'}`}>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      onChange={inputHook.valueChangeHandler}
      onBlur={inputHook.blurHandler}
      value={inputHook.value}
    />
    {inputHook.hasError && <p className='error-text'>{errorMessage}</p>}
  </div>
);

export default Input;
