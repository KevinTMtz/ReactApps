import AuthContext from '../../context/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <nav className={classes.nav}>
          <ul>
            {context.isLoggedIn && (
              <li>
                <a href='/'>Users</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                <a href='/'>Admin</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                <button onClick={context.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </AuthContext.Consumer>
  );
};

export default Navigation;
