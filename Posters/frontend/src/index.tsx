import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ActionFunction,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Posters, { loader as postsLoader } from './routes/Posters';
import NewPost, { action as newPostAction } from './routes/new-post/NewPost';
import RootLayout from './routes/RootLayout';
import PostDetails, {
  loader as postDetailsLoader,
} from './routes/post-details/PostDetails';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posters />,
        loader: postsLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: newPostAction as ActionFunction,
          },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
