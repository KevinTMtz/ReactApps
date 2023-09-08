import ReactDOM from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const ModalOverlay = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string | string[];
}) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

const Modal = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string | string[];
}) => {
  const portalElement = document.getElementById('overlays') as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
