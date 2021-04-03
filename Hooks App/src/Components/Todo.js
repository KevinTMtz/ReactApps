import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Todo = () => {
  const [inputState, setInputState] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://hooks-app-131b4-default-rtdb.firebaseio.com/todoListItems.json'
      )
      .then((result) => {
        const todos = [];
        for (const key in result.data) {
          todos.push({ id: key, name: result.data[key].name });
        }
        setTodoList(todos);
      })
      .catch((error) => console.log(error));
  }, []);

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
              setTodoList(
                todoList.concat({
                  id: Math.random(),
                  name: inputState,
                })
              );
              setInputState('');
            })
            .catch((error) => console.log(error));
        }}
        disabled={inputState === ''}
      >
        Add
      </button>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
