import classes from './Card.module.css';

const Card = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string | string[];
}) => <div className={classes.card}>{children}</div>;

export default Card;
