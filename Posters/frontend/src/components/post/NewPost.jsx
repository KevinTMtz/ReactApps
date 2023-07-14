import { useState } from 'react';

import classes from './NewPost.module.css';

const NewPost = ({ onCancel, addPost }) => {
  const [newPost, setNewPost] = useState({ author: '', text: '' });

  return (
    <form
      className={classes.form}
      onSubmit={(event) => {
        event.preventDefault();

        addPost(newPost);

        onCancel();
      }}
    >
      <p>
        <label htmlFor='body'>Text</label>
        <textarea
          id='body'
          required
          rows={3}
          onChange={(event) =>
            setNewPost({ ...newPost, text: event.target.value })
          }
        />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input
          type='text'
          id='name'
          required
          onChange={(event) =>
            setNewPost({ ...newPost, author: event.target.value })
          }
        />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
