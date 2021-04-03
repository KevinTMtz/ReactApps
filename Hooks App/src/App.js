import React, { useState } from 'react';

import Header from './Components/Header';
import Todo from './Components/Todo';
import Auth from './Components/Auth';

function App() {
  const [currentComponent, setCurrentComponent] = useState('auth');

  const switchPage = (pageName) => {
    setCurrentComponent(pageName);
  };

  return (
    <div className='App'>
      <h1>Hooks App</h1>
      <Header
        onLoadTodos={switchPage.bind(this, 'todos')}
        onLoadAuth={switchPage.bind(this, 'auth')}
      />
      <br />
      {currentComponent === 'auth' ? <Auth /> : <Todo />}
    </div>
  );
}

export default App;
