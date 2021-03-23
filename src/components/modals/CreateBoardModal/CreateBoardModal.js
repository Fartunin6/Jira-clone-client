import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../../redux/action-creators/board-actions';
import Modal from '../../core/Modal/Modal';
import CreateBoardForm from '../../forms/CreateBoardForm';

const backgrounds = ['red', 'black', 'green', 'blue', 'orange', 'purple', 'grey'];

const CreateBoardModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [activeBg, setActiveBg] = useState(0);

  const onSubmit = (formData) => {
    const data = { ...formData, background: backgrounds[activeBg] };
    dispatch(createBoard(data));
  };

  return (
    <Modal onClose={onClose}>
      <div className="create-board">
        <CreateBoardForm onSubmit={onSubmit} />

        <div className="create-board__bgs">
          <ul className="create-board__list">
            {backgrounds.map((bg, idx) => {
              return (
                <li
                  onClick={() => setActiveBg(idx)}
                  key={`${backgrounds[idx]}`}
                  className="create-board__bg-item"
                  style={{ background: backgrounds[idx] }}>
                  {activeBg === idx && <span className="create-board__active"></span>}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default CreateBoardModal;
