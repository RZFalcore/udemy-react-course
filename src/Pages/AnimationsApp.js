import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import Modal from "../components/AnimationsProj/Modal/Modal";
import Backdrop from "../components/AnimationsProj/Backdrop/Backdrop";
import List from "../components/AnimationsProj/List/List";
import "./AnimationsApp.css";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <Transition
          in={this.state.showBlock}
          timeout={500}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("On Enter")}
          onEntering={() => console.log("On Entering")}
          onEntered={() => console.log("On Entered")}
          onExit={() => console.log("On Exit")}
          onExiting={() => console.log("On Exiting")}
          onExited={() => console.log("On Exited")}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "grey",
                color: "white",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "ease-out 1s opacity",
                opacity: state === "exiting" ? 0 : 1,
              }}
            >
              Hello There!
            </div>
          )}
        </Transition>
        <br />

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
