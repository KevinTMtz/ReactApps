import classes from './Backdrop.module.css';

const Backdrop = ({ onClose }: { onClose: () => void }) => (
  <div className={classes.backdrop} onClick={onClose} />
);

export default Backdrop;
