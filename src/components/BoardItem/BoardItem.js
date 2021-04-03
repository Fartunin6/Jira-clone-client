import React, { useState } from 'react';
import starIcon from '../../assets/images/star.png';
import penIcon from '../../assets/images/pen.svg';

const BoardItem = ({ title, background, deleteBoard, saveBoard, changeTitle, _id, isSaved }) => {
  const [visibleInput, setVisibleInput] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const changeBoardTitle = () => {
    setVisibleInput(false);
    if (editedTitle !== title && editedTitle !== '') {
      changeTitle(_id, editedTitle);
    }
  };

  const cancelChangingTitle = () => {
    setVisibleInput(false);
    setEditedTitle(title);
  };

  return (
    <div className="board-item" style={{ background: background }}>
      <div className="board-item__title">
        {visibleInput ? (
          <>
            <input
              type="text"
              onChange={(e) => setEditedTitle(e.target.value)}
              value={editedTitle}
              className="board-item__input"
            />
            <button
              disabled={editedTitle === ''}
              type="button"
              onClick={changeBoardTitle}
              className="board-item__active"></button>
            <div onClick={cancelChangingTitle} className="board-item__cancel"></div>
          </>
        ) : (
          <>
            <span>{title}</span>
            <img
              onClick={() => setVisibleInput(true)}
              src={penIcon}
              alt="pen"
              className="board-item__change"
            />
          </>
        )}
      </div>

      <div onClick={() => deleteBoard(_id)} className="board-item__delete"></div>

      <img
        onClick={() => saveBoard(_id, isSaved)}
        src={starIcon}
        alt="star"
        className={`board-item__save ${isSaved ? 'board-item__saved' : ''}`}
      />
    </div>
  );
};

export default BoardItem;
