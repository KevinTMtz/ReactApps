import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

//Using class components
class App extends Component {
  state = {
    persons: [
      { name: 'Kevin', age: 20 },
      { name: 'Mario', age: 19 },
      { name: 'Sebas', age: 21 },
    ],
    otherState: 'Some other value',
    showPersons: false,
  };

  buttonNameHandler = (newName) => {
    console.log('Clicked');
    // This merges with state
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Mario', age: 19 },
        { name: 'Sebas', age: 21 },
      ],
    });
  };

  textNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Kevin', age: 20 },
        { name: 'Mario', age: 19 },
        { name: event.target.value, age: 21 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'black',
      font: 'inherit',
      color: 'white',
      border: '1px solid black',
      borderRadius: '10px',
      padding: '10px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I am a Web App</h1>
        {persons}
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
      </div>
    );
  }
}

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

export default App;
