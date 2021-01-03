import React, { Component } from 'react';
import axios from '../../../axios';

import Post from '../../../Components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get('/posts/')
      .then((response) => {
        this.setState({
          posts: response.data.slice(0, 9).map((post) => {
            return { ...post, author: 'KevinTMtz' };
          }),
        });
      })
      .catch((error) => this.setState({ error: true }));
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p>Could not load posts!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      ));
    }

    return <section className='Posts'>{posts}</section>;
  }
}

export default Posts;
