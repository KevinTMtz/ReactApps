import ReactDOM from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const ModalOverlay = ({
  children,
}: {
  children: JSX.Element | string | boolean | (JSX.Element | string | boolean)[];
}) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

const Modal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: JSX.Element | string | boolean | (JSX.Element | string | boolean)[];
}) => {
  const portalElement = document.getElementById('overlays') as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
