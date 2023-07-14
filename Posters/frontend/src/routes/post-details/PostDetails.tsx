import { useLoaderData, Link, Params } from 'react-router-dom';

import Modal from '../../components/Modal';
import { PostData } from '../../models/PostData';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData() as PostData;

  return post ? (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.text}</p>
      </main>
    </Modal>
  ) : (
    <Modal>
      <main className={classes.details}>
        <h1>Could not find post</h1>
        <p>Unfortunately, the requested post could not be found.</p>
        <p>
          <Link to='..' className={classes.btn}>
            Okay
          </Link>
        </p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export const loader = async ({ params }: { params: Params }) => {
  let resData = undefined;

  await fetch(`http://localhost:8080/posts/${params.id}`)
    .then((response) => response.json())
    .then((data) => {
      resData = data.post;
    });

  return resData;
};
