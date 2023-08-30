import classes from './Button.module.css';

const Button = ({
  type,
  onClick,
  children,
}: {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children: JSX.Element | string | undefined;
}) => (
  <button className={classes.button} type={type || 'button'} onClick={onClick}>
    {children}
  </button>
);

export default Button;
