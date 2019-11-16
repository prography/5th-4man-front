import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
import { CLOSE_MODAL } from '../store/reducers/modal';
import Login from '../components/Login';

const ModalType = {
  login: Login,
};
const ModalContainer = () => {
  const { openYn, type } = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const CurrentModal = ModalType[type];
  const el = document.createElement('div');
  document.body.appendChild(el);

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return ReactDOM.createPortal(
    <>
      {openYn && (
        <Modal size={type} close={closeModal}>
          <CurrentModal />
        </Modal>
      )}
    </>,
    el,
  );
};

export default ModalContainer;
