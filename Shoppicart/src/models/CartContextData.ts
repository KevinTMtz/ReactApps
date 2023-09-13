import { MealData } from './MealData';

export interface CartContextData {
  items: MealData[];
  totalAmount: number;
  addItem: (item: MealData) => void;
  removeItem: (id: string) => void;
}
