import {
  CREATE_BOARD,
  DELETE_BOARD,
  GET_BOARDS,
  SET_BOARDS,
  UPDATE_BOARD,
} from '../action-types/board-types';

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

export const createBoard = (data) => {
  return apiAction({
    url: BOARD_ENDPOINTS.CREATE_BOARD,
    method: 'POST',
    label: CREATE_BOARD,
    onSuccess: setBoards,
    data,
  });
};

export const deleteBoard = (id) => {
  return apiAction({
    url: BOARD_ENDPOINTS.DELETE_BOARD,
    method: 'GET',
    label: DELETE_BOARD,
    onSuccess: setBoards,
    data: { id },
  });
};

export const updateBoard = (id, newFields) => {
  return apiAction({
    url: BOARD_ENDPOINTS.UPDATE_BOARD,
    method: 'PATCH',
    label: UPDATE_BOARD,
    onSuccess: setBoards,
    data: { id, newFields },
  });
};

const setBoards = (boards) => ({
  type: SET_BOARDS,
  payload: boards,
});
