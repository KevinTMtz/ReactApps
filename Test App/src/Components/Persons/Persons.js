import React, { Component } from 'react';

import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.persons !== this.props.persons ? true : false;
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            changed={(event) => this.props.changed(event, person.id)}
            click={() => this.props.deleted(index)}
            name={person.name}
            age={person.age}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
