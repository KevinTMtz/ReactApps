import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../Components/CounterControl/CounterControl';
import CounterOutput from '../../Components/CounterOutput/CounterOutput';
import ListItem from '../../Components/ListItem/ListItem';

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label='Increment'
          clicked={() => this.props.onIncrementCtr(1)}
        />
        <CounterControl
          label='Decrement'
          clicked={() => this.props.onDecrementCtr(1)}
        />
        <CounterControl
          label='Add 5'
          clicked={() => this.props.onIncrementCtr(5)}
        />
        <CounterControl
          label='Subtract 5'
          clicked={() => this.props.onDecrementCtr(5)}
        />
        <hr />
        <CounterControl
          label='Store result'
          clicked={this.props.onStoreResult}
        />
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {this.props.resultsArr.map((result, index) => (
            <ListItem
              key={index}
              clicked={() => this.props.onDeleteResult(index)}
            >
              {result}
            </ListItem>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ctr: state.counter,
  resultsArr: state.results,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCtr: (value) => {
    dispatch({ type: 'INCREMENT', value: value });
  },
  onDecrementCtr: (value) =>
    dispatch({ type: 'DECREMENT', value: value }),
  onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
  onDeleteResult: (index) =>
    dispatch({ type: 'DELETE_RESULT', index: index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
