import React from 'react';

const user = (props) => (
  <div>
    <h1>{props.name}</h1>
    <h3>Age: {props.age}</h3>

    <style jsx>{`
      div {
        margin: auto;
        border: 1px solid #ccc;
        width: 50%;
        padding: 16px 32px;
        border-radius: 16px;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default user;
