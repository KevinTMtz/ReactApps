import React, { useState } from 'react';

import Header from './Components/Header';
import Todo from './Components/Todo';
import Auth from './Components/Auth';
import AuthContext from './auth-context';

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
      <AuthContext.Provider
        value={{ status: loggedIn, login: login }}
      >
        <h1>Hooks App</h1>
        <Header
          onLoadTodos={switchPage.bind(this, 'todos')}
          onLoadAuth={switchPage.bind(this, 'auth')}
        />
        <br />
        {currentComponent === 'auth' ? <Auth /> : <Todo />}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
