import React from 'react';

import classes from './Logo.css';
import imageLogo from '../../Assets/Images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={imageLogo} alt={'Hamburger App'} />
  </div>
);

export default logo;
