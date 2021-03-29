import React, { useState } from 'react';
import starIcon from '../../assets/images/star.png';
import yellowStarIcon from '../../assets/images/yellow-star.png';
import penIcon from '../../assets/images/pen.svg';

const BoardItem = ({ title, background, deleteBoard, saveBoard, changeTitle, _id, isSaved }) => {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  return (
    <div className="board-item" style={{ background: background }}>
      <div className="board-item__title">
        {isEditTitle ? (
          <>
            <input
              type="text"
              onChange={(e) => setEditedTitle(e.target.value)}
              value={editedTitle}
              className="board-item__input"
            />{' '}
            <div
              onClick={() => {
                changeTitle(_id, editedTitle);
                setIsEditTitle(false);
              }}
              className="board-item__active"></div>
          </>
        ) : (
          <>
            <span>{title}</span>
            <img
              onClick={() => setIsEditTitle(true)}
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
