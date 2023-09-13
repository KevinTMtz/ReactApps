import { useContext, useEffect, useState } from 'react';

import { MealData } from '../../../models/MealData';
import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }: { onClick: () => void }) => {
  const cartContext = useContext(CartContext);

  const [buttonHighlighted, setButtonHighlighted] = useState(false);

  const numberOfCartItems = cartContext.items.reduce(
    (currentNum: number, item: MealData) => currentNum + (item.amount || 0),
    0,
  );

  const btnClasses = `${classes.button} ${buttonHighlighted && classes.bump}`;

  useEffect(() => {
    setButtonHighlighted(true);

    const timer = setTimeout(() => setButtonHighlighted(false), 300);

    return () => clearTimeout(timer);
  }, [cartContext.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
