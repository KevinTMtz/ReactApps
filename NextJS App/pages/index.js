import React, { Component } from 'react';
import Link from 'next/link';

class IndexPage extends Component {
  static async getInitialProps() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ appName: 'Super App' });
      }, 0);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>Main Page - {this.props.appName}</h1>
        <p>
          Go to <Link href='/auth'>Auth</Link>
        </p>
      </div>
    );
  }
}

export default IndexPage;
