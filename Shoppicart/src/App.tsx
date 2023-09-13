import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const App = () => {
  const [cartShown, setCarShown] = useState<boolean>(false);

  const showCartHandler = () => {
    setCarShown(true);
  };

  const hideCartHandler = () => {
    setCarShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
