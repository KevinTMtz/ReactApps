import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from '../Modal';
import { PostData } from '../../models/PostData';
import classes from './PostsList.module.css';

const PostsList = ({
  modalVisible,
  hideModal,
}: {
  modalVisible: boolean;
  hideModal: () => void;
}) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const addPost = (post: PostData) => {
    setPosts((currentPosts) => [...currentPosts, post]);
  };

  return (
    <>
      {modalVisible && (
        <Modal setModalVisible={hideModal}>
          <NewPost onCancel={hideModal} addPost={addPost} />
        </Modal>
      )}

      {posts.length > 0 ? (
        <li className={classes.posts}>
          {posts.map((post, index) => (
            <Post post={post} key={`Post-${index}`} />
          ))}
        </li>
      ) : (
        <div className={classes.noPosts}>
          <h3>Create some posts</h3>
        </div>
      )}
    </>
  );
};

export default PostsList;
