import React from 'react';

const BoardButton = ({ text, icon, onClick, hint }) => {
  return (
    <button onClick={onClick} className="button board-button" title={hint}>
      {text}
      {icon && <img src={`${icon}`} alt="button icon" />}
    </button>
  );
};

export default BoardButton;
