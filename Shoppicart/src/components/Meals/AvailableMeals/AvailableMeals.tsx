import { MealData } from '../../../models/MealData';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const dummyMeals: MealData[] = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {dummyMeals.map((meal) => (
            <MealItem key={`Meal-${meal.id}`} mealData={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
