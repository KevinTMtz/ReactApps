import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import classes from './Header.module.css';
import mealsImg from '../../../assets/meals.jpg';

const Header = ({ onShowCart }: { onShowCart: () => void }) => (
  <>
    <header className={classes.header}>
      <h1>ShoppiCart</h1>
      <HeaderCartButton onClick={onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImg} alt='Meals representation' />
    </div>
  </>
);

export default Header;
