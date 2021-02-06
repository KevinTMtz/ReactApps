import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../Components/CounterControl/CounterControl';
import CounterOutput from '../../Components/CounterOutput/CounterOutput';
import ListItem from '../../Components/ListItem/ListItem';
import * as actionTypes from '../../Store/actions';

class Counter extends Component {
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
          clicked={() => this.props.onStoreResult(this.props.ctr)}
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
  ctr: state.ctr.counter,
  resultsArr: state.res.results,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCtr: (value) => {
    dispatch({ type: actionTypes.INCREMENT, value: value });
  },
  onDecrementCtr: (value) =>
    dispatch({ type: actionTypes.DECREMENT, value: value }),
  onStoreResult: (result) =>
    dispatch({
      type: actionTypes.STORE_RESULT,
      result: result,
    }),
  onDeleteResult: (index) =>
    dispatch({ type: actionTypes.DELETE_RESULT, index: index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
