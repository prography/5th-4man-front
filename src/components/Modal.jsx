import React from 'react';
import { Icon } from 'antd';

const Modal = ({ children, size, close }) => {
  return (
    <>
      <div className="modal-container">
        <div className={`modal-content modal-${size}`}>
          <div className="login-header">
            <div className="main-logo">
              {' '}
              <span className="point text-bold">개</span>발은{' '}
              <span className="point text-bold">같</span>이{' '}
              <span className="point text-bold">하</span>자
            </div>
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
