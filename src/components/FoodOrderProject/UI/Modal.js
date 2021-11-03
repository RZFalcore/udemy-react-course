import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const portalElement = document.getElementById("backdrop-root");

const ModalMarkup = ({ onCloseModal, children }) => {
  return (
    <div className={styles.backdrop} onClick={onCloseModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const Modal = ({ onCloseModal, children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalMarkup onCloseModal={onCloseModal}>{children}</ModalMarkup>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
