import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

const App = () => (
  <div className='App'>
    <Cart />
    <Header />
    <main>
      <Meals />
    </main>
  </div>
);

export default App;
