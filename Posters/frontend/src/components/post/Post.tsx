import { Link } from 'react-router-dom';
import { PostData } from '../../models/PostData';
import classes from './Post.module.css';

const Post = ({ post }: { post: PostData }) => (
  <Link className={classes.post} to={post.id}>
    <p className={classes.author}>{post.author}</p>
    <p className={classes.text}>{post.text}</p>
  </Link>
);

export default Post;
