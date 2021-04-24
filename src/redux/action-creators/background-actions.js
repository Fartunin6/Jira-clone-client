import { GET_BACKGROUNDS, SET_BACKGROUNDS } from '../action-types/background-types';
import { apiAction } from './api-actions';
import { BACKGROUND_ENDPOINTS } from '../../endpoints';

export const getBackgrounds = () => {
  return apiAction({
    url: BACKGROUND_ENDPOINTS.GET_BACKGROUNDS,
    method: 'GET',
    label: GET_BACKGROUNDS,
    onSuccess: setBackgrounds,
  });
};

const setBackgrounds = (backgrounds) => ({
  type: SET_BACKGROUNDS,
  payload: backgrounds,
});
