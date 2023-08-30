import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = ({ onConfirm }: { onConfirm: () => void }) => (
  <div className={classes.backdrop} onClick={onConfirm} />
);

const ModalOverlay = ({
  onConfirm,
  title,
  message,
}: {
  onConfirm: () => void;
  title: string;
  message: string;
}) => (
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{title}</h2>
    </header>
    <div className={classes.content}>
      <p>{message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={onConfirm}>Okay</Button>
    </footer>
  </Card>
);

const ErrorModal = ({
  onConfirm,
  title,
  message,
}: {
  onConfirm: () => void;
  title: string;
  message: string;
}) => (
  <Fragment>
    {ReactDOM.createPortal(
      <Backdrop onConfirm={onConfirm} />,
      document.getElementById('backdrop-root') as HTMLElement,
    )}
    {ReactDOM.createPortal(
      <ModalOverlay onConfirm={onConfirm} title={title} message={message} />,
      document.getElementById('modal-root') as HTMLElement,
    )}
  </Fragment>
);

export default ErrorModal;
