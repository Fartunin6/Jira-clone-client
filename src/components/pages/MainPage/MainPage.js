import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../../redux/action-creators/board-actions';
import BoardItem from '../../BoardItem/BoardItem';

const MainPage = () => {
  const dispatch = useDispatch();
  const { boards } = useSelector(({ board }) => board);

  useEffect(() => {
    dispatch(getBoards());
  }, []);

  return (
    <section className="main">
      <ul className="main__list">
        {boards.map((board) => {
          return (
            <li key={board._id}>
              <BoardItem board={board} />
            </li>
          );
        })}
      </ul>

      <button className="button primary-button" type="button">
        create new board
      </button>
    </section>
  );
};

export default MainPage;
