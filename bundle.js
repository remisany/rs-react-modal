'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const opacity = styled.keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;
const CONTAINER = styled__default['default'].div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  animation: ${opacity} ${props => props.fadeDuration}ms both;
  ${props => props.customStyle}
`;
const CONTENT = styled__default['default'].div`
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
  ${props => props.customStyle}
`;
const BUTTON = styled__default['default'].button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #FFF;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  ${props => props.customStyle}
`;
const BUTTONX = styled__default['default'].button`
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
  ${props => props.customStyle}
`;
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

function Modal({
  buttonContent,
  close,
  escape,
  fadeDelay,
  fadeDuration,
  modalContent,
  open,
  outside,
  showClose,
  styleButton,
  styleButtonX,
  styleContainer,
  styleContent
}) {
  if (!open) {
    return null;
  }

  React.useEffect(() => {
    if (open && escape) {
      window.addEventListener("keydown", e => {
        if (e.key === "Escape") {
          close();
          window.removeEventListener("keydown", close());
        }
      });
    }
  }, [open]);

  const outsideModal = e => {
    outside && e.target.id === "container" && close();
  };

  return /*#__PURE__*/React__default['default'].createElement(CONTAINER, {
    id: "container",
    onClick: e => outsideModal(e),
    customStyle: styleContainer,
    fadeDuration: fadeDuration
  }, /*#__PURE__*/React__default['default'].createElement(CONTENT, {
    id: "content",
    fadeDuration: fadeDuration - fadeDuration * fadeDelay,
    fadeDelay: fadeDelay * fadeDuration,
    customStyle: styleContent
  }, modalContent, /*#__PURE__*/React__default['default'].createElement(BUTTON, {
    onClick: close,
    customStyle: styleButton
  }, buttonContent), showClose && /*#__PURE__*/React__default['default'].createElement(BUTTONX, {
    onClick: close,
    customStyle: styleButtonX
  }, "x")));
}

Modal.propTypes = {
  buttonContent: PropTypes__default['default'].string,
  close: PropTypes__default['default'].func.isRequired,
  escape: PropTypes__default['default'].bool,
  fadeDelay: PropTypes__default['default'].number,
  fadeDuration: PropTypes__default['default'].number,
  modalContent: PropTypes__default['default'].string,
  open: PropTypes__default['default'].bool.isRequired,
  outside: PropTypes__default['default'].bool,
  showClose: PropTypes__default['default'].bool,
  styleButton: PropTypes__default['default'].object,
  styleButtonX: PropTypes__default['default'].object,
  styleContainer: PropTypes__default['default'].object,
  styleContent: PropTypes__default['default'].object
};
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
};

exports.Modal = Modal;
