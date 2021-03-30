import React, { useState } from 'react';

const Todo = (props) => {
  const [inputState, setInputState] = useState('');

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder='Todo'
        onChange={(event) => setInputState(event.target.value)}
        value={inputState}
      />
      <br />
      <button type='text'>Add</button>
      <ul />
    </React.Fragment>
  );
};

export default Todo;
