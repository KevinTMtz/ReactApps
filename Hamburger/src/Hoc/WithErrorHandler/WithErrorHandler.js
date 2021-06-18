import React from 'react';

import useHttpErrorHandler from '../../Hooks/HttpErrorHandler';
import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => (props) => {
  const [error, clearError] = useHttpErrorHandler(axios);

  return (
    <Aux>
      <Modal show={error} modalClosed={clearError}>
        {error ? error.message : null}
      </Modal>
      <WrappedComponent {...props} />
    </Aux>
  );
};

export default withErrorHandler;
