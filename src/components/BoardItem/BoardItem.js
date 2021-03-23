import React from 'react';

const BoardItem = ({ title, background, deleteBoard, _id }) => {
  return (
    <div className="board-item" style={{ background: background }}>
      <div className="board-item__title">{title}</div>
      <div onClick={() => deleteBoard(_id)} className="board-item__delete"></div>
    </div>
  );
};

export default BoardItem;
