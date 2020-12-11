import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../Context/Auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  const assignedClasses = [];
  let buttonClass = '';
  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.Red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>Aditional text</p>
      <button
        ref={toggleBtnRef}
        onClick={props.clicked}
        className={buttonClass}
      >
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
