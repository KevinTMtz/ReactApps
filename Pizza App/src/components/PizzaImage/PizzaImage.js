import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = () => (
  <div className={classes.PizzaImage}>
    <img className={classes.PizzaImg} src={PizzaImage}></img>
  </div>
);

export default pizzaImage;
