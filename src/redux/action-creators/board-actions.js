import { GET_BOARDS, SET_BOARDS } from '../action-types/board-types';

import { BOARD_ENDPOINTS } from '../../endpoints';
import { apiAction } from './api-actions';

export const getBoards = () => {
  return apiAction({
    url: BOARD_ENDPOINTS.GET_BOARDS,
    method: 'GET',
    label: GET_BOARDS,
    onSuccess: setBoards,
  });
};

const setBoards = (boards) => ({
  type: SET_BOARDS,
  payload: boards,
});
