import React from 'react';

const BoardItem = ({ board: { title } }) => {
  return <div className="board-item">{title}</div>;
};

export default BoardItem;
