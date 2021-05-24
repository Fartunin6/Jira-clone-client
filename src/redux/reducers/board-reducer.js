import { SET_BOARD, SET_BOARDS } from '../action-types/board-types';

const initalState = {
  boards: [],
  currentBoard: null,
};

const boardReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_BOARDS:
      return {
        ...state,
        boards: action.payload.data,
      };
    case SET_BOARD:
      return {
        ...state,
        currentBoard: action.payload.data,
      };
    default:
      return state;
  }
};

export default boardReducer;
