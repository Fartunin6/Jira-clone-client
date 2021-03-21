import { SET_BOARDS } from '../action-types/board-types';

const initalState = {
  boards: [],
};

const boardReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_BOARDS:
      return {
        boards: action.payload.boards,
      };
    default:
      return state;
  }
};

export default boardReducer;
