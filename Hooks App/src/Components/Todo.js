import { Fragment, useEffect, useMemo, useReducer } from 'react';
import axios from 'axios';

import List from './List';
import { useFormInput } from '../Hooks/Forms';

const Todo = () => {
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
  const todoInput = useFormInput();

  useEffect(() => {
    axios
      .get(
        'https://hooks-app-131b4-default-rtdb.firebaseio.com/todoListItems.json',
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
        { name: todoInput.value },
      )
      .then((response) => {
        dispatch({
          type: 'ADD',
          payload: {
            id: response.data.name,
            name: todoInput.value,
          },
        });
        todoInput.clearValue();
      })
      .catch((error) => console.log(error));
  };

  const todoRemoveHandler = (todoID) => {
    axios
      .delete(
        `https://hooks-app-131b4-default-rtdb.firebaseio.com/todoListItems/${todoID}.json`,
      )
      .then(() => {
        dispatch({ type: 'REMOVE', payload: todoID });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <input
        type='text'
        placeholder='Todo'
        onChange={todoInput.onChange}
        value={todoInput.value}
      />

      <br />

      <button
        type='text'
        onClick={todoAddHandler}
        disabled={todoInput.value === ''}
      >
        Add
      </button>

      {useMemo(
        () => (
          <List items={todoList} onClick={todoRemoveHandler} />
        ),
        [todoList],
      )}
    </Fragment>
  );
};

export default Todo;
