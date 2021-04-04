import React, { useContext } from 'react';

import AuthContext from '../auth-context';

const Auth = () => {
  const auth = useContext(AuthContext);

  return (
    <button onClick={auth.login}>
      {auth.status ? 'Logout' : 'Login'}
    </button>
  );
};

export default Auth;
