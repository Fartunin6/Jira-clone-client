import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards, deleteBoard } from '../../../redux/action-creators/board-actions';
import BoardItem from '../../BoardItem/BoardItem';
import CreateBoardModal from '../../modals/CreateBoardModal/CreateBoardModal';

const MainPage = () => {
  const dispatch = useDispatch();
  const { boards } = useSelector(({ board }) => board);

  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    dispatch(getBoards());
  }, []);

  const deleteBoardById = (id) => {
    dispatch(deleteBoard(id));
  };

  return (
    <section className="main">
      <ul className="main__list">
        {boards.map((board) => {
          return (
            <li key={board._id}>
              <BoardItem {...board} deleteBoard={deleteBoardById} />
            </li>
          );
        })}
      </ul>

      <button onClick={() => setVisibleModal(true)} className="button primary-button" type="button">
        Create new board
      </button>

      {visibleModal && <CreateBoardModal onClose={() => setVisibleModal(false)} />}
    </section>
  );
};

export default MainPage;
