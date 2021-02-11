import React from 'react';

import classes from './Order.css';

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 4px',
          border: '2px solid #5c9210',
          padding: '4px',
          borderRadius: '5px',
        }}
        key={ig.name}
      >
        <strong>
          {ig.name} ({ig.amount})
        </strong>
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>
        <strong>Order {props.index + 1}</strong>
      </p>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>${props.price} USD</strong>
      </p>
    </div>
  );
};

export default order;
