import { ACTIVATION } from '../action-types';
import { AUTH_ENDPOINTS } from '../endpoints';
import { apiAction } from './api-actions';

export const activationUser = (token) => {
  return apiAction({
    url: AUTH_ENDPOINTS.ACTIVATION,
    method: 'POST',
    label: ACTIVATION,
    data: { token },
  });
};
