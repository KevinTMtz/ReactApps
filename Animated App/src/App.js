import React, { Component } from 'react';

import './App.css';
import Modal from './Components/Modal/Modal';
import Backdrop from './Components/Backdrop/Backdrop';
import List from './Components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
  };

  showModal = () => this.setState({ modalIsOpen: true });

  closeModal = () => this.setState({ modalIsOpen: false });

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModal}
        />
        <Backdrop
          show={this.state.modalIsOpen}
          closed={this.closeModal}
        />
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
