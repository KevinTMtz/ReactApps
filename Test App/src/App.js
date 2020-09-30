import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hi, my name is Kevin
        </h1>
        <p>
          This is really working
        </p>
        <Person />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>
//         Hi, my name is Kevin
//       </h1>
//     </div>
//   );
// }

export default App;
