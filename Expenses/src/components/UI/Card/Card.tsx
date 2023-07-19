import './Card.css';

const Card = ({
  children,
  className,
}: {
  children: JSX.Element[];
  className: string;
}) => <div className={`card ${className}`}>{children}</div>;

export default Card;
