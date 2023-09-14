import Card from '../UI/Card';
import useCounter from '../../Hooks/useCounter';

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
