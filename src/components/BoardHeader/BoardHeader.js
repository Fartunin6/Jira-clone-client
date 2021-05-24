import React, { useState } from 'react';
import BoardButton from '../core/BoardButton/BoardButton';
import BasicModal from '../modals/BasicModal/BasicModal';

const BoardHeader = ({ board }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <div className="board-header">
      <div className="board-header__section">
        <BoardButton text="Description" onClick={() => setVisibleModal(true)} />
        <BoardButton text="Invite team member" hint={'Add team member'} />
        {visibleModal && (
          <BasicModal onClose={() => setVisibleModal(false)} text={board.description} />
        )}
      </div>
      <div className="board-header__section">
        <h1>{board.title}</h1>
      </div>
      <div className="board-header__section">
        <BoardButton text="Description" onClick={() => setVisibleModal(true)} />
        <BoardButton text="Invite team member" hint={'Add team member'} />
      </div>
    </div>
  );
};

export default BoardHeader;
