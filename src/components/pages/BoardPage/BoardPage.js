import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BoardHeader from '../../BoardHeader/BoardHeader';
import { getBoard } from '../../../redux/action-creators/board-actions';

const BoardPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentBoard } = useSelector(({ board }) => board);

  useEffect(() => {
    dispatch(getBoard(id));
  }, []);

  return (
    <>
      {currentBoard && (
        <div className="board" style={{ background: currentBoard.background.color }}>
          <BoardHeader board={currentBoard} />
        </div>
      )}
    </>
  );
};

export default BoardPage;
