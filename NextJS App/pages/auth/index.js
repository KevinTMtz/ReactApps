import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = (props) => (
  <div>
    <h1>Auth Index Page - {props.appName}</h1>
    <p>
      Go to <Link href='/'>Main Page</Link>
    </p>
    <button onClick={() => Router.push('/')}>Go to Main Page</button>
    <User name='KevinTMtz' age='20' />
  </div>
);

authIndexPage.getInitialProps = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ appName: 'Super App' });
    }, 0);
  });
  return promise;
};

export default authIndexPage;
