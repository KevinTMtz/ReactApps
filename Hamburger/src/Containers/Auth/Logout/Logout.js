import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../Store/Actions/index';

const Logout = (props) => {
  const onLogout = props.onLogout;
  useEffect(() => onLogout(), [onLogout]);

  return <Redirect to='/' />;
};

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
