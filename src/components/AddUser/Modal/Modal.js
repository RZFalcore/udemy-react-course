import React from "react";
import "./Modal.css";

const Modal = ({ title, message }) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{title}</h2>
      </header>
      <div className="content">
        <p>{message}</p>
      </div>
      <footer className="actions">
        <button>Close</button>
      </footer>
    </div>
  );
};

export default Modal;
