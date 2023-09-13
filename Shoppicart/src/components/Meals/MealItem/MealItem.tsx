import { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import { MealData } from '../../../models/MealData';
import MealItemForm from './MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ mealData }: { mealData: MealData }) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount: number) => {
    cartContext.addItem({
      ...mealData,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{mealData.name}</h3>
        <div className={classes.description}>{mealData.description}</div>
        <div className={classes.price}>{`$${mealData.price}`}</div>
      </div>
      <div>
        <MealItemForm id={mealData.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
