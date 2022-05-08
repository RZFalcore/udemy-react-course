import React from "react";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

import "./Modal.css";

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
