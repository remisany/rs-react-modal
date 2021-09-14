import React from "react";
import PropTypes from "prop-types";

function Modal ({open, modalContent, close, buttonContent, style}) {
  const styleDefault = {
    container: {
      position: "fixed",
      zIdex: "1",
      top: "0",
      left: "0",
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.75)"
    },

    content : {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      rowGap: "20px",
      margin: "200px auto",
      maxWidth: "500px",
      background: "#fff",
      padding: "15px",
      alignItems: "center",
      borderRadius: "5px"
    },

    button : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#000",
      color: "#FFF",
      width: "100px",
      padding: "5px",
      borderRadius: "5px"
    }
  }

  return (
    open ?
    <div style = {style && style.container ? style.container : styleDefault.container}>
      <div style = {style && style.content ? style.content : styleDefault.content}>
        {modalContent}
        <button
          onClick = {close}
          style = {style && style.button ? style.button : styleDefault.button}
        >
          {buttonContent}
        </button>
      </div>
    </div>
  : null
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  modalContent: PropTypes.string,
  buttonContent: PropTypes.string,
  close: PropTypes.func.isRequired,
  style: PropTypes.object
}

Modal.defaultProps = {
  modalContent: "React modal is open !",
  buttonContent: "Close"
}

export default Modal;