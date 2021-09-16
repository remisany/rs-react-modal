import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  from {
    opacity: 0
  }
  to {
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
  animation: ${opacity} ${props => props.fadeDuration}ms both;
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
  animation: ${opacity} ${props => props.fadeDuration}ms ${props => props.fadeDelay}ms both;
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

/**
* @param {object} props - Props
* @param {string} buttonContent - To customize the button content
* @param {function} close - Action when closing
* @param {boolean} escape - To close the modal by pressing `ESC`
* @param {number} fadeDelay - Point during the overlay's fade-in that the modal begins to fade in (number between 0 and 1)
* @param {number} fadeDuration - Number of milliseconds the fade transition takes (null means no transition)
* @param {string} modalContent - To customize the modal content
* @param {boolean} open - To open the modal
* @param {boolean} outside - To close the modal by clicking the overlay
* @param {boolean} showClose - To activate button x
* @param {object} styleButton - To customize button style
* @param {object} styleButtonX - To customize button x style
* @param {object} styleContainer - To customize overlay style
* @param {object} styleContent - To customize modal content style
* @returns {component} - Modal
*/

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
      fadeDuration = {fadeDuration}
    >
      <CONTENT
        id = "content"
        fadeDuration = {fadeDuration-fadeDuration*fadeDelay}
        fadeDelay = {fadeDelay*fadeDuration}
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
  fadeDelay: PropTypes.number,
  fadeDuration: PropTypes.number,
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
  fadeDelay: null,
  fadeDuration: null,
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