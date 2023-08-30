import { Fragment } from 'react';

const Wrapper = ({
  children,
}: {
  children: JSX.Element | (JSX.Element | undefined)[];
}) => <Fragment>{children}</Fragment>;

export default Wrapper;
