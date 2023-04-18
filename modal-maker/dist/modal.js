import React from "react";
function Modal({
  closeModal,
  isOpen = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `modalBox ${isOpen ? 'modalActivate' : 'modalDesactivate'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "txtModal"
  }, "Employee Created ! "), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: closeModal
  }, "X")));
}
export default Modal;