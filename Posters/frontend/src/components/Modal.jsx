import classes from './Modal.module.css';

const Modal = ({ children, setModalVisible }) => (
  <>
    <div
      className={classes.backdrop}
      onClick={() => setModalVisible(false)}
    ></div>
    <dialog open className={classes.modal}>
      {children}
    </dialog>
  </>
);

export default Modal;
