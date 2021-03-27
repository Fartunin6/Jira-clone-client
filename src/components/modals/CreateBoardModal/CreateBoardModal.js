import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BOARD_BACKGROUNDS } from '../../../constants/board-backgrounds';
import { createBoard } from '../../../redux/action-creators/board-actions';
import Modal from '../../core/Modal/Modal';
import CreateBoardForm from '../../forms/CreateBoardForm';

const CreateBoardModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [activeBg, setActiveBg] = useState(0);

  const onSubmit = (formData) => {
    const data = { ...formData, background: BOARD_BACKGROUNDS[activeBg] };
    dispatch(createBoard(data));
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="create-board">
        <CreateBoardForm onSubmit={onSubmit} />

        <div className="create-board__bgs">
          <ul className="create-board__list">
            {BOARD_BACKGROUNDS.map((bg, idx) => {
              return (
                <li
                  onClick={() => setActiveBg(idx)}
                  key={`${BOARD_BACKGROUNDS[idx]}`}
                  className="create-board__bg-item"
                  style={{ background: BOARD_BACKGROUNDS[idx] }}>
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
