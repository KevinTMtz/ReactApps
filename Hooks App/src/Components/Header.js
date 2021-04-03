import React from 'react';

const Header = (props) => (
  <header>
    <button onClick={props.onLoadAuth}>Auth</button>
    <button onClick={props.onLoadTodos}>Todo List</button>
  </header>
);

export default Header;
