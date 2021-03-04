import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = () => (
  <div>
    <h1>Auth Index Page</h1>
    <p>
      Go to <Link href='/'>Main Page</Link>
    </p>
    <button onClick={() => Router.push('/')}>Go to Main Page</button>
    <User name='KevinTMtz' age='20' />
  </div>
);

export default authIndexPage;
