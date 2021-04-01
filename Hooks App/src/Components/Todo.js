import React, { useState } from 'react';
import axios from 'axios';

const Todo = () => {
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
          axios
            .post(
              'https://hooks-app-131b4-default-rtdb.firebaseio.com/todoListItems.json',
              { name: inputState }
            )
            .then(() => {
              setTodoList(todoList.concat(inputState));
              setInputState('');
            })
            .catch((error) => alert(error));
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
