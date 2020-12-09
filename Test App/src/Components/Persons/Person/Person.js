import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Also can be used with React.Fragment
import Aux from '../../../Hoc/Aux';
import withClass from '../../../Hoc/WithClass';
import classes from './Person.css';
import AuthContext from '../../../Context/Auth-context';

class Person extends Component {
  constructor() {
    super();
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) => (
            <p>{context.authenticated ? 'Authenticated!' : 'Please log in'}</p>
          )}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          Hello, I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
