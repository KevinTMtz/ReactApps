import { ReactElement } from 'react';
import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children }: { children: ReactElement<any, any> }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.backdrop} onClick={() => navigate('..')}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
