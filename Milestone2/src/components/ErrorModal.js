import classes from "./ErrorModal.module.css";
const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <div className={classes.modal}>
        <h2>{title} </h2>
        <p>{message}</p>
        <button className={classes.close} onClick={onConfirm}>
          &times;
        </button>
      </div>
      <div className={classes.overlay}></div>
    </>
  );
};

export default ErrorModal;
