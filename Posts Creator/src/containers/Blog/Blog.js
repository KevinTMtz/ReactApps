import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          posts: response.data.slice(0, 10).map((post) => {
            return { ...post, author: 'KevinTMtz' };
          }),
        });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    const posts = this.state.posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}
      />
    ));

    return (
      <div>
        <section>
          <NewPost />
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section className='Posts'>{posts}</section>
      </div>
    );
  }
}

export default Blog;
