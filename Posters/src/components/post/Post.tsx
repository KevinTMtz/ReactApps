import { PostData } from '../../models/PostData';
import classes from './Post.module.css';

const Post = ({ post }: { post: PostData }) => (
  <ul className={classes.post}>
    <p className={classes.author}>{post.author}</p>
    <p className={classes.text}>{post.text}</p>
  </ul>
);

export default Post;
