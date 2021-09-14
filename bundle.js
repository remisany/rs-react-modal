'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Modal({
  open,
  modalContent,
  close,
  buttonContent,
  style
}) {
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
    content: {
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
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#000",
      color: "#FFF",
      width: "100px",
      padding: "5px",
      borderRadius: "5px"
    }
  };
  return open ? /*#__PURE__*/React__default['default'].createElement("div", {
    style: style && style.container ? style.container : styleDefault.container
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: style && style.content ? style.content : styleDefault.content
  }, modalContent, /*#__PURE__*/React__default['default'].createElement("button", {
    onClick: close,
    style: style && style.button ? style.button : styleDefault.button
  }, buttonContent))) : null;
}

Modal.propTypes = {
  open: PropTypes__default['default'].bool,
  modalContent: PropTypes__default['default'].string,
  buttonContent: PropTypes__default['default'].string,
  close: PropTypes__default['default'].func.isRequired,
  style: PropTypes__default['default'].object
};
Modal.defaultProps = {
  modalContent: "React modal is open !",
  buttonContent: "Close"
};

exports.Modal = Modal;
