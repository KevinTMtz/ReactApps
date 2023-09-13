import { useContext } from 'react';

import { MealData } from '../../models/MealData';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = ({ onClose }: { onClose: () => void }) => {
  const cartContext = useContext(CartContext);

  const totalAmount = cartContext.totalAmount.toFixed(2);

  const hasItems = cartContext.items.length > 0;

  const cartRemoveItemHandler = (id: string) => {
    cartContext.removeItem(id);
  };

  const cartAddItemHandler = (item: MealData) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={onClose}>
      <h2 className={classes.title}>Cart</h2>
      {!hasItems && <p>Your cart is empty</p>}

      {hasItems && (
        <>
          <ul className={classes['cart-items']}>
            {cartContext.items.map((cartItem) => (
              <CartItem
                key={`Cart-item-${cartItem.id}`}
                mealData={cartItem}
                onRemove={cartRemoveItemHandler.bind(null, cartItem.id)}
                onAdd={cartAddItemHandler.bind(null, cartItem)}
              />
            ))}
          </ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
          </div>
        </>
      )}
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
