import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 400,
};

const modal = (props) => (
  <CSSTransition
    in={props.show}
    timeout={animationTiming}
    mountOnEnter
    unmountOnExit
    classNames='modal'
  >
    <div className='Modal'>
      <h1>Modal</h1>
      <button className='Button' onClick={props.closed}>
        Dismiss
      </button>
    </div>
  </CSSTransition>
);

export default modal;
