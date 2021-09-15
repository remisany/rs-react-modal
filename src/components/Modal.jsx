import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const opacityContainer = (fadeDelay) => keyframes`
  0% {
    opacity: 0
  }
  ${fadeDelay}% {
    opacity: 1
  }
  100% {
    opacity: 1
  }
`

const CONTAINER = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  animation: ${props => opacityContainer(props.fadeDelay)} ${props => props.fadeDuration}ms both;
  ${(props) => props.customStyle}
`

const CONTENT = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: 200px auto;
  max-width: 500px;
  background: #fff;
  padding: 15px;
  align-items: center;
  border-radius: 5px;
  ${(props) => props.customStyle}
`

const BUTTON = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #FFF;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  ${(props) => props.customStyle}
`

const BUTTONX = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  background: #000;
  color: #FFF;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 300px;
  ${(props) => props.customStyle}
`

function Modal ({buttonContent, close, escape, fadeDelay, fadeDuration, modalContent, open, outside, showClose, styleButton, styleButtonX, styleContainer, styleContent}) {
  if (!open) {
    return null
  }

  useEffect(() => {
    if (open && escape) {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          close()
          window.removeEventListener("keydown", close())
        }
      })
    }
  }, [open])

  const outsideModal = (e) => {
    outside && e.target.id === "container" && close()
  }

  return (
    <CONTAINER
      id = "container"
      onClick = {(e) => outsideModal(e)}
      customStyle = {styleContainer}
      fadeDelay = {fadeDelay}
      fadeDuration = {fadeDuration}
    >
      <CONTENT
        id = "content"
        customStyle = {styleContent}
      >
        {modalContent}
        <BUTTON
          onClick = {close}
          customStyle = {styleButton}
        >
          {buttonContent}
        </BUTTON>
        {showClose && <BUTTONX onClick = {close} customStyle = {styleButtonX}>x</BUTTONX>}
      </CONTENT>
    </CONTAINER>
  )
}

Modal.propTypes = {
  buttonContent: PropTypes.string,
  close: PropTypes.func.isRequired,
  escape: PropTypes.bool,
  modalContent: PropTypes.string,
  open: PropTypes.bool.isRequired,
  outside: PropTypes.bool,
  showClose: PropTypes.bool,
  styleButton: PropTypes.object,
  styleButtonX: PropTypes.object,
  styleContainer: PropTypes.object,
  styleContent: PropTypes.object
}

Modal.defaultProps = {
  buttonContent: "Close",
  escape: true,
  fadeDelay: 5,
  fadeDuration: 1000,
  modalContent: "React modal is open!",
  open: false,
  outside: true,
  showClose: false,
  styleButton: {},
  styleButtonX: {},
  styleContainer: {},
  styleContent: {}
}

export default Modal;