import React from 'react';

import './ListItem.css';

const listItem = (props) => (
  <li className={'ListItem'} onClick={props.clicked}>
    {props.children}
  </li>
);

export default listItem;
