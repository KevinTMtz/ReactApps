import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = ({
  isAuthenticated,
  onLogout,
}: {
  isAuthenticated: boolean;
  onLogout: () => void;
}) => {
  return (
    <header className={classes['main-header']}>
      <h1>Login App</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
