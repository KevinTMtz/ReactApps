import { Fragment, useCallback, useEffect, useMemo, useReducer } from 'react';

import List from './List';
import useFormInput from '../Hooks/useForms';
import useHttp from '../Hooks/useHTTP';

const Todo = () => {
  const baseAPIUrl = 'https://angular-http-457b3-default-rtdb.firebaseio.com/';

  const { isLoading, error, sendRequest } = useHttp();

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
    sendRequest({ url: `${baseAPIUrl}/todoListItems.json` }, (result) => {
      const todos = [];
      for (const key in result) {
        todos.push({ id: key, name: result[key].name });
      }
      dispatch({ type: 'SET', payload: todos });
    });
  }, [sendRequest]);

  const todoAddHandler = () => {
    sendRequest(
      {
        url: `${baseAPIUrl}/todoListItems.json`,
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: { name: todoInput.value },
      },
      (response) => {
        dispatch({
          type: 'ADD',
          payload: {
            id: response.name,
            name: todoInput.value,
          },
        });
        todoInput.clearValue();
      },
    );
  };

  const todoRemoveHandler = useCallback(
    (todoID) => {
      sendRequest(
        {
          url: `${baseAPIUrl}/todoListItems/${todoID}.json`,
          method: 'DELETE',
        },
        () => {
          dispatch({ type: 'REMOVE', payload: todoID });
        },
      );
    },
    [sendRequest],
  );

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

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {useMemo(
        () => (
          <List items={todoList} onClick={todoRemoveHandler} />
        ),
        [todoList, todoRemoveHandler],
      )}
    </Fragment>
  );
};

export default Todo;
