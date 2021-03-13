import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Backdrop.css';

const backdrop = (props) => (
  <CSSTransition
    in={props.show}
    timeout={400}
    mountOnEnter
    unmountOnExit
    classNames='backdrop'
  >
    <div className='Backdrop' onClick={props.closed}></div>
  </CSSTransition>
);

export default backdrop;
