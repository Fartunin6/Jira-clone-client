import { ACCESS_DENIED, API, API_END, API_ERROR, API_START, API_SUCCESS } from '../action-types';

export const apiStart = (label) => ({
  type: API_START,
  payload: label,
});

export const apiEnd = (label) => ({
  type: API_END,
  payload: label,
});

export const accessDenied = (url) => ({
  type: ACCESS_DENIED,
  payload: {
    url,
  },
});

export const apiError = (error) => ({
  type: API_ERROR,
  payload: error,
});

export const apiSuccess = (message) => ({
  type: API_SUCCESS,
  payload: message,
});

export const apiAction = ({
  url = '',
  method = 'GET',
  data = null,
  accessToken = null,
  onSuccess,
  onFailure,
  label = '',
  headersOverride = null,
}) => {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
};
