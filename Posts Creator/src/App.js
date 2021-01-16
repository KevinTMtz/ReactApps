import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './Containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/posts-creator'>
        <div className='App'>
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
