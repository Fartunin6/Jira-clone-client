import React from 'react';
import Modal from '../../core/Modal/Modal';

const BasicModal = ({ onClose, text, icon }) => {
  return (
    <Modal onClose={onClose}>
      <div className="basic-modal">
        {text}
        {icon && <img src={`${icon}`} alt="modal icon" />}
      </div>
    </Modal>
  );
};

export default BasicModal;
