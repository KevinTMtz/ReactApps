import React, {
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import axios from 'axios';

import List from './List';

const Todo = () => {
  const [inputState, setInputState] = useState('');

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payload);
      case 'SET':
        return action.payload;
      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };
  const [todoList, dispatch] = useReducer(todoListReducer, []);

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
        dispatch({ type: 'SET', payload: todos });
      })
      .catch((error) => console.log(error));
  }, []);

  const todoAddHandler = () => {
    axios
      .post(
        'https://hooks-app-131b4-default-rtdb.firebaseio.com/todoListItems.json',
        { name: inputState }
      )
      .then((response) => {
        dispatch({
          type: 'ADD',
          payload: {
            id: response.data.name,
            name: inputState,
          },
        });
        setInputState('');
      })
      .catch((error) => console.log(error));
  };

  const todoRemoveHandler = (todoID) => {
    axios
      .delete(
        `https://hooks-app-131b4-default-rtdb.firebaseio.com/todoListItems/${todoID}.json`
      )
      .then(() => {
        dispatch({ type: 'REMOVE', payload: todoID });
      })
      .catch((error) => console.log(error));
  };

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
        onClick={todoAddHandler}
        disabled={inputState === ''}
      >
        Add
      </button>

      {useMemo(
        () => (
          <List items={todoList} onClick={todoRemoveHandler} />
        ),
        [todoList]
      )}
    </React.Fragment>
  );
};

export default Todo;
