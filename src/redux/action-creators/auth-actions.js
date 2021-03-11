import {
  SIGN_UP,
  SET_USER,
  SIGN_IN,
  ACTIVATION,
  RESET_USER,
  USER,
} from '../action-types/auth-types';
import { AUTH_ENDPOINTS, USER_ENDPOINTS } from '../../endpoints';
import { USER_STORAGE } from '../../constants/storages';
import { apiAction } from './api-actions';

export const signUpUser = (data) => {
  return apiAction({
    url: AUTH_ENDPOINTS.SIGN_UP,
    method: 'POST',
    label: SIGN_UP,
    data,
  });
};

export const signInUser = (data) => {
  return apiAction({
    url: AUTH_ENDPOINTS.SIGN_IN,
    method: 'POST',
    label: SIGN_IN,
    onSuccess: setUser,
    data,
  });
};

export const activationUser = (token) => {
  return apiAction({
    url: AUTH_ENDPOINTS.ACTIVATION,
    method: 'POST',
    label: ACTIVATION,
    data: { token },
  });
};

export const getCurrentUser = (token) => {
  return apiAction({
    url: USER_ENDPOINTS.CURRENT_USER,
    method: 'GET',
    label: USER,
    onSuccess: setUserData,
    data: { token },
  });
};

// reducer actions
const setUserData = (data) => ({
  type: SET_USER,
  payload: data,
});

const resetUserData = () => ({
  type: RESET_USER,
});

export const setUser = (data) => (dispatch) => {
  localStorage.setItem(USER_STORAGE, data.token);
  dispatch(setUserData(data));
};

export const resetUser = () => (dispatch) => {
  localStorage.removeItem(USER_STORAGE);
  dispatch(resetUserData());
};
