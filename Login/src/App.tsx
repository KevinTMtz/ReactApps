import { Fragment } from 'react';

import AuthContext from './context/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => (
  <AuthContext.Consumer>
    {(context) => (
      <Fragment>
        <MainHeader />
        <main>
          {!context.isLoggedIn && <Login />}
          {context.isLoggedIn && <Home />}
        </main>
      </Fragment>
    )}
  </AuthContext.Consumer>
);

export default App;
