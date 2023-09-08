import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';

const Cart = () => {
  const cartItems = [
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
    { id: 'c2', name: 'Hamburguer', amount: 3, price: 5.99 },
  ];

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems.map((cartItem) => (
          <li key={`Cart-item-${cartItem.id}`}>{cartItem.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
