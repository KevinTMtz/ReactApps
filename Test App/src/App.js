import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';

//Using class components
class App extends Component {
  state = {
    persons: [
      { id: 'kevin20', name: 'Kevin', age: 20 },
      { id: 'mario19', name: 'Mario', age: 19 },
      { id: 'sebas21', name: 'Sebas', age: 21 },
    ],
    otherState: 'Some other value',
    showPersons: false,
  };

  textNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '2px solid black',
      borderRadius: '10px',
      padding: '10px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                changed={(event) => this.textNameHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );

      buttonStyle.backgroundColor = 'red';
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a Web App</h1>
        <p className={assignedClasses.join(' ')}>Aditional text</p>
        {persons}
        <button onClick={this.togglePersonsHandler} style={buttonStyle}>
          Toggle Persons
        </button>
      </div>
    );
  }
}

export default App;

// import React, { useState } from 'react';
// Using functional components
// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       {name: 'Kevin', age: 20},
//       {name: 'Mario', age: 19},
//       {name: 'Sebas', age: 21}
//     ]
//   });

//   const [otherState, setOtherState] = useState ('Other state')

//   const buttonNameHandler = () => {
//     // This overrides state
//     setPersonsState({persons: [
//         {name: 'KevinTMtz', age: 20},
//         {name: 'Mario', age: 19},
//         {name: 'Sebas', age: 21}
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I am a Web App</h1>
//       <Person name={personsState.persons[0].name}
//               age={personsState.persons[0].age}>I love learning!</Person>
//       <Person name={personsState.persons[1].name}
//               age={personsState.persons[1].age}/>
//       <Person name={personsState.persons[2].name}
//               age={personsState.persons[2].age}/>
//       <button onClick={buttonNameHandler}>I'm a button</button>
//     </div>
//   );
// }
