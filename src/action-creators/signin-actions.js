import { SET_USER, SIGN_IN_FAILED, SIGN_UP } from '../action-types';
import { AUTH_ENDPOINTS } from '../endpoints';
import { apiAction, apiError } from './api-actions';

export const signInUser = (data) => {
  return apiAction({
    url: AUTH_ENDPOINTS.SIGN_IN,
    method: 'POST',
    label: SIGN_UP,
    onSuccess: setUserData,
    onFailure: apiError,
    data,
  });
};

export const setUserData = (data) => ({
  type: SET_USER,
  payload: data,
});

export const signInFailed = (error) => ({
  type: SIGN_IN_FAILED,
  payload: error,
});
