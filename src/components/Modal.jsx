import React from 'react';
import { Icon } from 'antd';

const Modal = ({ children, size, close }) => {
  return (
    <>
      <div className="modal-container">
        <div className={`modal-content modal-${size}`}>
          <div className="login-header">
            <div className="main-logo">개같하</div>
            <div className="close-box">
              <Icon onClick={close} type="close" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
