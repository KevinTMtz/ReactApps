import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../../components/Modal';

const NewPost = () => (
  <Modal>
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor='text'>Text</label>
        <textarea id='text' name='text' required rows={3} />
      </p>
      <p>
        <label htmlFor='author'>Your name</label>
        <input type='text' id='author' name='author' required />
      </p>
      <p className={classes.actions}>
        <Link to='..' type='button'>
          Cancel
        </Link>
        <button type='submit'>Submit</button>
      </p>
    </Form>
  </Modal>
);

export default NewPost;

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  const newData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
};
