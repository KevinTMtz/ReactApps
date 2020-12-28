import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../Hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show
              ? 'translateY(0)'
              : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
            height: this.props.show ? 'auto' : '0px',
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
