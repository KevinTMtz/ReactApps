import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/auth' clicked={props.clickedItem}>
      Authentication
    </NavigationItem>
    <NavigationItem link='/' exact clicked={props.clickedItem}>
      Build it
    </NavigationItem>
    <NavigationItem link='/orders' clicked={props.clickedItem}>
      Orders
    </NavigationItem>
  </ul>
);

export default navigationItems;
