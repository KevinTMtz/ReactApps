import React from 'react';

import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const Persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <ErrorBoundary key={person.id}>
        <Person
          changed={(event) => props.changed(event, person.id)}
          click={() => props.deleted(index)}
          name={person.name}
          age={person.age}
        />
      </ErrorBoundary>
    );
  });

export default Persons;
