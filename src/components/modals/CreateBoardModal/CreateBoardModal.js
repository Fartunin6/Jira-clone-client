import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBackgrounds } from '../../../redux/action-creators/background-actions';
import { createBoard } from '../../../redux/action-creators/board-actions';
import Modal from '../../core/Modal/Modal';
import CreateBoardForm from '../../forms/CreateBoardForm';

const CreateBoardModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { backgrounds } = useSelector(({ background }) => background);

  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    dispatch(getBackgrounds());
  }, []);

  const onSubmit = (formData) => {
    const data = { ...formData, background: backgrounds[activeBg].id };
    dispatch(createBoard(data));
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="create-board">
        <CreateBoardForm onSubmit={onSubmit} />

        <div className="create-board__bgs">
          <ul className="create-board__list">
            {backgrounds.map(({ color, id }, idx) => {
              return (
                <li
                  onClick={() => setActiveBg(idx)}
                  key={`${id}`}
                  className="create-board__bg-item"
                  style={{ background: color }}>
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
