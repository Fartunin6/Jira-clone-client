import { SET_USER, SIGN_IN } from '../action-types';
import { USER_STORAGE } from '../constants/storages';
import { AUTH_ENDPOINTS } from '../endpoints';
import { apiAction } from './api-actions';

export const signInUser = (data) => {
  return apiAction({
    url: AUTH_ENDPOINTS.SIGN_IN,
    method: 'POST',
    label: SIGN_IN,
    onSuccess: setUserData,
    data,
  });
};

export const setUserData = (data) => {
  localStorage.setItem(USER_STORAGE, JSON.stringify(data));
  return {
    type: SET_USER,
    payload: data,
  };
};
