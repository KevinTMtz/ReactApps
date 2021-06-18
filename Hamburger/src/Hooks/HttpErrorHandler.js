import { useState, useEffect } from 'react';

const HttpClient = (axios) => {
  const [error, setError] = useState(null);

  const reqInterceptor = axios.interceptors.request.use(
    (req) => {
      setError(null);
      return req;
    },
    (newError) => setError(newError),
  );

  const resInterceptor = axios.interceptors.response.use(
    (res) => res,
    (newError) => {
      setError(newError);
      return Promise.reject(newError);
    },
  );

  useEffect(
    () => () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    },
    [
      reqInterceptor,
      resInterceptor,
      axios.interceptors.request,
      axios.interceptors.response,
    ],
  );

  const errorConfirmHandler = () => setError(null);

  return [error, errorConfirmHandler];
};

export default HttpClient;
