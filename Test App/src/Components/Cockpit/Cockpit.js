import React from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
  const assignedClasses = [];
  let buttonClass = '';
  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I am a Web App</h1>
      <p className={assignedClasses.join(' ')}>Aditional text</p>
      <button onClick={props.clicked} className={buttonClass}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
