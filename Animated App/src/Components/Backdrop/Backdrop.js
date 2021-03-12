import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Backdrop.css';

const backdrop = (props) => (
  <Transition
    in={props.show}
    timeout={400}
    mountOnEnter
    unmountOnExit
  >
    {(state) => {
      const cssClasses = [
        'Backdrop',
        state === 'entering'
          ? 'BackdropOpen'
          : state === 'exiting'
          ? 'BackdropClosed'
          : null,
      ];

      return (
        <div
          className={cssClasses.join(' ')}
          onClick={props.closed}
        ></div>
      );
    }}
  </Transition>
);

export default backdrop;
