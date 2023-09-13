import { MealData } from '../../../models/MealData';
import classes from './CartItem.module.css';

const CartItem = ({
  mealData,
  onRemove,
  onAdd,
}: {
  mealData: MealData;
  onRemove: () => void;
  onAdd: () => void;
}) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{mealData.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`$${mealData.price.toFixed(
            2,
          )}`}</span>
          <span className={classes.amount}>x {mealData.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
