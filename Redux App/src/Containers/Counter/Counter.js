import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/Actions/actions';

import CounterControl from '../../Components/CounterControl/CounterControl';
import CounterOutput from '../../Components/CounterOutput/CounterOutput';
import ListItem from '../../Components/ListItem/ListItem';

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
    dispatch(actionCreators.increment(value));
  },
  onDecrementCtr: (value) =>
    dispatch(actionCreators.decrement(value)),
  onStoreResult: (result) =>
    dispatch(actionCreators.storeResult(result)),
  onDeleteResult: (index) =>
    dispatch(actionCreators.deleteResult(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
