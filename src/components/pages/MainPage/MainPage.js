import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards, deleteBoard, updateBoard } from '../../../redux/action-creators/board-actions';
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

  const saveBoardById = (id, isSaved) => {
    dispatch(updateBoard(id, { isSaved: !isSaved }));
  };

  const changeTitleById = (id, title) => {
    dispatch(updateBoard(id, { title }));
  };

  const mapBoards = (boards) => {
    return boards.map((board) => {
      return (
        <li key={board._id}>
          <BoardItem
            {...board}
            deleteBoard={deleteBoardById}
            saveBoard={saveBoardById}
            changeTitle={changeTitleById}
          />
        </li>
      );
    });
  };

  return (
    <section className="main">
      {boards.filter((board) => board.isSaved).length > 0 && (
        <div>
          <h2 className="main__saved-title">Saved boards:</h2>
          <ul className="main__list">{mapBoards(boards.filter((board) => board.isSaved))}</ul>
        </div>
      )}

      <div>
        <h2 className="main__all-title">All boards:</h2>
        {boards.length > 0 ? (
          <ul className="main__list">{mapBoards(boards)}</ul>
        ) : (
          <p className="main__all-error">You have not added any boards yet</p>
        )}
      </div>

      <button onClick={() => setVisibleModal(true)} className="button primary-button" type="button">
        Create a new board
      </button>

      {visibleModal && <CreateBoardModal onClose={() => setVisibleModal(false)} />}
    </section>
  );
};

export default MainPage;
