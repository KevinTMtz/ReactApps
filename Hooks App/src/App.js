import { useState } from 'react';

import AuthContext from './auth-context';
import Header from './Components/Header';
import Todo from './Components/Todo';
import Auth from './Components/Auth';
import ForwardCounter from './Components/Counter/ForwardCounter';
import BackwardCounter from './Components/Counter/BackwardCounter';
import Card from './Components/UI/Card';

function App() {
  const [currentComponent, setCurrentComponent] = useState('auth');
  const [loggedIn, setLoggedIn] = useState(false);

  const switchPage = (pageName) => {
    setCurrentComponent(pageName);
  };

  const login = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className='App'>
      <AuthContext.Provider value={{ status: loggedIn, login: login }}>
        <h1>Hooks App</h1>
        <Card>
          <Header
            onLoadTodos={switchPage.bind(this, 'todos')}
            onLoadAuth={switchPage.bind(this, 'auth')}
          />
          <br />
          {currentComponent === 'auth' ? <Auth /> : <Todo />}
        </Card>
      </AuthContext.Provider>

      <div>
        <h1>Counters</h1>
        <ForwardCounter />
        <BackwardCounter />
      </div>
    </div>
  );
}

export default App;
