import React, { useEffect, useState } from 'react';

import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use(
      (req) => {
        setError(null);
        return req;
      },
      (newError) => setError(newError)
    );

    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (newError) => setError(newError)
    );

    useEffect(
      () => () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      },
      [reqInterceptor, resInterceptor]
    );

    const errorConfirmHandler = () => setError(null);

    return (
      <Aux>
        <Modal show={error} modalClosed={errorConfirmHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
