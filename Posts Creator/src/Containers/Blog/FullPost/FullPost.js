import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    const postID = this.props.match.params.postID;
    if (
      postID &&
      (!this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== parseInt(postID)))
    ) {
      axios.get('/posts/' + postID).then((response) => {
        this.setState({ loadedPost: response.data });
      });
    }
  }

  deletePostHandler = () => {
    axios
      .delete('/posts/' + this.props.match.params.postID)
      .then((response) => console.log(response));
  };

  render() {
    let post = <h2 style={{ textAlign: 'center' }}>Loading...</h2>;
    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className='Edit'>
            <button
              className='Delete'
              onClick={this.deletePostHandler}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
