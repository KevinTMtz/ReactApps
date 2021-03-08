import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './Components/Modal/Modal';
import Backdrop from './Components/Backdrop/Backdrop';
import List from './Components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => this.setState({ modalIsOpen: true });

  closeModal = () => this.setState({ modalIsOpen: false });

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>

        <button
          className='Button'
          onClick={() =>
            this.setState((prevState) => ({
              showBlock: !prevState.showBlock,
            }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: 'purple',
                width: '50%',
                height: '300px',
                margin: 'auto',
                opacity: state === 'exiting' ? 0 : 1,
                transition: 'all 0.3s ease-out',
              }}
            />
          )}
        </Transition>

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
