import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleClose);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleClose);
  }
  handleClose = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    console.log(this.props.largeImg);
    return createPortal(
      this.props.open ? (
        <div className="Overlay" onClick={this.handleClose}>
          <div className="Modal">
            <img src={this.props.largeImg} alt="" />
          </div>
        </div>
      ) : null,
      modalRoot
    );
  }
}

export default Modal;
