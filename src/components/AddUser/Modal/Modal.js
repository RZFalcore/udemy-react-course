import React from "react";
import "./Modal.css";

const Modal = ({ title, message, closeModal }) => {
  return (
    <div className="backdrop" onClick={closeModal}>
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
    </div>
  );
};

export default Modal;
