import styles from './Button.module.css';

const Button = (props) => (
  <button type={props.type} className={styles.button} onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;
