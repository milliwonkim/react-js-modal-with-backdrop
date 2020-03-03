import React, { Component } from "react";
import "./App.css";
import Modal from "./UI/Modal/Modal";

class App extends Component {
  state = {
    modalToggle: false
  };

  modalHandler = e => {
    e.preventDefault();
    this.setState({
      modalToggle: !this.state.modalToggle
    });
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.modalHandler}>
          Open
        </button>
        <Modal show={this.state.modalToggle} modalClosed={this.modalHandler}>
          <div style={{ color: "black" }}>Modal Open With Backdrop</div>
        </Modal>
      </div>
    );
  }
}

export default App;
