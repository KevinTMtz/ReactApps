import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../Hoc/Aux';
import withClass from '../Hoc/WithClass';

class App extends Component {
  state = {
    persons: [
      { id: 'kevin20', name: 'Kevin', age: 20 },
      { id: 'mario19', name: 'Mario', age: 19 },
      { id: 'sebas21', name: 'Sebas', age: 21 },
    ],
    changeCounter: 0,
    otherState: 'Some other value',
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  textNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          deleted={this.deletePersonHandler}
          changed={this.textNameHandler}
        />
      );
    }

    return (
      <Aux>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
