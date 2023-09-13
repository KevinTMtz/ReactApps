import { createContext } from 'react';

import { MealData } from '../models/MealData';
import { CartContextData } from '../models/CartContextData';

const CartContext = createContext<CartContextData>({
  items: [],
  totalAmount: 0,
  addItem: (item: MealData) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
