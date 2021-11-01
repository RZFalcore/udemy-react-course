import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const portalElement = document.getElementById("backdrop-root");

const ModalMarkup = ({ closeModal, children }) => {
  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

const Modal = ({ closeModal, children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalMarkup closeModal={closeModal}>{children}</ModalMarkup>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
