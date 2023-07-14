import Post from './Post';
import { PostData } from '../../models/PostData';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

const PostsList = () => {
  const posts = useLoaderData() as PostData[];

  return (
    <>
      {posts.length > 0 ? (
        <li className={classes.posts}>
          {posts.map((post, index) => (
            <Post post={post} key={`Post-${index}`} />
          ))}
        </li>
      ) : (
        <div className={classes.noPosts}>
          <h3>This is a bit empty</h3>
          <p>Create some posts!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
