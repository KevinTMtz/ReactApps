import React, { Component } from 'react';
import classes from './Person.css';

// Also can be used with React.Fragment
import Aux from '../../../Hoc/Aux';
import withClass from '../../../Hoc/WithClass';

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          Hello, I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
