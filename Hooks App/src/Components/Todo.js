import React, { useState } from 'react';

const Todo = (props) => {
  const [inputState, setInputState] = useState('');
  const [todoList, setTodoList] = useState(['Code all day!']);

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder='Todo'
        onChange={(event) => setInputState(event.target.value)}
        value={inputState}
      />
      <br />
      <button
        type='text'
        onClick={() => {
          setTodoList(todoList.concat(inputState));
          setInputState('');
        }}
        disabled={inputState === ''}
      >
        Add
      </button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
