import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    {!props.isAuthenticated && (
      <NavigationItem link='/auth' clicked={props.clickedItem}>
        Authentication
      </NavigationItem>
    )}
    <NavigationItem link='/' exact clicked={props.clickedItem}>
      Build it
    </NavigationItem>
    {props.isAuthenticated && (
      <NavigationItem link='/orders' clicked={props.clickedItem}>
        Orders
      </NavigationItem>
    )}
    {props.isAuthenticated && (
      <NavigationItem link='/logout' clicked={props.clickedItem}>
        Log out
      </NavigationItem>
    )}
  </ul>
);

export default navigationItems;
