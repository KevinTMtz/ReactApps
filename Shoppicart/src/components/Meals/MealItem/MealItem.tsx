import { MealData } from '../../../models/MealData';
import MealItemForm from './MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ mealData }: { mealData: MealData }) => (
  <li className={classes.meal}>
    <div>
      <h3>{mealData.name}</h3>
      <div className={classes.description}>{mealData.description}</div>
      <div className={classes.price}>{`$${mealData.price}`}</div>
    </div>
    <div>
      <MealItemForm id={mealData.id} />
    </div>
  </li>
);

export default MealItem;
