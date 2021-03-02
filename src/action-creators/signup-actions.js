import { SIGN_UP } from '../action-types';
import { AUTH_ENDPOINTS } from '../endpoints';
import { apiAction } from './api-actions';

export const signUpUser = (data) => {
  return apiAction({
    url: AUTH_ENDPOINTS.SIGN_UP,
    method: 'POST',
    label: SIGN_UP,
    data,
  });
};
