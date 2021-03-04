import React from 'react';
import Link from 'next/link';

const indexPage = () => (
  <div>
    <h1>Something went wrong</h1>
    <p>
      Return to <Link href='/'>Main page</Link>
    </p>
  </div>
);

export default indexPage;
