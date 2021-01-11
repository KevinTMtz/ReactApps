import React, { Component } from 'react';
import axios from '../../../axios';
import { Link, Route } from 'react-router-dom';

import Post from '../../../Components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
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

  render() {
    let posts = <p>Could not load posts!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
        <Link to={'/posts/' + post.id} key={post.id}>
          <Post title={post.title} author={post.author} />
        </Link>
      ));
    }

    return (
      <div>
        <section className='Posts'>{posts}</section>
        <Route
          path={this.props.match.url + '/:postID'}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
