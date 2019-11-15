import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { CLOSE_MODAL } from '../store/reducers/modal';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';

const LoginContainer = () => {
  const { openYn } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const el = document.createElement('div');
  document.body.appendChild(el);

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return ReactDOM.createPortal(
    <>
      {openYn && (
        <Modal size="login">
          <LoginForm close={closeModal} />
        </Modal>
      )}
    </>,
    el,
  );
};

export default LoginContainer;
