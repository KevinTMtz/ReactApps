import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

import asyncComponent from '../../Hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() =>
  import('./NewPost/NewPost')
);

// Another way to lazy routing
// const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
  state = {
    auth: true,
  };

  render() {
    return (
      <div className={'Blog'}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/posts'>Posts</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new_post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path='/new_post' component={AsyncNewPost} />
          ) : null}
          <Route path='/posts' component={Posts} />
          <Redirect from='/' to='/posts' />
        </Switch>
      </div>
    );
  }
}

export default Blog;
