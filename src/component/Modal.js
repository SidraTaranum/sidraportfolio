import React from "react";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <div>
      <div className="parentOverlay">
        <div className= "modalBox">
          <i onClick={onClose}  class="far fa-times-circle closebtn"></i>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
