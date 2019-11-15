import React from 'react';

const Modal = ({ children, size }) => {
  return (
    <>
      <div className="modal-container">
        <div className={`modal-content modal-${size}`}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
