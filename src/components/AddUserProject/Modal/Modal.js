import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const BackDrop = ({ closeModal }) => {
  return <div className="backdrop" onClick={closeModal} />;
};

const ModalOverlay = ({ title, message, closeModal }) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{title}</h2>
      </header>
      <div className="content">
        <p>{message}</p>
      </div>
      <footer className="actions">
        <button onClick={closeModal}>Close</button>
      </footer>
    </div>
  );
};

const Modal = ({ title, message, closeModal }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop closeModal={closeModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          closeModal={closeModal}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
