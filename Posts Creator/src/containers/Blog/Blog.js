import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div>
        <section>
          <NewPost />
        </section>
        <section>
          <FullPost />
        </section>
        <section className='Posts'>
          <Post />
          <Post />
          <Post />
        </section>
      </div>
    );
  }
}

export default Blog;
