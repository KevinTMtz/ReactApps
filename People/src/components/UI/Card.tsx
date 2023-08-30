import classes from './Card.module.css';

const Card = ({
  className,
  children,
}: {
  className: string;
  children: JSX.Element | (JSX.Element | undefined)[];
}) => <div className={`${classes.card} ${className}`}>{children}</div>;

export default Card;
